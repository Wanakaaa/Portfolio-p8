import React from 'react'
import Image from 'next/image'

interface ProjectLinkProps {
    href: string
    iconSrc: string
    alt: string
}

export default function ProjectLinks({ href, iconSrc, alt }: ProjectLinkProps) {
    const imageStyle = {
        height: '24px',
        width: '24px',
    }

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
                style={imageStyle}
                className="transition-transform duration-300 ease-in-out hover:rotate-90"
            />
            </a>
        </div>
    );
}
