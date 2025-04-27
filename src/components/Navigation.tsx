
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/wedding', label: 'Wedding' },
    { to: '/journal', label: 'Journal' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-playfair text-2xl font-semibold">
            MORU
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <Menu size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop dropdown menu */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-neutral-850 hover:text-black transition-colors duration-200">
                Menu <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 bg-white">
                {links.map((link) => (
                  <DropdownMenuItem key={link.label}>
                    <Link
                      to={link.to}
                      className="w-full text-neutral-850 hover:text-black transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-sm py-4">
            <div className="flex flex-col items-center space-y-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-neutral-850 hover:text-black transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
