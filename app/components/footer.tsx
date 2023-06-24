import Image from 'next/image'
import githubSVG from '@/public/github.svg'

export function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue1left to-blue1right p-10">
        <div className='text-white text-xs flex justify-between flex-wrap whitespace-nowrap px-8 pb-4'>
        <div className="text-base whitespace-nowrap">
            Codeforces Ranklist<sup>TM</sup> V 2.0 
            <div className='text-sm flex flex-wrap justify-start '>
                Made with 💖 by&nbsp;
                <a
                href='https://www.github.com/Adrito-M'
                target='_blank'
                className='underline underline-offset-4'
                >
                Adrito Mukherjee
                </a>&nbsp;
                &&nbsp;
                <a
                href='https://www.github.com/somudas'
                target='_blank'
                className='underline underline-offset-4'
                >
                Soumyadeep Das
                </a>
            </div>
        </div>
        
        <div className='md:items-end flex flex-col hidden md:flex'>
            <div className="flex flex-wrap text-sm md:text-base">
                Feel free to contribute or create issues on
            </div>
            
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
    </div>
  )
}
