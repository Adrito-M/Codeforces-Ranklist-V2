'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { RANK } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  BadgeCheck,
  BadgeHelp,
  Loader2,
  RefreshCcw,
  Trash2,
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useRef, useTransition } from 'react'
import VerifyHandle from './verifyHandle'

function colorise(
  handle: string,
  rank: RANK,
  firstCharContrastOnLGM: boolean = false
): JSX.Element {
  const rankColor = new Map<RANK, string>([
    [RANK.UNRATED, 'text-[#e8e6e3]'],
    [RANK.NEWBIE, 'text-[#988f81]'],
    [RANK.PUPIL, 'text-[#72ff72]'],
    [RANK.SPECIALIST, 'text-[#57fcf2]'],
    [RANK.EXPERT, 'text-[#337dff]'],
    [RANK.CANDIDATE_MASTER, 'text-[#ff55ff]'],
    [RANK.MASTER, 'text-[#ff981a]'],
    [RANK.INTERNATIONAL_MASTER, 'text-[#ff981a]'],
    [RANK.GRANDMASTER, 'text-[#ff1a1a]'],
    [RANK.INTERNATIONAL_GRANDMASTER, 'text-[#ff1a1a]'],
    [RANK.LEGENDARY_GRANDMASTER, 'text-[#ff1a1a]'],
  ])
  const color = rankColor.get(rank)
  return rank === RANK.LEGENDARY_GRANDMASTER && firstCharContrastOnLGM ? (
    <>
      <span className='text-white'>{handle[0]}</span>
      <span className={color}>{handle.substring(1)}</span>
    </>
  ) : (
    <span className={color}>{handle}</span>
  )
}

export default function EditHandles({
  usernames,
  deleteHandle,
  initiateVerification,
  verifyHandle,
}: {
  usernames: {
    verified: boolean
    handle: string
    rank: RANK
    maxRank: RANK
    rating: number
    maxRating: number
    titlePhoto: string
  }[]
  deleteHandle: (handle: string) => Promise<void>
  initiateVerification: (handle: string) => Promise<string>
  verifyHandle: (encryptedData: string) => Promise<boolean>
}) {
  const [isPending, startTransition] = useTransition()
  const closeDialogButton = useRef<HTMLButtonElement | null>(null)
  return (
    <>
      <h2 className='text-2xl font-bold tracking-tight mt-16 mb-6'>Handles</h2>
      <Table>
        {usernames.length ? (
          <></>
        ) : (
          <TableCaption>No Handles Added</TableCaption>
        )}
        <TableHeader>
          <TableRow>
            <TableHead className='w-[20px]'></TableHead>
            <TableHead className='w-auto'>Handle</TableHead>
            <TableHead className='flex items-center space-x-2 w-30'>
              <BadgeCheck className='text-green-500 opacity-0' />
              <div>Status</div>
            </TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usernames.map((username, index) => (
            <TableRow key={index}>
              <TableCell className='font-medium'>{index + 1}</TableCell>
              <TableCell>
                <span className='flex items-center gap-x-5'>
                  <Image
                    alt='titlePhoto'
                    src={username.titlePhoto}
                    width='100'
                    height='100'
                    quality='100'
                    className='rounded-full w-12 h-12'
                  />
                  <Link
                    href={`https://codeforces.com/profile/${username.handle}`}
                    target='_blank'
                  >
                    {colorise(username.handle, username.rank, true)}
                  </Link>
                </span>
              </TableCell>
              <TableCell>
                {username.verified ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className='flex items-center space-x-2'>
                          <BadgeCheck className='text-green-500' />
                          <div>Verified</div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='text-xs'>
                          Verified handles will appear on home page
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className='flex items-center space-x-2'>
                          <BadgeHelp className='text-yellow-500' />
                          <div>Unverified</div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='text-xs w-40 text-center'>
                          Unverified handles don&apos;t appear on home page
                        </p>
                        <p className='text-xs w-40 text-center'>
                          Click verify button to start verification process
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </TableCell>
              <TableCell className='text-right'>
                {username.verified ? null : (
                  <VerifyHandle
                    handle={username.handle}
                    verifyHandle={verifyHandle}
                    initiateVerification={initiateVerification}
                  />
                )}
                <TooltipProvider>
                  <Tooltip>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <TooltipTrigger asChild>
                          <Button className='px-2 bg-transparent hover:bg-blue1left'>
                            <Trash2 className='text-red-600' />
                          </Button>
                        </TooltipTrigger>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your handle from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            className='hidden'
                            ref={closeDialogButton}
                          ></AlertDialogAction>
                          <Button
                            className='bg-red-500 text-white hover:bg-red-400'
                            onClick={() => {
                              if (isPending) return
                              startTransition(() => {
                                deleteHandle(username.handle)
                                  .then(() =>
                                    closeDialogButton.current?.click()
                                  )
                                  .then(() =>
                                    console.log(`deleted ${username.handle}`)
                                  )
                              })
                            }}
                          >
                            {isPending ? (
                              <Loader2 className='animate-spin' />
                            ) : (
                              <>Delete</>
                            )}
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <TooltipContent>
                      <p className='text-xs'>Delete Handle</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
