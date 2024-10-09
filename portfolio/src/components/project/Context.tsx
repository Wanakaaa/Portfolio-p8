import React from 'react'

interface Contextprops {
    content: string
}

export default function Context({ content }: Contextprops) {
  return (
    <div>
        <h3>Contexte</h3>
        <p>{content}</p>
    </div>
  )
}
