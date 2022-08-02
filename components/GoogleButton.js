export default function GoogleButton({text}) {
  return (
    <button className="ml-4 px-4 bg-custompink rounded-sm py-1 border-[3px] border-blue1left">
        {/* <FontAwesomeIcon icon={faGoogle} className="pr-2"/> */}
        <div className='flex items-center justify-center'>
          <div>
            <img src="./google.svg" className="h-[1.5rem] w-[1.5rem] mr-2"/>
          </div>
          <div className='text-[0.9rem]'>
            {text}
          </div>
        </div>
    </button>
  )
}
