import React from 'react';
import aboutData from '../../data/about.json';

export default function AboutPresentation() {
  return (
    <div className="mb-4">
      <p>Je suis {aboutData.name}, je tente de créer un portfolio</p>
      <p>{aboutData.description}</p>
    </div>
  );
}