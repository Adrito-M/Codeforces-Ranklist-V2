import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import DropDown from './DropDown'

export default function SearchFilter() {
  let [visibility, setvisibility]= useState(0)

  let allOptions = {
    admission: ["all", 2019, 2028],
    dept: ["all", 2019, 2028],
    rank: ["all", 2019, 2028],
  }

  return (
    <div className='flex justify-end'>
      <input type="text" placeholder='🔍Search' className='mx-8 rounded-full px-2 bg-searchbg border border-searchborder text-white focus:outline-none focus:ring' />
      <div className="relative">  
        <button className="bg-searchbg rounded-[4px] p-[6px] pb-[2px] focus:ring" onClick={()=>setvisibility(1)}>
          <FontAwesomeIcon icon={faFilter} color="#ECB365" fontSize="1.6rem" />
        </button>
        <form className={`bg-orange-100 w-[300px] px-[8px] py-[12px] rounded-[8px] absolute right-0 z-30 mt-[10px] ${visibility ? "block" : "hidden"}`}>
          {Object.getOwnPropertyNames(allOptions).map(option => 
            <DropDown options={allOptions[option]} label={option}/>)
          }
          
          <input type="submit" value="Apply" className="mt-[40px] w-[100%] bg-green-600 rounded-[4px] hover:cursor-pointer hover:bg-green-400" onClick={(e)=>{e.preventDefault();setvisibility(0)}} />
        </form>
      </div>
    </div>
    )
}
