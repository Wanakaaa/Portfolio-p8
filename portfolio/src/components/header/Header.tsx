"use client";

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header principal */}
      <header className="w-full shadow-md z-10 bg-white">
        <div className="flex justify-between items-center p-4 md:p-6 w-full">
          {/* Logo ou Texte de lien vers la page d'accueil */}
          <Link href="/" className="text-2xl font-bold tracking-wide">
            S.C
          </Link>

          {/* Bouton de menu pour mobile */}
          <button className="md:hidden text-3xl focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Menu de navigation visible sur écrans moyens et grands */}
          <div className="hidden md:flex">
            <Navbar />
          </div>
        </div>
      </header>

      {/* Menu mobile : placé naturellement sous le header */}
      {isOpen && (
        <nav className="block w-full bg-gray-50 py-4 md:hidden">
          <Navbar />
        </nav>
      )}
    </>
  );
}