import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faArrowUp19, faArrowUp91, faArrowUpAZ, faArrowUpZA } from '@fortawesome/free-solid-svg-icons'
import CustomTextField from './CustomTextField'
import { Backdrop, Fade, FormControl, FormControlLabel, InputLabel, MenuItem, Modal, Radio, RadioGroup, Select } from '@mui/material'

export default function SearchFilter({ data, setTableData }) {
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
		<div className="flex justify-end bg-gradient-to-r z-10 from-blue1left to-blue1right py-[10px] sticky top-[70px]">
			<CustomTextField
				type="search"
				label="🔍Search"
				onInput={event => {
					setTableData(data.filter(entry => entry.handle.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1))
				}}
			/>
			<button className="bg-searchbg rounded-[4px] p-[6px] pb-[2px] focus:ring" onClick={() => setOpen(true)}>
				<FontAwesomeIcon icon={faFilter} color="#ECB365" fontSize="1.6rem" />
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
						<div>
							{/* <label>Sort By:</label>
							<select
								defaultValue={basis}
								onChange={e => {
									setBasis(e.target.value), setDirection(e.target.direction)
								}}
							>
								<option value="rating" direction={-1}>
									&#f15e; RATING
								</option>
								<option value="rating" direction={1}>
									RATING {<FontAwesomeIcon icon={faArrowUp19} />}
								</option>
								<option value="maxRating" direction={-1}>
									MAX RATING {<FontAwesomeIcon icon={faArrowUp19} />}
								</option>
								<option value="maxRating" direction={1}>
									MAX RATING {<FontAwesomeIcon icon={faArrowUp19} />}
								</option>
								<option value="handle" direction={1}>
									USERNAME {<FontAwesomeIcon icon={faArrowUp19} />}
								</option>
								<option value="handle" direction={-1}>
									USERNAME {<FontAwesomeIcon icon={faArrowUp19} />}
								</option>
							</select> */}
							<FormControl>
								<Select value={10} onChange={() => {}} displayEmpty>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten {<FontAwesomeIcon icon={faArrowUp19} />}</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</div>
						{/* <div>
							<RadioGroup defaultValue="female">
								<FormControlLabel value="female" control={<Radio />} label="Female" />
								<FormControlLabel value="male" control={<Radio />} label="Male" />
								<FormControlLabel value="other" control={<Radio />} label="Other" />
							</RadioGroup>
						</div> */}
						<button
							className="bg-red-600"
							onClick={() => {
								setTableData(
									data
										.filter(entry => fields.every(field => field.getter === 'ALL' || field.getter === entry[field.field]))
										.sort((a, b) => (basis === 'handle' ? b[basis].localeCompare(a[basis]) : b[basis] - a[basis]) * direction)
								)
								setOpen(false)
							}}
						>
							Apply
						</button>
					</div>
				</Fade>
			</Modal>
		</div>
	)
}
