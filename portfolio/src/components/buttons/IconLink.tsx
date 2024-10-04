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
      className="block border"
      style={{ width: size, height: size}}
    >
      <Image
        src={iconSrc} // Chemin vers l'icône (dynamique)
        alt={alt} // Texte alternatif (dynamique)
        width={size} // Taille de l'icône (dynamique)
        height={size}
        className="object-contain"
      />
    </a>
  );
}