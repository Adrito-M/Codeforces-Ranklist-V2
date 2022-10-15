import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Backdrop, ClickAwayListener, Fade, Grow, MenuItem, MenuList, Modal, Paper, Popper } from '@mui/material'
import { useRef, useState, Fragment } from 'react'

export default function Filter({ data, setTableData }) {
	const [open, setOpen] = useState(false) 

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
		[field.getter, field.setter] = useState('ALL');
		[field.open, field.setOpen] = useState(false);
		[field.selectedIndex, field.setSelectedIndex] = useState(0);
		field.anchorRef = useRef(null);
		field.options = new Set()
		field.handleClose = (event) => {
			if (field.anchorRef.current && field.anchorRef.current.contains(event.target)) {
				return
			}
			field.setOpen(false)
		}
		field.handleMenuItemClick = (index) => {
			field.setSelectedIndex(index)
			field.setOpen(false)
		}
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
					<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-blue2left to-blue2right rounded-lg border border-searchborder text-white p-10
					grid grid-cols-2 grid-rows-4">
						{fields.map(field => (
							<Fragment key={field.label}>
								<div className="flex items-center">{field.label}:</div>
								<div className="flex justify-between border-b w-[15vw] my-4" onClick={() => field.setOpen(true)}>
									<div></div>
									<div>{field.getter}</div>
									<div>🔻</div>
								</div>
								<Popper
									open={field.open}
									anchorEl={field.anchorRef.current}
									role={undefined}
									transition
									disablePortal
								>
									{({ TransitionProps, placement }) => (
										<Grow
											{...TransitionProps}
											style={{
												transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
											}}
										>
											<Paper style={{
												backgroundColor: '#0c0e20',
												color: 'white',
												border: '1px solid #3c8dec',
											}}>
												<ClickAwayListener onClickAway={() => field.handleClose(event)}>
													<MenuList id="split-button-menu" autoFocusItem>
														{field.options.map((option, index) => (
															<MenuItem
																key={option}
																selected={index === field.selectedIndex}
																onClick={() => field.handleMenuItemClick(index)}
															>
																{option.label}
															</MenuItem>
														))}
													</MenuList>
												</ClickAwayListener>
											</Paper>
										</Grow>
									)}
								</Popper>
								{/* <select onChange={e => field.setter(e.target.value)} defaultValue={field.getter}>
									{field.options.map(option => (
										<option value={option} key={option}>
											{option}
										</option>
									))}
								</select> */}
							</ Fragment>
						))}
						<button
							className="bg-custompink px-8 py-2 rounded-3xl col-span-2 mx-auto mt-6"
							onClick={() => {
								setTableData(
									data
										.filter(entry => fields.every(field => field.getter === 'ALL' || field.getter === entry[field.field]))
								)
								setOpen(false)
							}}
						>
							SUBMIT
						</button>
					</div>
				</Fade>
			</Modal>
		</>
	)
}
