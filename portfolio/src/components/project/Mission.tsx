import React from 'react'

interface MissionProps {
    points: string[]
}

export default function Mission({ points }: MissionProps) {
  return (
    <div >
        <h3>Missions</h3>
        <ul className='px-6'>
            {points.map((point, index) => (
                <li
                 key={index}
                 className='py-1'
                 >{point}</li>
            ))}
        </ul>
    </div>
  )
}
