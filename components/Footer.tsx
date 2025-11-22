import React from 'react';
import { BusFront, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 text-brand-700 mb-4">
            <BusFront size={28} />
            <span className="font-bold text-xl">الشامي للسفريات</span>
          </div>
          <p className="text-gray-500 text-center text-sm mb-4 max-w-md">
            نسعى دائماً لتقديم أفضل خدمات النقل البري بين مصر والسودان بأعلى معايير الجودة والأمان.
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <span>صمم بكل</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>لخدمة المسافرين</span>
          </div>
          <p className="mt-8 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;