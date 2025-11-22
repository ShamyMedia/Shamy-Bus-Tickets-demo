import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden h-[600px] lg:h-[700px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1920&auto=format&fit=crop"
          alt="حافلة سياحية فاخرة للسفر بين مصر والسودان"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 text-center md:text-right">
        <div className="md:w-2/3 lg:w-1/2 mr-auto pt-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-400 bg-brand-900/70 text-brand-300 text-sm mb-6 backdrop-blur-md shadow-lg">
            <span className="ml-2 bg-brand-500 rounded-full w-2 h-2 animate-pulse"></span>
            رحلات يومية منتظمة بأعلى معايير الأمان
          </div>
          
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6 leading-tight drop-shadow-lg">
            <span className="block">سافر براحة ورفاهية</span>
            <span className="block text-brand-500">من مصر إلى السودان</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-200 max-w-3xl leading-relaxed drop-shadow-md font-medium">
            تجربة سفر استثنائية مع الشامي للسفريات. أسطول حديث، مقاعد مريحة، وخدمة متميزة تضمن لك الوصول الآمن.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <div className="rounded-md shadow">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-all transform hover:scale-105 shadow-lg shadow-brand-900/50"
              >
                احجز رحلتك الآن
              </a>
            </div>
            <div className="rounded-md">
              <a
                href="#schedule"
                className="w-full flex items-center justify-center px-8 py-4 border-2 border-white/30 text-lg font-bold rounded-lg text-white hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm bg-white/10"
              >
                جدول الرحلات <ArrowRight size={20} className="mr-2" />
              </a>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-6 text-gray-300 text-sm justify-center md:justify-start font-medium">
             <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                <MapPin size={16} className="text-brand-500" /> القاهرة
             </div>
             <span className="w-16 h-[2px] bg-gradient-to-l from-brand-500 to-gray-500 rounded-full"></span>
             <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                <MapPin size={16} className="text-brand-500" /> الخرطوم
             </div>
             <span className="hidden sm:block w-1 h-1 bg-brand-500 rounded-full"></span>
             <div className="hidden sm:flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                <MapPin size={16} className="text-brand-500" /> دنقلا
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;