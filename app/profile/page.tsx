import { User } from '@/models'
import { getAuthServerSession } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import EditProfile from './components/editProfile'
import {
  mutateAdmYr,
  mutateDept,
  mutateName,
  addHandle,
  deleteHandle,
  initiateVerification,
  verifyHandle,
  testFn,
} from './actions'
import EditHandles from './components/editHandles'
import AddHandle from './components/addHandle'
import { z } from 'zod'
import { RANK, RANK_KEYS } from '@/utils/types'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MoveLeft } from 'lucide-react'
import Link from 'next/link'

export default async function ProfilePage() {
  const session = await getAuthServerSession()
  if (!session) redirect('/')

  const user = await User.findOne({ email: session.user.email })

  if (!user) {
    return <></>
  }

  const url = `https://codeforces.com/api/user.info?handles=${user.usernames
    .map(username => username.username)
    .join(';')}`
  console.log(url)
  const res = user.usernames.length
    ? await fetch(url, { next: { revalidate: 1200 } })
        .then(res => res.json())
        .then(res => (res.status === 'OK' ? res.result : []))
    : []
  const DataSchema = z.object({
    handle: z.string(),
    rank: z
      .string()
      .optional()
      .default('unrated')
      .transform(
        rank => RANK[rank.toUpperCase().replace(' ', '_') as RANK_KEYS] as RANK
      ),
    maxRank: z
      .string()
      .optional()
      .default('unrated')
      .transform(
        rank => RANK[rank.toUpperCase().replace(' ', '_') as RANK_KEYS] as RANK
      ),
    rating: z.number().optional().default(0),
    maxRating: z.number().optional().default(0),
    titlePhoto: z.string().url(),
    verified: z.boolean().optional().default(false),
  })
  const zodSchema = z.array(DataSchema)
  const usernames = zodSchema.parse(res)
  usernames.forEach(
    username =>
      (username.verified = !!user.usernames.find(
        _username => _username.username === username.handle.toLowerCase()
      )?.verified)
  )

  return (
    <>
      <Button
        variant='ghost'
        className='m-2 focus-visible:ring-offset-0 focus-visible:ring-white'
        asChild
      >
        <Link href='/'>
          <MoveLeft className='mr-2' /> Back to Home
        </Link>
      </Button>
      <div className='flex justify-center w-full pt-4 pb-10'>
        <div className='bg-gradient-to-r from-blue1left to-blue1right rounded-lg w-9/12 max-w-5xl px-10 py-8'>
          <EditProfile
            _name={user.name}
            _dept={user.dept}
            _adm_yr={user.adm_yr}
            mutateName={mutateName}
            mutateDept={mutateDept}
            mutateAdmYr={mutateAdmYr}
          />
          <EditHandles
            usernames={usernames}
            deleteHandle={deleteHandle}
            initiateVerification={initiateVerification}
            verifyHandle={verifyHandle}
          />
          <AddHandle addFunc={addHandle} />
        </div>
      </div>
    </>
  )
}
