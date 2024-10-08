import React from 'react'

interface TechStackProps {
    stack: string[]
    className?: string
}

export default function TechStack({ stack, className }: TechStackProps) {
  return (
    
    <div className='flex flex-wrap justify-center gap-2 p-2'>
        {stack.map((tech, index) => (
            <span 
            key={index} className={`px-2 py-1 rounded bg-blue-200 ${className}`}
            >{tech}</span>
            
        ))}
    </div>
    
  )
}

