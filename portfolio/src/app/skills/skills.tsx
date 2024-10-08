import React from 'react';
import Image from 'next/image';
import SkillsLogo from '../../data/skills.json';

export default function Skills() {
  return (
        <div className="border border-pink2 w-full flex justify-around flex-wrap gap-6 p-4">
            {SkillsLogo.map((skill, index) => (
              <div
                key={index}
                className='relative group h-24 w-24 flex items-center justify-center rounded-lg shadow-lg hover:bg-blue-100'
              >
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className='object-contain w-16 h-16'
                />

                <span className='absolute inset-0 bg-black bg-opacity-70 text-white text-center text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition duration-300 font-bold'>
                  {skill.name}
                </span>
              </div>
            ))}
        </div>
  );
}