import React from 'react';
import Image from 'next/image';

interface IconLinkProps {
  href: string
  iconSrc: string
  alt: string
  size?: number
}

export default function IconLink({ href, iconSrc, alt, size = 32 }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      style={{ width: size, height: size}}
    >
      <Image
        src={iconSrc} 
        alt={alt} 
        width={size} 
        height={size}
        className="object-contain"
      />
    </a>
  );
}