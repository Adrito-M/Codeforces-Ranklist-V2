import Filter from './Filter'
import Search from './Search'
import Sort from './Sort'

export default function Toolbar({ data, tableData, setTableData }) {
	return (
		<div className="flex justify-end bg-gradient-to-r z-20 from-blue1left to-blue1right py-[10px] sticky top-[70px]">
			<Search data={data} setTableData={setTableData} />
			<Sort data={data} tableData={tableData} setTableData={setTableData} />
			<Filter data={data} setTableData={setTableData} />
		</div>
	)
}
