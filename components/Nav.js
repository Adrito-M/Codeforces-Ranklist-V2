import GoogleButton from "./GoogleButton"

export default function Nav() {
  return (
    <div className='flex justify-end mx-[6vw] py-4'>
        <GoogleButton text='LOGIN' />
        <GoogleButton text='REGISTER' />
    </div>
  )
}
