import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="font-gilmer text-2xl font-light tracking-tight">MORU</div>
          
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/morya_ghorpade?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-850 hover:text-black transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} MORU. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

