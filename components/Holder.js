import Toolbar from './Toolbar'
import Table from './Table'
import { useState } from 'react'

export default function Holder({ data }) {
  const [tableData, setTableData] = useState(data)
  return (
    <div className='mx-[6vw] bg-gradient-to-r from-blue1left to-blue1right rounded-lg px-[4vw] pb-[4vw] pt-[2vw]'>
        <Toolbar data={data} tableData={tableData} setTableData={setTableData} />
        <Table tableData={tableData} />
    </div>
  )
}
