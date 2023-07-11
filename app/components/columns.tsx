'use client'

import { ColumnDef } from '@tanstack/react-table'
import { RANK, Username } from '@/utils/types'
import { DataTableColumnHeader } from './data-table-column-header'
import Image from 'next/image'
import Link from 'next/link'
import { departments } from '@/utils/constants'

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

// TODO: Implement all departments, maybe also icons

export const columns: ColumnDef<Username>[] = [
  {
    id: 'Index',
    accessorKey: 'idx',
    header: ({ column }) => <DataTableColumnHeader column={column} title='' />,
    cell: ({ row }) => (
      <div className='text-left text-gray-400'>{row.original.idx}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: 'Handle',
    accessorKey: 'handle',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Handle' />
    ),
    cell: ({ row }) => (
      <span className='flex items-center gap-x-5'>
        <Image
          alt='titlePhoto'
          src={row.original.titlePhoto}
          width='100'
          height='100'
          quality='100'
          className='rounded-full w-12 h-12'
        />
        <Link
          href={`https://codeforces.com/profile/${row.original.handle}`}
          target='_blank'
        >
          {colorise(row.original.handle, row.original.rank, true)}{' '}
        </Link>
      </span>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    id: 'Rating',
    accessorKey: 'rating',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='RATING (MAX)' />
    ),
    cell: ({ row }) => (
      <div className='pl-8'>
        {colorise(row.original.rating.toString(), row.original.rank)} (
        {colorise(row.original.maxRating.toString(), row.original.maxRank)})
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: 'Max Rating',
    accessorKey: 'maxRating',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='MAX RATING' />
    ),
    cell: ({ row }) => (
      <div className='pl-8'>
        {colorise(row.original.maxRating.toString(), row.original.maxRank)}
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: 'Contribution',
    accessorKey: 'contribution',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='CONTRIBUTION' />
    ),
    cell: ({ row }) => {
      if (row.original.contribution > 0)
        return (
          <span className='text-green-500 pl-9'>
            + {row.original.contribution}
          </span>
        )
      else if (row.original.contribution < 0)
        return (
          <span className='text-red-500 pl-9'>
            - {-row.original.contribution}
          </span>
        )
      else return <span className='pl-9'>{row.original.contribution}</span>
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: 'Friend Of',
    accessorKey: 'friendOfCount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='FRIEND OF' />
    ),
    cell: ({ row }) => (
      <span className='pl-7'>{row.original.friendOfCount}</span>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: 'Department',
    accessorKey: 'dept',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='DEPT' />
    ),
    cell: ({ row }) => (
      <>
        {
          departments.find(department => department.value === row.original.dept)
            ?.label
        }
      </>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    id: 'Admission Year',
    accessorKey: 'adm_yr',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='ADM YR' />
    ),
    cell: ({ row }) => <div className='pl-4'>{row.original.adm_yr}</div>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    id: 'Rank',
    accessorKey: 'rank',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='RANK' />
    ),
    cell: ({ row }) => colorise(row.original.rank, row.original.rank, true),
    enableSorting: false,
    enableHiding: true,
  },
]
