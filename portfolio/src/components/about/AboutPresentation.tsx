import React from 'react';
import aboutData from '../../data/about.json';

export default function AboutPresentation() {
  return (
    <div >
      {aboutData.description.map((desc, ind) => (
        <li key={ind} className="list-none p-2">{desc}</li>
      ))}
    </div>
  );
}