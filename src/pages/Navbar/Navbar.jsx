import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'About',
      link: '#about',
    },
    {
      title: 'Service',
      link: '#service',
    },
    {
      title: 'Portfolio',
      link: '#portfolio',
    },
    {
      title: 'Blog',
      link: '#blog',
    },
  ];

  return (
    <header className="py-3.5 px-4 sm:px-6 lg:px-8 sticky top-0 backdrop-blur-2xl shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-stone-900 dark:text-white">
            Azizur Rahman Bappy
          </span>
        </div>

        <nav
          className={`${
            isMenuOpen
              ? 'flex absolute top-15 left-0 w-full bg-white dark:bg-stone-900 flex-col p-6 shadow-xl z-50 gap-4'
              : 'hidden'
          } md:flex items-center space-x-8`}
        >
          {links.map(link => (
            <NavLink
              className="text-base font-medium text-stone-600 dark:text-stone-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              to={link.link}
            >
              {link.title}
            </NavLink>
          ))}
          <Link
            className="bg-primary text-white text-base font-semibold py-2 px-6 rounded-md shadow-md hover:bg-orange-600 transition-colors"
            to="#contact"
          >
            Contact
          </Link>
        </nav>
        <button
          className="md:hidden text-stone-900 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
