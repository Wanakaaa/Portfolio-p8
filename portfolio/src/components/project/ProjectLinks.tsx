// import React from 'react'
// import Image from 'next/image'

// interface ProjectLinkProps {
//     href: string
//     iconSrc: string
//     alt: string
//     position: 'left' | 'right'
// }

// export default function ProjectLinks({ href, iconSrc, alt, position }: ProjectLinkProps) {
//     const containerClass = position === 'left' ? 'bottom-0 left-0' : 'bottom-0 right-0';

//     const triangleClass = position === 'left' 
//     ? 'absolute bottom-0 left-0 w-0 h-0 border-b-[60px] border-r-[60px] border-blue-900 border-opacity-70 border-r-transparent'
//     : 'absolute bottom-0 right-0 w-0 h-0 border-b-[60px] border-l-[60px] border-blue-900 border-opacity-70 border-l-transparent';

//     const iconPositionClass = position === 'left' ? 'bottom-2 left-2' : 'bottom-2 right-2';

//     return (
//         <div className={`absolute ${containerClass} w-16 h-16 bg-transparent overflow-hidden`}>
//         {/* Triangle semi-transparent */}
//         <div className={triangleClass}></div>

//         {/* Lien vers le projet */}
//         <a
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`absolute ${iconPositionClass} text-white hover:text-gray-200`}
//         >
//             <Image
//             src={iconSrc}
//             alt={alt}
//             width={20}
//             height={20}
//             className="object-contain transition-transform duration-300 ease-in-out hover:rotate-180"
//             />
//         </a>
//         </div>
//     );
// }

import React from 'react'
import Image from 'next/image'

interface ProjectLinkProps {
    href: string
    iconSrc: string
    alt: string
}

export default function ProjectLinks({ href, iconSrc, alt }: ProjectLinkProps) {

    return (
        <div className=' p-2 w-full flex justify-center'>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                src={iconSrc}
                alt={alt}
                width={24}
                height={24}
                className="object-contain transition-transform duration-300 ease-in-out hover:rotate-90 "
                />
            </a>
        </div>
    );
}