import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

export default function Pagination({ count, page, setPage, rowsPerPage, setRowsPerPage, options }) {
	options = options.map(option => (Number.isInteger(option) ? { value: option, label: option } : option))
	const totalPages = Math.ceil(count / rowsPerPage)
	const prevPage = () => setPage(Math.max(page - 1, 0))
	const nextPage = () => setPage(Math.min(page + 1, totalPages - 1))
	const firstPage = () => setPage(0)
	const lastPage = () => setPage(totalPages - 1)
	const rowsPerPageChange = event => {
		firstPage()
		setRowsPerPage(parseInt(event.target.value))
	}
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-1 text-[2vw] sm:text-[1.3vw] text-white pt-4">
			<div className="col-span-1 flex items-center">
				<span className="mr-4">Rows per page:</span>
				{options.map(option => (
					<button 
          	value={option.value}
						key={option.value}
						className={`px-1 ${rowsPerPage === option.value ? 'text-[2.6vw]': ''}`}
						onClick={rowsPerPageChange}
					>
						{option.label}
					</button>
				))}
			</div>
			<div className="col-span-1 flex items-center justify-end sm:justify-center text-[2vw]">
				<button className="px-2" onClick={firstPage} disabled={page === 0} >
					<FontAwesomeIcon icon={faAnglesLeft} />
				</button>
				<button className="px-2" onClick={prevPage} disabled={page === 0} >
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
				<div className="px-[1.5vw] text-[1.4vw]">
	   			{page * rowsPerPage + 1 || 1}-{Math.min((page + 1) * rowsPerPage, count)} of {count}
	  		</div>
				<button className="px-2" onClick={nextPage} disabled={page === totalPages - 1} >
					<FontAwesomeIcon icon={faAngleRight} />
				</button>
				<button className="px-2" onClick={lastPage} disabled={page === totalPages - 1} >
					<FontAwesomeIcon icon={faAnglesRight} />
				</button>
			</div>
		</div>
	)
}
