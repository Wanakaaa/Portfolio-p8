"use client"

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Utilisation d'une icône de la bibliothèque react-icons

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher le bouton lorsque l'utilisateur scrolle vers le bas
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fonction pour scroller jusqu'en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-green-transparent2 text-white hover:bg-green2 transition duration-300 shadow-lg"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}