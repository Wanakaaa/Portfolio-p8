import React from 'react';
import aboutData from '../../data/about.json';
import IconLink from '../../components/buttons/IconLink';
import AboutPresentation from '@/components/about/AboutPresentation';

export default function About() {
  const { social } = aboutData;
  return (
    // <section id='about'>
    <div className="bg-green-500">
      {/* <h1>Sarah, Développeuse Web</h1> */}
      <AboutPresentation />
          <div className="flex justify-center gap-2 p-2">
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




      // </section>
      
  );
}


