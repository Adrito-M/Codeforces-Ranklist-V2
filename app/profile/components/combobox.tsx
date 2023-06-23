'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { departments } from '@/utils/constants'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Combobox({
  value,
  setValue,
  disabled,
}: {
  value: string
  setValue: (department: string) => void
  disabled: boolean
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='justify-between w-full border-bgblueleft'
          disabled={disabled}
        >
          <span className='hidden md:block'>
            {value
              ? `${
                  departments.find(department => department.value === value)
                    ?.label
                } - ${
                  departments.find(department => department.value === value)
                    ?.longLabel
                }`
              : 'Select Department...'}
          </span>
          <span className='md:hidden'>
            {value
              ? `${
                  departments.find(department => department.value === value)
                    ?.label
                }`
              : 'Select'}
          </span>
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='p-0 w-full'>
        <Command>
          <CommandInput placeholder='Search Department...' />
          <CommandEmpty>No department found.</CommandEmpty>
          <CommandGroup className='max-h-72 min-w-full'>
            {departments.map(department => (
              <CommandItem
                key={department.value}
                onSelect={() => {
                  setValue(department.value)
                  setOpen(false)
                }}
                className='md:w-96'
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === department.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                <div className='hidden md:flex'>
                  <div className='w-10'>{department.label}</div>
                  <div className='w-4'>-</div>
                  <div className='pr-4'>{department.longLabel}</div>
                </div>
                <div className='md:hidden'>
                  <div className='w-10 pr-4'>{department.label}</div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
