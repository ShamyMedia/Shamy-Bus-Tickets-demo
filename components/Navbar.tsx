import React, { useState } from 'react';
import { Menu, X, BusFront } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'الرحلات', href: '#schedule' },
    { name: 'المميزات', href: '#features' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 text-brand-700">
              <BusFront size={32} />
              <span className="font-bold text-2xl tracking-wide">الشامي للسفريات</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md text-lg font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 text-white px-6 py-2 rounded-lg hover:bg-brand-700 transition font-bold"
            >
              احجز تذكرتك
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-600 p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-600 hover:text-brand-600 hover:bg-brand-50 px-3 py-3 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="block w-full text-center bg-brand-600 text-white px-3 py-3 rounded-md font-bold mt-4"
            >
              اتصل الآن
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;