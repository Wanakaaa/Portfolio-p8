// import React from 'react'

// interface TechStackProps {
//     stack: string[]
// }

// export default function TechStack({ stack }: TechStackProps) {
//   return (
//     <div className=' bg-pink-200 pl-16 pr-16 pt-2 pb-2 flex flex-wrap justify-center items-center gap-2 max-h-[150px]'>
//         {stack.map((tech, index) => (
//             <span 
//             key={index}
//             className="outline outline-1 px-2 py-1 bg-blue-200 text-blue-800 rounded whitespace-nowrap text-sm font-medium"
//             >{tech}</span>
//         ))}
//     </div>
//   )
// }

import React from 'react'

interface TechStackProps {
    stack: string[]
}

export default function TechStack({ stack }: TechStackProps) {
  return (
    
    <div className='flex flex-wrap justify-center gap-2 p-2'>
        {stack.map((tech, index) => (
            <span 
            key={index}
            className="px-2 py-1 bg-pink-transparent-plus rounded gap-2 whitespace-nowrap text-sm font-semibold"
            >{tech}</span>
            
        ))}
    </div>
    
  )
}

