import Image from 'next/image'
import githubSVG from '@/public/github.svg'

export function Footer() {
  return (
    <div className='bg-gradient-to-r from-blue1left to-blue1right w-full flex justify-between flex-wrap text-white text-xs px-8 pt-3 pb-4'>
      <div className='w-full md:w-fit'>
        <div className='whitespace-nowrap m-auto w-fit md:w-full'>
          Codeforces Ranklist<sup>TM</sup> V 2.0
        </div>
        <div className='text-xs md:text-sm w-full block md:flex'>
          <div className='m-auto w-fit md:w-full'>Made by&nbsp;</div>
          <div className='m-auto w-fit md:w-full whitespace-nowrap'>
            <a
              href='https://www.github.com/Adrito-M'
              target='_blank'
              className='underline underline-offset-4'
            >
              Adrito Mukherjee
            </a>
            &nbsp; & &nbsp;
            <a
              href='https://www.github.com/somudas'
              target='_blank'
              className='underline underline-offset-4'
            >
              Soumyadeep Das
            </a>
          </div>
        </div>
      </div>

      <div className='items-end flex-col hidden md:flex'>
        <div className='flex'>Feel free to contribute or create issues on</div>

        <div>
          <a
            href='https://github.com/Adrito-M/Codeforces-Ranklist-V2'
            target='_blank'
            className='flex items-center space-x-1 flex-wrap'
          >
            <Image className='w-5 h-5' src={githubSVG} alt='github-icon' />
            <span className='underline underline-offset-4'>
              Adrito-M/Codeforces-Ranklist-V2
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
