import React from 'react'

interface RealisationsProps {
    points: string[]
}

export default function Realisations({ points }: RealisationsProps) {
  return (
    <div>
        <h3>Réalisations</h3>
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
