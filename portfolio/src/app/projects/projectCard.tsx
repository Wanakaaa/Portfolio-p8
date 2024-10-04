// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// // Déclare l'interface pour les props de ProjectCard
// interface ProjectCardProps {
//   id: string;
//   name: string;
//   cover: string;
//   description: string;
//   stack: string[];
// }

// export default function ProjectCard({ id, name, cover, description, stack }: ProjectCardProps) {
//     return (
//       <div className="border rounded-lg p-4 shadow-lg flex flex-col items-center bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//         <h4>{name}</h4>
        
//         {/* Lien vers la page du projet avec l'ID sans utiliser de balise <a> */}
//         <Link href={`/projects/${id}`} className="relative w-full h-48 mb-4 block">
//           <Image
//             alt={`Logo ${name}`}
//             src={cover}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             style={{ objectFit: 'contain' }}
//           />
//         </Link>
        
//         <p className="flex-grow ">{description}</p>
//         <div className="outline outline-1 mt-4 flex flex-wrap justify-center gap-2">
//           {stack.map((tech, index) => (
//             <span key={index} className="outline outline-1 px-2 py-1 bg-blue-200 text-blue-800 rounded">
//               {tech}
//             </span>
//           ))}
//         </div>
//         <div className="mt-4 flex justify-between w-full">
//           <a href="#" className="text-blue-500 hover:underline">
//             Code Source
//           </a>
//           <a href="#" className="text-blue-500 hover:underline">
//             Live Preview
//           </a>
//         </div>
//       </div>
//     );
//   }

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
      <Link href={`/projects/${id}`} className="flex flex-col justify-between p-4 h-full pb-20">
  {/* Contenu du projet */}
  <h4 className="text-xl font-semibold mb-2 text-center">{name}</h4>

  <div className="relative w-full h-48 mb-4">
    <Image
      alt={`Logo ${name}`}
      src={cover}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ objectFit: 'contain' }}
    />
  </div>

  <p className="flex-grow text-center">{description}</p>

  {/* TechStack avec un espacement approprié */}
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