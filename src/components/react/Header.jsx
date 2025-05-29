// src/components/react/Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre Mí', href: '#about' },
    /*{ name: 'Trabajos', href: '#gallery' },
    { name: 'Premios', href: '#awards' },
    { name: 'Contacto', href: '#contact' },*/
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Cierra el menú móvil después de hacer clic
    }
  };

  return (
    <header className="bg-gradient-to-tr from-transparent to-neutral-900 text-gray-100 p-4 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="font-cinzel text-2xl font-bold text-stone-300">
          Johan Smith Poveda
        </a>

        {/* Menú de escritorio */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-roboto hover:text-[#bb4e00] transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100 focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block py-2 px-4 text-lg hover:text-[#bb4e00] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;