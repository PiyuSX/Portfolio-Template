import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4 bg-white dark:bg-[#0a192f]">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-left">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Connect With Me
          </h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-500"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-500"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-600 dark:text-gray-300">
            Made with ❤️ by <a href="https://piyux.xyz" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-500 hover:underline">Piyush</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;