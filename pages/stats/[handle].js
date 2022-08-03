import { useRouter } from 'next/router'

export default function stats({ params }) {
  const router = useRouter()
  return (
    <div className='pl-8 pt-8 text-white'>{`Hello ${router.query.handle}`}</div>
  )
}
