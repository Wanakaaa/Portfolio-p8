// import React from 'react';
// import Link from 'next/link';
// import sectionsData from '../../data/sectionsData.json'

// export default function Navbar() {
//   return (
//     <nav>
//       <ul className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 md:space-x-8 w-full mx-auto px-4 text-semibold space-y-4 sm:space-y-0">
//         <li className="px-2 py-1">
//           <Link href="/#about" className="inline-flex items-center justify-center">À propos</Link>
//         </li>
//         <li className="px-2 py-1">
//           <Link href="/#projects" className="inline-flex items-center justify-center">Projets</Link>
//         </li>
//         <li className="px-2 py-1">
//           <Link href="/#skills" className="inline-flex items-center justify-center">Technologies</Link>
//         </li>
//         <li className="px-2 py-1">
//           <Link href="/#contact" className="inline-flex items-center justify-center">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

import React from 'react';
import Link from 'next/link';
import sectionsData from '../../data/sectionsData.json'

interface Section {
  id: string;
  href: string;
  label: string;
  sectionTitle: string;
  isMainTitle: boolean;
}

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 md:space-x-8 w-full mx-auto px-4 text-semibold space-y-4 sm:space-y-0">
        {sectionsData.map((section) => (
          <li key={section.id}
          className='px-2 py-2'>
                        <Link href={section.href} className="inline-flex items-center justify-center">
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}