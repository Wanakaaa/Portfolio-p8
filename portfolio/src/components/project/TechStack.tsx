import React from 'react'

interface TechStackProps {
    stack: string[]
}

export default function TechStack({ stack }: TechStackProps) {
  return (
    <div className='mt-4 flex flex-wrap justify-center gap-2'>
        {stack.map((tech, index) => (
            <span 
            key={index}
            className="outline outline-1 px-2 py-1 bg-blue-200 text-blue-800 rounded"
            >{tech}</span>
        ))}
    </div>
  )
}
