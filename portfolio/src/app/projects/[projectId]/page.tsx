import React from 'react';
import projectsData from '../../../data/projects.json';
import DevicePreview from '../../../components/preview/DevicePreview';
import TechStack from '@/components/project/TechStack';
import IconLink from '@/components/buttons/IconLink';

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
    <main className="space-y-8 sm:space-y-10 md:space-y-16 lg:space-y-8 px-4 sm:px-6 md:px-8 lg:px-12 outline outline-green-500">
      {/* Titre du projet */}
      <h3>{project.name}</h3>

      {/* Composant DevicePreview pour l'affichage des images */}
      <DevicePreview images={project.images} />

      {/* Description du projet */}
      <p className="mb-4">{project.description.longDescription}</p>

      {/* Stack de technologies */}
      <h3 className="text-2xl font-semibold mb-2">Technologies utilisées :</h3>
      <TechStack stack={project.stack} />

      {/* Liens GitHub et Live Preview */}
      <div className='flex space-x-4'>
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
    </main>
  );
}