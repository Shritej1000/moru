
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/wedding', label: 'Wedding' },
    { to: '/journal', label: 'Journal' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-gilmer text-2xl font-semibold">
              MORU
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-850 hover:text-black transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full screen menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40">
          <div className="h-full flex flex-col items-center justify-center">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-white text-5xl md:text-7xl font-bold py-4 hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
