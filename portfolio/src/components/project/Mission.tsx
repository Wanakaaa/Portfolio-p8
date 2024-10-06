import React from 'react'

interface MissionProps {
    points: string[]
}

export default function Mission({ points }: MissionProps) {
  return (
    <div>
        <h3>Missions</h3>
        <ul>
            {points.map((point, index) => (
                <li
                 key={index}
                 >{point}</li>
            ))}
        </ul>
    </div>
  )
}
