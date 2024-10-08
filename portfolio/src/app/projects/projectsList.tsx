import React from 'react';
import projectsData from '../../data/projects.json';
import ProjectCard from './projectCard'

export default function ProjectsList() {
  return (
  
        <div>
            <ul className="flex flex-col gap-4 w-full">
                {projectsData.map((project) => (
                  <li key={project.id} className="list-none">
                    <ProjectCard
                    id={project.id}
                    name={project.name}
                    cover={project.cover}
                    description={project.description.shortDescription}
                    stack={project.stack}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                    />
                  </li>
                ))}
            </ul>
        </div>
  )
}

