'use client'

import {
  Dialog,
  //   DialogAction,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dispatch, SetStateAction, useState, useTransition } from 'react'
import { CheckCircle, Loader2, XCircle } from 'lucide-react'

function SuccessDialog() {
  return (
    <>
      <DialogHeader className=''>
        <CheckCircle className='text-green-500' />
      </DialogHeader>
      <DialogDescription>Handle added succesfully</DialogDescription>
      <DialogFooter>
        <DialogClose>
          <Button>Close</Button>
        </DialogClose>
      </DialogFooter>
    </>
  )
}

function FailureDialog() {
  return (
    <>
      <DialogHeader>
        <XCircle className='text-red-500' />
      </DialogHeader>
      <DialogDescription className='text-justify'>
        The handle could not be added. Make sure the handle is valid. If the
        handle is valid but you are still unable to add it, that might be an
        issue with the Codeforces API. In that case, try again later.
      </DialogDescription>
      <DialogFooter>
        <DialogClose>
          <Button>Close</Button>
        </DialogClose>
      </DialogFooter>
    </>
  )
}

function AddHandleDialogContent({
  addFunc,
  setShowFinalPage,
  setSuccess,
}: {
  addFunc: (handle: string) => Promise<boolean>
  setShowFinalPage: Dispatch<SetStateAction<boolean>>
  setSuccess: Dispatch<SetStateAction<boolean>>
}) {
  const [handle, setHandle] = useState('')
  const [isPending, startTransition] = useTransition()

  return (
    <DialogContent className='w-96'>
      <DialogHeader>
        <DialogTitle>Add New Handle</DialogTitle>
      </DialogHeader>
      <form>
        <DialogDescription>
          <Input
            type='text'
            placeholder='Handle...'
            className='mt-4 mb-6'
            value={handle}
            onChange={e => setHandle(e.target.value)}
          />
        </DialogDescription>
        <DialogFooter>
          <Button
            type='submit'
            onClick={e => {
              e.preventDefault()
              if (isPending) return
              startTransition(() => {
                addFunc(handle)
                  .then(res => setSuccess(res))
                  .then(() => setShowFinalPage(true))
              })
              console.log('clicked')
            }}
          >
            {isPending ? <Loader2 className='animate-spin' /> : <>Continue</>}
          </Button>
          <DialogClose>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}

function FinalDialogContent({ success }: { success: boolean }) {
  return (
    <DialogContent className='w-96'>
      {success ? <SuccessDialog /> : <FailureDialog />}
    </DialogContent>
  )
}

export default function AddHandle({
  addFunc,
}: {
  addFunc: (handle: string) => Promise<boolean>
}) {
  const [showFinalPage, setShowFinalPage] = useState(false)
  const [success, setSuccess] = useState(false)
  return (
    <div className='flex flex-row-reverse mt-6'>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='default' onClick={() => setShowFinalPage(false)}>
            Add New Handle
          </Button>
        </DialogTrigger>

        {showFinalPage ? (
          <FinalDialogContent success={success} />
        ) : (
          <AddHandleDialogContent
            setShowFinalPage={setShowFinalPage}
            setSuccess={setSuccess}
            addFunc={addFunc}
          />
        )}
      </Dialog>
    </div>
  )
}
