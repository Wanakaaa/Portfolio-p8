import React from 'react'
import Context from './Context'
import Mission from './Mission'
import Realisations from './Realisations'

interface ProjectDescriptionProps {
    context: string
    mission: string
    realisations: string[]
}

export default function ProjectDescription({ context, mission, realisations }: ProjectDescriptionProps) {
    return (
        <div className="project-description my-6">
          {context && <Context content={context} />}
          {mission && <Mission content={mission} />}
          {realisations && realisations.length > 0 && <Realisations points={realisations} />}
        </div>
      );
    }
