'use client'

import { Table } from '@tanstack/react-table'
import { X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableViewOptions } from './data-table-view-options'

import { departments } from '@/utils/constants'
import { DataTableFacetedFilter } from './data-table-faceted-filter'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length

  // console.log([...table.getColumn('adm_yr')?.getFacetedUniqueValues().keys()])
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='Filter handles...'
          value={(table.getColumn('handle')?.getFilterValue() as string) ?? ''}
          onChange={event =>
            table.getColumn('handle')?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px] border-bgblueleft'
        />
        <div className='hidden md:block'>
          {table.getColumn('dept') && (
            <DataTableFacetedFilter
              column={table.getColumn('dept')}
              title='Departments'
              options={departments}
            />
          )}
        </div>
        <div className='hidden md:block'>
          {table.getColumn('adm_yr') && (
            <DataTableFacetedFilter
              column={table.getColumn('adm_yr')}
              title='Admission Year'
              options={[
                ...table.getColumn('adm_yr')?.getFacetedUniqueValues().keys()!,
              ].map(yr => ({ label: yr, value: yr }))}
            />
          )}
        </div>
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3 bg-blue1left border-bgblueleft'
          >
            Reset
            <X className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
