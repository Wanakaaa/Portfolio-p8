import React from 'react';
import projectsData from '../../data/projects.json';
import ProjectCard from './projectCard'

export default function ProjectsList() {
  return (
    <>
      <section id='projects' className='outline outline-pink-500  bg-[#E6F0EB]'>
        <div className='w-[80vw] flex flex-col justify-center border'>
          <h2>Projets</h2>
          <ul className="outline outline-blue-500 flex flex-col gap-4 w-full">
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
    </section>
    </>
  )
}

