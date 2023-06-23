'use client'

import Image from 'next/image'
import GoogleSVG from '@/public/google.svg'
import { signIn } from 'next-auth/react'

export default function GoogleButton({ text }: { text: string }) {
  return (
    <button
      className='px-4 bg-custompink rounded-sm py-1 border-[3px] border-blue1left min-w-[67px]'
      onClick={() => signIn('google')}
    >
      {/* <FontAwesomeIcon icon={faGoogle} className="pr-2"/> */}
      <div className='flex items-center justify-center'>
        <Image
          alt='google signin'
          src={GoogleSVG}
          className='h-[30px] w-[30px] md:mr-2'
        />
        <div className='text-[0.9rem] hidden md:block'>{text}</div>
      </div>
    </button>
  )
}
