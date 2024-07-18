import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white flex flex-col md:flex-row justify-between items-center gap-2 p-4 lg:px-4">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
          <span className="text-sky-500 text-2xl font-bold">RGP</span>
          <h1 className="text-2xl font-bold lg:ml-2">School</h1>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="(link unavailable)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li className="hover:text-gray-200">
            <Link to="/" className="text-white" onClick={closeMenu}>Home</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/academics" className="text-white" onClick={closeMenu}>Academics</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/welfare" className="text-white" onClick={closeMenu}>Welfare</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/gallery" className="text-white" onClick={closeMenu}>Gallery</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/aboutUs" className="text-white" onClick={closeMenu}>About Us</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/contactUs" className="text-white" onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;