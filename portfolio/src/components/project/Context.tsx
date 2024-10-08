import React from 'react'

interface Contextprops {
    content: string
}

export default function Context({ content }: Contextprops) {
  return (
    <div className='p-6'>
        <h3>Contexte</h3>
        <p className="text-base">{content}</p>
    </div>
  )
}
