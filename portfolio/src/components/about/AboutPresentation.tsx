import React from 'react';
import aboutData from '../../data/about.json';

export default function AboutPresentation() {
  return (
    <ul className='gap-2 flex flex-col text-center' >
      {aboutData.description.map((desc, ind) => (
        <li key={ind} className="list-none p-4">{desc}</li>
      ))}
    </ul>
  );
}