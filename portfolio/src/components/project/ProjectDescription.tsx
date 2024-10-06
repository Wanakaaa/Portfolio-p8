import React from 'react'
import Context from './Context'
import Mission from './Mission'
import Realisations from './Realisations'

interface ProjectDescriptionProps {
    context: string
    missions: string[]
    realisations: string[]
}

export default function ProjectDescription({ context, missions, realisations }: ProjectDescriptionProps) {
    return (
        <div className="project-description my-6">
          {context && <Context content={context} />}
          {missions && missions.length > 0 && <Mission points={missions} />}
          {realisations && realisations.length > 0 && <Realisations points={realisations} />}
        </div>
      );
    }
