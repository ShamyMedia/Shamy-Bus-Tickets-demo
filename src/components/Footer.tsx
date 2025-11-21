import React from 'react';
import { Facebook, Instagram, Twitter, Bus } from 'lucide-react';
import { COMPANY_NAME, CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  const socialUrl = `https://facebook.com/${CONTACT_INFO.socialHandle}`;

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-800 pb-8 mb-8">
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <Bus className="text-sky-500" />
            {COMPANY_NAME}
          </div>
          
          <div className="flex gap-6">
            <a href={socialUrl} target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors"><Facebook /></a>
            <a href={`https://twitter.com/${CONTACT_INFO.socialHandle}`} target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors"><Twitter /></a>
            <a href={`https://instagram.com/${CONTACT_INFO.socialHandle}`} target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors"><Instagram /></a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-500">
          <div className="text-center md:text-right">
            <p>{CONTACT_INFO.address}</p>
            <p className="mt-1 dir-ltr">{CONTACT_INFO.email}</p>
          </div>
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};