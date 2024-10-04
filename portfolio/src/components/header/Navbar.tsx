import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-center items-center flex-wrap space-x-4 md:space-x-8 w-full mx-auto px-4">
        <li className="text-sm md:text-base lg:text-sm px-2 py-1 mobile:bg-gray-500">
          <Link href="/#about" className="inline-flex items-center justify-center">À propos</Link>
        </li>
        <li className="text-sm md:text-base lg:text-sm px-2 py-1">
          <Link href="/#projects" className="inline-flex items-center justify-center">Projets</Link>
        </li>
        <li className="text-sm md:text-base lg:text-sm px-2 py-1">
          <Link href="/#skills" className="inline-flex items-center justify-center">Technologies</Link>
        </li>
        <li className="text-sm md:text-base lg:text-sm px-2 py-1">
          <Link href="/#contact" className="inline-flex items-center justify-center">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}