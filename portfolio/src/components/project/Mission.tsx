import React from 'react'

interface MissionProps {
    content: string
}

export default function Mission({ content }: MissionProps) {
  return (
    <div>
        <h3>Missions</h3>
        <p>{content}</p>
    </div>
  )
}
