import { useEffect, useState } from 'react'

export const useCountdown = (
  duration: number,
  callback: () => void = () => {},
  interval: number = 1000
) => {
  const [time, setTime] = useState(duration)
  useEffect(() => {
    const customInterval = setInterval(() => {
      if (time > 0) setTime(prev => prev - interval)
    }, interval)

    if (time <= 0) callback()
    return () => clearInterval(customInterval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])
  return time
}
