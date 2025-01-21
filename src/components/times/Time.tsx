import React, { FC } from 'react'

interface ITime {
  rotate: string;
  time: number;
}

const Time: FC<ITime> = ({ 
  rotate,
  time 
}) => {
  return (
    <p style={{ transform: rotate }}>{time}</p>
  )
}

export default Time;