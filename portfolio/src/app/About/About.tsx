import React from 'react';
import aboutData from '../../data/about.json';
import IconLink from '../../components/buttons/IconLink'
import AboutPresentation from '@/components/about/AboutPresentation';


export default function About() {
  const { social } = aboutData
  return (
    <>
    <section id='about' className='bg-[#F7FAFC]'>
        
        <div id='container' className='w-[80vw] flex flex-col justify-center border'>
        <h1>Sarah, Développeuse Web</h1>
        <AboutPresentation/>

        <div className="flex justify-center justify-items-center border gap-2 p-2">
        {/* <IconLink
        href='/cv.pdf'
        iconSrc='/icons/cv.svg'
        alt="CV"
        size={32}
        /> */}
        {Object.keys(social).map((key) => (
          <IconLink
          key={key}
          href={social[key as keyof typeof social]}
          iconSrc={`/icons/${key}.svg`}
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
