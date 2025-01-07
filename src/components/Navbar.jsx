import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const links = ['Skills', 'Portfolio', 'Contact'];
  const fullName = "Nitish";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < fullName.length) {
          setDisplayText(fullName.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (displayText.length === 0) {
          setIsDeleting(false);
        } else {
          setDisplayText(fullName.slice(0, displayText.length - 1));
        }
      }
    }, isDeleting ? 100 : 200);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <div className="fixed w-full z-50 px-4 py-2">
      <nav className="container mx-auto bg-white/80 dark:bg-[#0a192f]/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">
            <div className="flex">
              {displayText}
              <span className="animate-pulse ml-1">|</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={300}
                spy={true}
                offset={-70}
                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
              {menuOpen ? <FaTimes className="text-gray-600" /> : <FaBars className="text-gray-600" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={300}
                spy={true}
                offset={-70}
                className="block cursor-pointer text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setMenuOpen(false);
              }}
              className="block w-full text-left p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
