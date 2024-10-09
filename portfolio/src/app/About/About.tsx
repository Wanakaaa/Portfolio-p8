import React from 'react';
import aboutData from '../../data/about.json';
import IconLink from '../../components/buttons/IconLink';
import AboutPresentation from '@/components/about/AboutPresentation';

export default function About() {
  const { social } = aboutData;
  return (
    <div className="flex flex-col gap-6 border border-yellow2">
      <AboutPresentation />

      <div className="flex justify-center gap-2 p-6">
        <IconLink
        href='/cv.pdf'
        iconSrc='/icons/cv.svg'
        alt='CV Sarah'
        size={32}
        />
          
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
  );
}


