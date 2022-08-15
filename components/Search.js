import CustomTextField from './CustomTextField'

export default function Search({ data, setTableData }) {
	return (
		<CustomTextField
			type="search"
			label="🔍Search"
			onInput={() => {
				setTableData(data.filter(entry => entry.handle.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1))
			}}
		/>
	)
}
