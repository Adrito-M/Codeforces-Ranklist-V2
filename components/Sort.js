import { faArrowDown19, faArrowDown91, faArrowDownAZ, faArrowDownZA, faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material'
import { useRef, useState } from 'react'

export default function Sort({ tableData, setTableData }) {

	const options = [
		{
			field: 'handle',
			label: 'USERNAME',
			icon: [{fa: faArrowDownAZ, value: 1}, {fa: faArrowDownZA, value: -1}],
		},
		{
			field: 'rating',
			label: 'RATING',
			icon: [{fa: faArrowDown91, value: -1}, {fa: faArrowDown19, value: 1}],
		},
		{
			field: 'maxRating',
			label: 'MAX RATING',
			icon: [{fa: faArrowDown91, value: -1}, {fa: faArrowDown19, value: 1}],
		},
	]
	const [open, setOpen] = useState(false)
	const [direction, setDirection] = useState(0)
	const anchorRef = useRef(null)
	const [selectedIndex, setSelectedIndex] = useState(2)

	const sortFunction = (direction, index) => (a, b) => {
		const basis = options[index].field
		if (basis === 'handle') return (a[basis].localeCompare(b[basis])) * options[index].icon[direction].value
		else return (a[basis] - b[basis]) * options[index].icon[direction].value
	}

	const leftButtonClick = () => {
		setOpen(!open)
	}

	const rightButtonClick = () => {
		setTableData([...tableData].sort(sortFunction(direction^1, selectedIndex)))
		setDirection(direction^1)
	}

	const handleMenuItemClick = (index) => {
		setDirection(0)
		setSelectedIndex(index)
		// const newData = tableData.sort(sortFunction(0, index))
		// setTableData(newData)
		setTableData([...tableData].sort(sortFunction(0, index)))
		setOpen(false)
	}

	const handleClose = event => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}
		setOpen(false)
	}

	return (
		<span className="pr-8">
			<span className='grid grid-cols-[14vw_auto] grid-rows-1 h-[100%] text-white'>
				<div className='col-span-1 bg-searchbg rounded-l-[20px] border-y-[1px] border-l-[1px] border-searchborder'>
					<button
						className='h-[100%] w-[100%] text-[0.9rem] text-ellipsis overflow-hidden whitespace-nowrap pl-[10px] sm:pl-0'
						onClick={leftButtonClick}
						ref={anchorRef}
					>
						<FontAwesomeIcon icon={faSort} className='pr-2'/>
						<span className=''>
							{options[selectedIndex].label}
						</span>
					</button>
				</div>
				<div className='col-span-1 bg-white rounded-r-[20px] border-y-[1px] border-r-[1px] border-searchborder'>
					<button className='h-[100%] w-[100%]' onClick={rightButtonClick}>
							<FontAwesomeIcon icon={options[selectedIndex].icon[direction].fa} className='h-[23px] w-[23px] text-searchbg mx-1 flex items-center justify-center' />
					</button>
				</div>
			</span>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
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
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList id="split-button-menu" autoFocusItem>
									{options.map((option, index) => (
										<MenuItem
											key={option.label}
											selected={index === selectedIndex}
											onClick={() => handleMenuItemClick(index)}
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
		</span>
	)
}
