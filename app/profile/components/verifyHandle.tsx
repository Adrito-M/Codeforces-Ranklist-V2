'use client'
import crypto from 'crypto'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { BadgeCheck, Loader2, RefreshCcw } from 'lucide-react'
import { useState, useTransition } from 'react'
import Countdown from './countdown'

export default function VerifyHandle({
  handle,
  verifyHandle,
  initiateVerification,
}: {
  handle: string
  verifyHandle: (encryptedData: string) => Promise<boolean>
  initiateVerification: (handle: string) => Promise<string>
}) {
  const [isPending, startTransition] = useTransition()
  const [details, setDetails] = useState({
    contestId: NaN,
    problemIndex: '',
    handle: '',
    encryptedData: '',
  })
  const [showError, setShowError] = useState(false)
  const populateDetails = (encryptedData: string): void => {
    const pub_key = Buffer.from(
      process.env.NEXT_PUBLIC_PUBLIC_KEY,
      'base64'
    ).toString('utf-8')
    let payload: string
    try {
      payload = crypto
        .publicDecrypt(pub_key, Buffer.from(encryptedData, 'base64'))
        .toString('utf-8')
    } catch (err) {
      return
    }
    const rawData = payload.split('-')
    if (rawData.length !== 5) return
    const payload_contestId = parseInt(rawData[1])
    const payload_problemIndex = rawData[2]
    const payload_handle = rawData[4]
    setDetails({
      contestId: payload_contestId,
      problemIndex: payload_problemIndex,
      handle: payload_handle,
      encryptedData: encryptedData,
    })
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <Dialog>
          <DialogTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                className='px-2 bg-transparent hover:bg-blue1left'
                onClick={() => {
                  if (isPending) return
                  setShowError(false)
                  startTransition(() => {
                    console.log('initiating verification process')
                    initiateVerification(handle).then(populateDetails)
                  })
                }}
              >
                <RefreshCcw
                  className={`text-yellow-300 ${
                    isPending ? 'animate-spin' : ''
                  }`}
                />
              </Button>
            </TooltipTrigger>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className='flex items-center'>
              <Countdown
                className='text-green-500 text-3xl'
                duration={10 * 60 * 1000}
              />
            </DialogHeader>
            <DialogDescription className='text-justify'>
              Make a submission to problem
              <Button
                variant='link'
                className='px-2 py-0 h-auto underline'
                asChild
              >
                <a
                  href={`https://www.codeforces.com/problemset/problem/${details.contestId}/${details.problemIndex}`}
                  target='_blank'
                >
                  {details.contestId}:{details.problemIndex}
                </a>
              </Button>
              before the timer runs out. Your submission does not need to be
              correct. After making a submission, click on{' '}
              <span className='text-white'>Verify</span>
            </DialogDescription>
            <DialogFooter className='sm:justify-between sm:items-center'>
              <div className='text-red-600 text-xs'>
                {showError ? (
                  <>
                    <div>Could not verify {details.handle}</div>
                    <div>Try submitting again or try again later</div>
                  </>
                ) : (
                  ''
                )}
              </div>
              <Button
                onClick={() =>
                  startTransition(async () => {
                    if (isPending) return
                    const status = await verifyHandle(details.encryptedData)
                    if (!status) setShowError(true)
                  })
                }
              >
                {isPending ? <Loader2 className='animate-spin' /> : 'Verify'}
              </Button>
            </DialogFooter>
          </DialogContent>
          <TooltipContent>
            <p className='text-xs'>Verify Handle</p>
          </TooltipContent>
        </Dialog>
      </Tooltip>
    </TooltipProvider>
  )
}
