import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TechStack from '@/components/project/TechStack';
import ProjectLinks from '@/components/project/ProjectLinks';

// Déclare l'interface pour les props de ProjectCard
interface ProjectCardProps {
  id: string;
  name: string;
  cover: string;
  description: string;
  stack: string[];
  githubLink: string;
  liveLink: string;
}

export default function ProjectCard({ id, name, cover, description, stack, githubLink, liveLink }: ProjectCardProps) {
  return (
    <div className="border rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden">
      <Link href={`/projects/${id}`} className="flex flex-col h-full justify-between">
  {/* Contenu du projet */}
        <h3 className='bg-green-300'>{name}</h3>

        <div className="relative w-full h-24 ">
          <Image
            alt={`Logo ${name}`}
            src={cover}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, 26vw"
            style={{ objectFit: 'contain' }}
            className='border border-blue-500'
          />
        </div>

        <p className="flex-grow text-center p-4">{description}</p>

          <TechStack stack={stack} />

    </Link>


      {githubLink && (
        <ProjectLinks
          href={githubLink} 
          iconSrc="/icons/github.svg" 
          alt="GitHub Link" 
          position="left" 
        />
      )}

      {liveLink && (
        <ProjectLinks
          href={liveLink} 
          iconSrc="/icons/eye.svg" 
          alt="Live Preview Link" 
          position="right" 
        />
      )}
    </div>
  );
}