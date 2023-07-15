'use server'

import { User } from '@/models'
import { getAuthServerSession } from '../api/auth/[...nextauth]/route'
import { z } from 'zod'
import { departments } from '@/utils/constants'
import { revalidatePath } from 'next/cache'
import { problems } from '@/utils/problems'
import crypto from 'crypto'

//TODO: Handle Zod Errors

export async function mutateName(name: string) {
  if (!z.string().safeParse(name).success) return
  const session = await getAuthServerSession()
  if (!session) return
  const user = await User.findOne({ email: session.user.email })
  if (!user) return
  user.name = name
  await user.save()
}

export async function mutateDept(dept: string) {
  if (!z.string().safeParse(dept).success) return
  if (!departments.map(department => department.value).includes(dept)) return
  const session = await getAuthServerSession()
  if (!session) return
  const user = await User.findOne({ email: session.user.email })
  if (!user) return
  user.dept = dept
  await user.save()
}

export async function mutateAdmYr(adm_yr: number) {
  if (!z.number().int().gte(1900).lte(2100).safeParse(adm_yr).success) return
  const session = await getAuthServerSession()
  if (!session) return
  const user = await User.findOne({ email: session.user.email })
  if (!user) return
  user.adm_yr = adm_yr
  await user.save()
}

export async function addHandle(handle: string) {
  const CODEFORCES_HANDLE_REGEX = /^[a-zA-Z0-9_\-\.]{3,24}$/
  const handleSchema = z
    .string()
    .refine(val => CODEFORCES_HANDLE_REGEX.test(val))
    .transform(val => val.toLowerCase())
  if (!handleSchema.safeParse(handle).success) return false
  handle = handleSchema.parse(handle)

  try {
    const status: string = await fetch(
      `https://codeforces.com/api/user.info?handles=${handle}`,
      { cache: 'no-store' }
    )
      .then(res => res.json())
      .then(res => res.status)
    if (status !== 'OK') return false
  } catch (err) {
    return false
  }
  const session = await getAuthServerSession()
  if (!session) return false
  const user = await User.findOne({ email: session.user.email })
  if (!user) return false
  if (
    user.usernames.find(username => username.username === handle) !== undefined
  )
    return false
  const otherUsersWithHandleVerified = await User.find({
    usernames: { $elemMatch: { username: handle, verified: true } },
  })
  if (otherUsersWithHandleVerified.length) return false
  user.usernames.push({ username: handle, verified: false })
  await user.save()
  revalidatePath('/profile')
  return true
}

export async function deleteHandle(handle: string) {
  const CODEFORCES_HANDLE_REGEX = /^[a-zA-Z0-9_\-\.]{3,24}$/
  const handleSchema = z
    .string()
    .refine(val => CODEFORCES_HANDLE_REGEX.test(val))
    .transform(val => val.toLowerCase())
  if (!handleSchema.safeParse(handle).success) return
  handle = handleSchema.parse(handle)

  const session = await getAuthServerSession()
  if (!session) return
  const user = await User.findOne({ email: session.user.email })
  if (!user) return
  user.usernames = user.usernames.filter(
    username => username.username !== handle
  )
  await user.save()
  revalidatePath('/profile')
}

export async function initiateVerification(handle: string): Promise<string> {
  const CODEFORCES_HANDLE_REGEX = /^[a-zA-Z0-9_\-\.]{3,24}$/
  const handleSchema = z
    .string()
    .refine(val => CODEFORCES_HANDLE_REGEX.test(val))
    .transform(val => val.toLowerCase())
  if (!handleSchema.safeParse(handle).success) return ''
  handle = handleSchema.parse(handle)

  const session = await getAuthServerSession()
  if (!session) return ''
  const user = await User.findOne({ email: session.user.email })
  if (!user) return ''
  if (
    !user.usernames.find(
      username => username.username === handle && !username.verified
    )
  )
    return ''
  const pvt_key = Buffer.from(process.env.PRIVATE_KEY, 'base64').toString(
    'utf-8'
  )
  const timestamp = Date.now()
  const problem = problems[(problems.length * Math.random()) | 0]
  // payload = <timestamp>-<contestId>-<problemIndex>-<email>-<handle>
  const payload = `${timestamp}-${problem[0]}-${problem[1]}-${session.user.email}-${handle}`
  const encryptedData = crypto
    .privateEncrypt(pvt_key, Buffer.from(payload, 'utf-8'))
    .toString('base64')
  return encryptedData
}

export async function verifyHandle(encryptedData: string): Promise<boolean> {
  if (!z.string().safeParse(encryptedData).success) return false
  const session = await getAuthServerSession()
  if (!session) return false
  const user = await User.findOne({ email: session.user.email })
  if (!user) return false
  const TWELVE_MINUTES_IN_MS = 12 * 60 * 1000
  const pub_key = Buffer.from(
    process.env.NEXT_PUBLIC_PUBLIC_KEY,
    'base64'
  ).toString('utf-8')
  const timestamp = Date.now()
  let payload: string
  try {
    payload = crypto
      .publicDecrypt(pub_key, Buffer.from(encryptedData, 'base64'))
      .toString('utf-8')
  } catch (err) {
    return false
  }
  const rawData = payload.split('-')
  if (rawData.length !== 5) return false
  const payload_timestamp = parseInt(rawData[0])
  const payload_contestId = parseInt(rawData[1])
  const payload_problemIndex = rawData[2]
  const payload_email = rawData[3]
  const payload_handle = rawData[4]
  if (Number.isNaN(payload_timestamp)) return false
  if (
    payload_timestamp > timestamp ||
    payload_timestamp < timestamp - TWELVE_MINUTES_IN_MS
  )
    return false
  if (Number.isNaN(rawData[1])) return false
  if (
    !problems.find(
      problem =>
        problem[0] === payload_contestId && problem[1] === payload_problemIndex
    )
  )
    return false
  if (payload_email !== session.user.email) return false
  if (
    !user.usernames.find(
      uname => uname.username === payload_handle && !uname.verified
    )
  )
    return false
  try {
    const res = await fetch(
      `https://codeforces.com/api/user.status?handle=${payload_handle}&from=1&count=10`,
      { cache: 'no-store' }
    )
      .then(res => res.json())
      .then(res => res.result)
    if (
      !res.find(
        (i: any) =>
          i.problem.contestId === payload_contestId &&
          i.problem.index === payload_problemIndex
      )
    )
      return false
    const handleIndex = user.usernames.findIndex(
      uname => uname.username === payload_handle && !uname.verified
    )
    user.usernames[handleIndex].verified = true
    await user.save()
    revalidatePath('/profile')
    return true
  } catch (err) {
    return false
  }
}

export async function testFn(text: string = 'world') {
  console.log(`Hello ${text}`)
  return
}
