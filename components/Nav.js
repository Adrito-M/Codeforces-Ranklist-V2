import GoogleButton from "./GoogleButton"

export default function Nav() {
  return (
    <div className='flex justify-end mx-[6vw] py-4 sticky top-0 bg-gradient-to-r from-bgblueleft to-bgblueright z-10'>
        <GoogleButton text='LOGIN' />
        <GoogleButton text='REGISTER' />
    </div>
  )
}
