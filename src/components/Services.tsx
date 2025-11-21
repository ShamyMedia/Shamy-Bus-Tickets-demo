import React from 'react';
import { SERVICES } from '../constants';
import { ArrowLeft } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-slate-900 mb-4">خدمات تتجاوز التوقعات</h2>
            <p className="text-slate-600 text-lg">
              نجمع بين الخبرة والكفاءة لنقدم لك مجموعة شاملة من الخدمات التي تلبي كافة احتياجاتك في السفر والشحن.
            </p>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 text-sky-600 font-bold hover:text-sky-700 transition-colors">
            تواصل معنا للاستفسار <ArrowLeft size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6 group-hover:text-slate-600">
                    {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-bold text-sky-600 group-hover:translate-x-[-5px] transition-transform cursor-pointer">
                    اعرف المزيد <ArrowLeft size={16} className="mr-2" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};