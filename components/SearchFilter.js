import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

export default function SearchFilter() {
  return (
    <div className='flex justify-end'>
      <input type="text" placeholder='🔍Search' className='mx-8 rounded-full px-2 bg-searchbg border border-searchborder text-white focus:outline-none focus:ring' />
      <button>
        <FontAwesomeIcon icon={faFilter} color="#ECB365" fontSize="1.6rem"/>
      </button>
    </div>
  )
}
