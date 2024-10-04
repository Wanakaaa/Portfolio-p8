import React from 'react';
import aboutData from '../../data/about.json';
import IconLink from '../../components/buttons/IconLink'
import AboutPresentation from '@/components/about/AboutPresentation';


export default function About() {
  const { social } = aboutData
  // const socialKeys = Object.keys(social)
  return (
    <>
    <section id='about' className='outline outline-cyan-500 bg-indigo-200 w-full flex justify-center items-center'>
        
        <div className='w-[80vw] flex flex-col justify-center border'>
        <AboutPresentation/>

        <div className="flex space-x-4 mt-4">
        <IconLink
        href='/cv.pdf'
        iconSrc='/icons/cv.svg'
        alt="CV"
        size={32}
        />
        {Object.keys(social).map((key) => (
          <IconLink
          key={key} // Clé de la propriété (ex: 'linkedin')
          href={social[key as keyof typeof social]} // Utilisation de `keyof`
          iconSrc={`/icons/${key}.svg`} // Génère dynamiquement le chemin de l'icône
          alt={key}
          size={32}  
          />
        ))}
      </div>
      </div>
    </section>
    </>
  )
}
