import React from 'react';

interface AboutPresentationProps {
  description: string[]
}

export default function AboutPresentation({ description }: AboutPresentationProps) {
  return (
    <ul className='gap-2 flex flex-col text-center' >
      {description.map((desc, ind) => (
        <li key={ind} className="list-none p-4">{desc}</li>
      ))}
    </ul>
  );
}