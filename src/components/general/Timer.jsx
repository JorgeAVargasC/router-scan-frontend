import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

export const Timer = ({ isActive = false }) => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    if (isActive) {
      setSeconds(0)
      setMinutes(0)
    }
  }, [isActive])

  useEffect(() => {
    let interval = null

    if (isActive) {
      
      interval = setInterval(() => {
        if (seconds === 59) {
          setSeconds(0)
          setMinutes((minutes) => minutes + 1)
        } else {
          setSeconds((seconds) => seconds + 1)
        }
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [seconds, minutes, isActive])

  return (
    <div className='font-normal flex gap-1'>
      <span>
        {minutes.toString().padStart(2, '0')}
      </span>
      <span>:</span>
      <span>
        {seconds.toString().padStart(2, '0')}
      </span>
    </div>
  )
}

Timer.propTypes = {
  isActive: PropTypes.bool,
}
