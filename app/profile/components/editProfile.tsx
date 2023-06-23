'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Edit, Save } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useEffect, useRef, useState, useTransition } from 'react'
import Combobox from './combobox'

export default function EditProfile({
  _name,
  _dept,
  _adm_yr,
  mutateName,
  mutateDept,
  mutateAdmYr,
}: {
  _name: string
  _dept: string
  _adm_yr: number
  mutateName: (name: string) => Promise<void>
  mutateDept: (dept: string) => Promise<void>
  mutateAdmYr: (adm_yr: number) => Promise<void>
}) {
  const [name, setName] = useState(_name)
  const [isEdittingName, setIsEdittingName] = useState(false)
  const [dept, setDept] = useState(_dept)
  const [isEdittingDept, setIsEdittingDept] = useState(false)
  const [adm_yr, setAdmYr] = useState(_adm_yr)
  const [isEdittingAdmYr, setIsEdittingAdmYr] = useState(false)
  const [isPending, startTransition] = useTransition()
  const nameInputElement = useRef<HTMLInputElement | null>(null)
  const admyrInputElement = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (isEdittingName) {
      nameInputElement.current?.focus()
      const _length = nameInputElement.current?.value.length || 0
      nameInputElement.current?.setSelectionRange(_length, _length)
    }
  }, [isEdittingName])

  useEffect(() => {
    if (isEdittingAdmYr) {
      admyrInputElement.current?.focus()
      const _length = admyrInputElement.current?.value.length || 0
      admyrInputElement.current?.setSelectionRange(_length, _length)
    }
  }, [isEdittingAdmYr])

  return (
    <>
      <h2 className='text-2xl font-bold tracking-tight my-4'>Edit Profile</h2>
      <p className='text-muted-foreground mt-4 mb-4'>Details:</p>
      <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[2fr_5fr] items-center w-full md:w-10/12 justify-between my-2'>
        <p>Name:</p>
        <form className='flex space-x-2 justify-between w-10/12'>
          <Input
            type='text'
            placeholder='Name'
            className='max-w-md border-bgblueleft'
            value={name}
            onChange={event => setName(event.target.value)}
            disabled={!isEdittingName}
            ref={nameInputElement}
          />
          <Button
            type='submit'
            className={`px-2 py-2 ${
              isEdittingName
                ? 'bg-green-400 hover:bg-green-500'
                : ' bg-blue-300 hover:bg-blue-500'
            }`}
            onClick={e => {
              e.preventDefault()
              if (isEdittingName) startTransition(() => mutateName(name))
              setIsEdittingName(!isEdittingName)
            }}
          >
            {isEdittingName ? <Save /> : <Edit />}
          </Button>
        </form>
      </div>
      <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[2fr_5fr] items-center w-full md:w-10/12 justify-between my-2'>
        <p>Department:</p>
        <div className='flex space-x-2 justify-between w-10/12'>
          <Combobox
            value={dept}
            setValue={setDept}
            disabled={!isEdittingDept}
          />
          <Button
            type='submit'
            className={`px-2 py-2 ${
              isEdittingDept
                ? 'bg-green-400 hover:bg-green-500'
                : ' bg-blue-300 hover:bg-blue-500'
            }`}
            onClick={() => {
              if (isEdittingDept) startTransition(() => mutateDept(dept))
              setIsEdittingDept(!isEdittingDept)
            }}
          >
            {isEdittingDept ? <Save /> : <Edit />}
          </Button>
        </div>
      </div>
      <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[2fr_5fr] items-center w-full md:w-10/12 justify-between my-2'>
        <p>Admission Year:</p>
        <form className='flex space-x-2 justify-between w-10/12'>
          <Input
            type='text'
            inputMode='numeric'
            placeholder='Admission Year'
            className='max-w-md border-bgblueleft'
            value={adm_yr}
            onChange={event => setAdmYr(parseInt(event.target.value))}
            disabled={!isEdittingAdmYr}
            ref={admyrInputElement}
          />
          <Button
            type='submit'
            className={`px-2 py-2 ${
              isEdittingAdmYr
                ? 'bg-green-400 hover:bg-green-500'
                : ' bg-blue-300 hover:bg-blue-500'
            }`}
            onClick={e => {
              e.preventDefault()
              if (isEdittingAdmYr) startTransition(() => mutateAdmYr(adm_yr))
              setIsEdittingAdmYr(!isEdittingAdmYr)
            }}
          >
            {isEdittingAdmYr ? <Save /> : <Edit />}
          </Button>
        </form>
      </div>
    </>
  )
}
