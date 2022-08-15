import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Backdrop, Fade, Modal } from '@mui/material'
import { useState } from 'react'

export default function Filter({ data, setTableData }) {
	const [open, setOpen] = useState(false)
	const [basis, setBasis] = useState('rating')
	const [direction, setDirection] = useState('rating')

	const fields = [
		{
			field: 'year',
			label: 'Adm Year',
		},
		{
			field: 'dept',
			label: 'Department',
		},
		{
			field: 'rank',
			label: 'Rank',
		},
		{
			field: 'maxRank',
			label: 'Max Rank',
		},
	]

	fields.forEach(field => {
		;[field.getter, field.setter] = useState('ALL')
		field.options = new Set()
	})

	data.forEach(entry => {
		fields.forEach(field => {
			field.options.add(entry[field.field])
		})
	})

	fields.forEach(field => {
		field.options = ['ALL'].concat(Array.from(field.options))
	})

	return (
		<>
			<button
				className="rounded-[4px] p-[6px] pb-[2px] focus:ring shadow-[0px_8px_15px_rgba(0,0,0,0.1)] border border-custompink hover:-translate-y-[7px] transition-transform"
				onClick={() => setOpen(true)}
			>
				<FontAwesomeIcon icon={faFilter} color='#ECB365' fontSize="1.6rem" />
			</button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={() => setOpen(false)}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-custompink">
						{fields.map(field => (
							<div key={field.label}>
								<label>{field.label}:</label>
								<select onChange={e => field.setter(e.target.value)} defaultValue={field.getter}>
									{field.options.map(option => (
										<option value={option} key={option}>
											{option}
										</option>
									))}
								</select>
							</div>
						))}
						<button
							className="bg-red-600"
							onClick={() => {
								setTableData(
									data
										.filter(entry => fields.every(field => field.getter === 'ALL' || field.getter === entry[field.field]))
								)
								setOpen(false)
							}}
						>
							Apply
						</button>
					</div>
				</Fade>
			</Modal>
		</>
	)
}
