import React, { useState } from 'react';

export default function MobileMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden "> {/* Ocultar en pantallas medianas y grandes */}
      <button 
        onClick={toggleMenu} 
        className="text-white focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <svg 
          className="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Icono hamburguesa */}
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {isOpen && (
        <nav className="fixed top-full left-0 right-0 text-white bg-black p-6">
          <ul className="flex flex-col space-y-4 text-center text-2xl">
            {children}
          </ul>
        </nav>
      )}
    </div>
  );
}