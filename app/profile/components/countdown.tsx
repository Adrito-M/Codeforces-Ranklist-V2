import { useCountdown } from '@/utils/hooks'

export default function Countdown({
  duration,
  callback,
  interval,
  className = '',
}: {
  duration: number
  callback?: () => void
  interval?: number
  className?: string
}) {
  const time = useCountdown(duration, callback, interval)
  return (
    <div className={className}>
      {(time / 1000 / 60) | 0} : {((time / 1000) | 0) % 60}
    </div>
  )
}
