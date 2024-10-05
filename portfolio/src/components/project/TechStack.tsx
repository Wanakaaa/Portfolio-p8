import React from 'react'

interface TechStackProps {
    stack: string[]
}

export default function TechStack({ stack }: TechStackProps) {
  return (
    <div className='pl-16 pr-16 pt-2 pb-2 flex flex-wrap justify-center items-center gap-2 min-h-[60px] sm:min-h-[80px] bg-pink-200'>
        {stack.map((tech, index) => (
            <span 
            key={index}
            className="outline outline-1 px-2 py-1 bg-blue-200 text-blue-800 rounded whitespace-nowrap text-sm font-medium"
            >{tech}</span>
        ))}
    </div>
  )
}
