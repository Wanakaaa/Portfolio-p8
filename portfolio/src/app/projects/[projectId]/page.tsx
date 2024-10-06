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

  return (
    <section >
      <div className='w-[80vw] flex flex-col justify-center border gap-2'>{/* Titre du projet */}
      <h2>{project.name}</h2>

      {/* Composant DevicePreview pour l'affichage des images */}
      <DevicePreview images={project.images} />

      {/* Description du projet */}
      < ProjectDescription 
      context={project.description.longDescription.context}
      missions={project.description.longDescription.missions}
      realisations={project.description.longDescription.realisations}/>

      {/* Stack de technologies */}
      <h3>Technologies utilisées</h3>
      <TechStack stack={project.stack} />

      {/* Liens GitHub et Live Preview */}
      <div className='flex justify-center space-x-4'>
        <IconLink
          href={project.sourceCode}
          iconSrc='/icons/github.svg'
          alt="Lien vers repository GitHub"
          size={32}
        />
        <IconLink
          href={project.livePreview}
          iconSrc='/icons/eye.svg'
          alt="Lien vers une prévisualisation du site"
          size={32}
        />
      </div>
      </div>
    </section>
  );
}