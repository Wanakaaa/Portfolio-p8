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
    <section className="p-6 w-full flex justify-center items-center gap-4">
      <div className='w-[80vw] flex flex-col justify-center gap-6 pb-6 '>
      <h2>{project.name}</h2>

      {/* Composant DevicePreview pour l'affichage des images */}
      <DevicePreview images={project.images} />

      {/* Description du projet */}
      < ProjectDescription 
      context={project.description.longDescription.context}
      missions={project.description.longDescription.missions}
      realisations={project.description.longDescription.realisations}/>

      <div>
      <h3>Technologies utilisées</h3>
      <TechStack stack={project.stack} 
      className="text-xl bg-blue-700"/>
      </div>

      {/* Liens GitHub et Live Preview */}
      <div className='flex justify-center space-x-4'>
        <IconLink
          href={project.githubLink}
          iconSrc='/icons/github.svg'
          alt="Lien vers repository GitHub"
          size={40}
        />
        <IconLink
          href={project.liveLink}
          iconSrc='/icons/eye.svg'
          alt="Lien vers une prévisualisation du site"
          size={40}
        />
      </div>
      </div>
    </section>
  );
}