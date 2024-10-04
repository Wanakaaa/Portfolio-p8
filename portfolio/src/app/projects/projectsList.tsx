import React from 'react';
import projectsData from '../../data/projects.json';
import ProjectCard from './projectCard'

export default function ProjectsList() {
  return (
    <>
    <section id='projects' className='outline outline-pink-500 bg-lightblue-500 bg-[#DEE5ED]'>
        <h3>Projets</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-full">
            {projectsData.map((project) => (
                < ProjectCard
                 key={project.id}
                 id={project.id}
                 name={project.name}
                 cover={project.cover}
                 description={project.description.shortDescription}
                 stack={project.stack}
                 githubLink={project.githubLink}
                 liveLink={project.liveLink}
                />
            ))}
        </ul>
    </section>
    </>
  )
}