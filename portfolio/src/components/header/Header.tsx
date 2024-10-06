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
    <header
    // className="flex justify-between items-center p-4 md:p-6 bg-gradient-to-r from-[#629584] to-[#387478] text-[#E2F1E7] w-full top-0 z-10 shadow-md"
      className={`flex justify-between items-center p-4 md:p-6 bg-gradient-to-r from-[#629584] to-[#387478] text-[#E2F1E7] w-full shadow-md ${
        isOpen ? 'mb-0' : 'mb-0'}`}
    >
      <div className="text-2xl">
        <Link href="/">S.C</Link>
      </div>

      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className="hidden md:flex">
        <Navbar />
      </div>

      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } absolute top-16 left-0 w-full bg-gradient-to-r from-[#629584] to-[#387478] md:hidden justify-center items-center text-center`}
      >
        <Navbar />
      </div>
    </header>
  );
}