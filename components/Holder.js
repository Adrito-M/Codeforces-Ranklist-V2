import React from 'react'
import SearchFilter from './SearchFilter'
import Table from './Table'
export default function Holder({ data }) {
  return (
    <div className='mx-[6vw] bg-gradient-to-r from-blue1left to-blue1right rounded-lg p-[4vw]'>
        <SearchFilter />
        <Table data={data}/>
    </div>
  )
}
