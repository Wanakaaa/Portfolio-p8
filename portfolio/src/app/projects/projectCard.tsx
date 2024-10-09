import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TechStack from '@/components/project/TechStack';
import ProjectLinks from '@/components/project/ProjectLinks';

interface ProjectCardProps {
  id: string;
  name: string;
  cover: string;
  description: string;
  stack: string[];
  githubLink: string;
  liveLink?: string;
}

export default function ProjectCard({ id, name, cover, description, stack, githubLink, liveLink }: ProjectCardProps) {
  return (
    <div className='relative w-[75vw] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden'>
      <Link href={`/projects/${id}`} className="w-full">
        <div className="grid grid-cols-3 sm:grid-cols-5 grid-rows-[auto_1fr_auto_1fr] border-2 border-[#A0C4FF]">
          <h3 className="col-span-3 p-4 text-center">{name}</h3>
          
          <div className="col-span-3 row-span-3 col-start-1 row-start-2 flex items-center px-2 text-justify">
            {description}
          </div>

          <div className="col-span-3 col-start-1 row-start-5 pl-2 sm:pl-7  pt-2">
            <TechStack stack={stack} className='px-2 py-1 bg-pink-transparent-plus gap-2 whitespace-nowrap text-sm font-semibold'/>
          </div>

          <div className="col-span-2 row-span-5 col-start-4 row-start-1 relative">
            <Image
              alt={`Logo ${name}`}
              src={cover}
              fill
              sizes="(max-width: 768px) 100vw, 32vw"
              className="object-cover"
              priority={true}
            />
          </div>
        </div>
      </Link>

      {/* Liens positionnés aux angles */}
      <div className='absolute top-0 left-0 p-2'>
        {githubLink && (
          <ProjectLinks
            href={githubLink}
            iconSrc="/icons/github.svg"
            alt="GitHub Link"
          />
        )}
      </div>

      <div className='absolute top-0 right-0 bottom-auto left-auto sm:top-auto sm:right-auto sm:bottom-0 sm:left-0 p-2'>
        {liveLink && (
          <ProjectLinks
            href={liveLink}
            iconSrc="/icons/eye.svg"
            alt="Live Preview Link"
          />
        )}
      </div>
    </div>
  );
}