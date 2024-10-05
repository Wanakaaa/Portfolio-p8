import React from 'react';
import Image from 'next/image';
import SkillsLogo from '../../data/skills.json';

export default function Skills() {
  return (
    <section id='skills'>
      <div className='w-[80vw] flex flex-col justify-center border'>
        <h2 className="text-center ">Skills</h2>

        {/* Utilisation de container pour centrer la grille */}
        <div className="border border-green-500  flex justify-center flex-wrap gap-6">
          {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'> */}
            {SkillsLogo.map((skill, index) => (
              <div
                key={index}
                className='relative group h-24 w-24 flex items-center justify-center rounded-lg shadow-lg hover:bg-blue-100'
              >
                {/* Image centrée */}
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className='object-contain w-16 h-16'
                />

                {/* Nom de la compétence affiché au survol */}
                <span className='absolute inset-0 bg-black bg-opacity-70 text-white text-center text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition duration-300 font-bold'>
                  {skill.name}
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}