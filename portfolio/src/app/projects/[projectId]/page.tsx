import React from 'react';
import projectsData from '../../../data/projects.json';
import DevicePreview from '../../../components/preview/DevicePreview';
import TechStack from '@/components/project/TechStack';
import IconLink from '@/components/buttons/IconLink';
import ProjectDescription from '@/components/project/ProjectDescription';

interface ProjectProps {
  params: { projectId: string };
}

export default function Project({ params }: ProjectProps) {
  const projectId = params.projectId;
  const project = projectsData.find((project) => project.id === projectId);

  if (!project) {
    return <div>Projet non trouvé</div>;
  } 

  const { name, description, stack, images, githubLink, liveLink } = project;

  return (

    
    <section className="p-6 w-full flex justify-center items-center gap-4 ">
      <div className='w-[80vw] flex flex-col justify-center gap-2 pb-6'>
      <h2>{name}</h2>

      {/* Composant DevicePreview pour l'affichage des images */}
      <DevicePreview images={images} />

      {/* Description du projet */}
      < ProjectDescription 
      context={description.longDescription.context}
      missions={description.longDescription.missions}
      realisations={description.longDescription.realisations}/>


      <div>
      <h3>Technologies utilisées</h3>
      <TechStack stack={stack} 
      className="text-xl bg-blue-200"/>
      </div>

      {/* Liens GitHub et Live Preview */}
      <div className='flex justify-around space-x-4 p-2'>
        <IconLink
          href={githubLink}
          iconSrc='/icons/github.svg'
          alt="Lien vers repository GitHub"
          size={40}
        />
        {liveLink && (
            <IconLink
              href={liveLink}
              iconSrc="/icons/eye.svg"
              alt="Live Preview Link"
              size={40}
            />
        )}
      </div>
      </div>
    </section>
  );
}