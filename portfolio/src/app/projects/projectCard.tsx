// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import TechStack from '@/components/project/TechStack';
// import ProjectLinks from '@/components/project/ProjectLinks';

// // Déclare l'interface pour les props de ProjectCard
// interface ProjectCardProps {
//   id: string;
//   name: string;
//   cover: string;
//   description: string;
//   stack: string[];
//   githubLink: string;
//   liveLink: string;
// }

// export default function ProjectCard({ id, name, cover, description, stack, githubLink, liveLink }: ProjectCardProps) {
//   return (
//     <div className="border rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden">
//       <Link href={`/projects/${id}`} className="flex flex-col h-full justify-between">
//   {/* Contenu du projet */}
//         <h3 className='bg-green-300'>{name}</h3>

//         <div className="relative w-full h-24 ">
//           <Image
//             alt={`Logo ${name}`}
//             src={cover}
//             fill
//             sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, 26vw"
//             style={{ objectFit: 'contain' }}
//             className='border border-blue-500'
//           />
//         </div>

//         <p className="flex-grow text-center p-4">{description}</p>

//     <div className='flex-grow'>
//           <TechStack stack={stack} />
//           </div>

//     </Link>


//       {githubLink && (
//         <ProjectLinks
//           href={githubLink} 
//           iconSrc="/icons/github.svg" 
//           alt="GitHub Link" 
//           position="left" 
//         />
//       )}

//       {liveLink && (
//         <ProjectLinks
//           href={liveLink} 
//           iconSrc="/icons/eye.svg" 
//           alt="Live Preview Link" 
//           position="right" 
//         />
//       )}
//     </div>
//   );
// }

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
    <div className='md:flex gap-0 w-full rounded transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden'>
    <Link href={`/projects/${id}`} className="w-full">
      <div className="grid grid-cols-3 md:grid-cols-5 grid-rows-[auto_1fr_1fr_1fr] border-l-4 border-y-4 md:h-[300px]">
        <h3 className="col-span-3 p-4 text-center">{name}</h3>
        
        <div className="col-span-3 row-span-3 col-start-1 row-start-2  flex items-center px-2">
          {description}
        </div>
        
        <div className="col-span-3 col-start-1 row-start-5  ">
          <TechStack stack={stack}/>
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

          <div className='md:w-[40px] flex md:justify-start md:flex-col self-start'>
        {githubLink && (
          <ProjectLinks
            href={githubLink}
            iconSrc="/icons/github.svg"
            alt="GitHub Link"
          />
        )}

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