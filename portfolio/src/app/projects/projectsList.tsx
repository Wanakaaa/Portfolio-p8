import React from 'react';
import projectsData from '../../data/projects.json';
import ProjectCard from './projectCard'

export default function ProjectsList() {
  return (
  
        <div>
            <ul className="flex flex-col gap-4 w-full">
                {projectsData.map(({ id, name, cover, description, stack, githubLink, liveLink }) => (
                  <li key={id} className="list-none">
                    <ProjectCard
                    id={id}
                    name={name}
                    cover={cover}
                    description={description.shortDescription}
                    stack={stack}
                    githubLink={githubLink}
                    liveLink={liveLink}
                    />
                  </li>
                ))}
            </ul>
        </div>
  )
}

