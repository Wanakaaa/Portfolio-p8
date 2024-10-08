import React from 'react'

interface RealisationsProps {
    points: string[]
}

export default function Realisations({ points }: RealisationsProps) {
  return (
    <div>
        <h3>Réalisations</h3>
        <ul className='px-6'>
            {points.map((point, index) => (
                <li
                key={index}
                >{point}</li>
            ))}
        </ul>
    </div>
  )
}
