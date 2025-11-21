import React from 'react';
import { ArrowLeft, ShieldCheck, Wifi, Clock, Award } from 'lucide-react';
import { COMPANY_SLOGAN } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[750px] w-full overflow-hidden flex flex-col justify-center">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
          alt="Luxury Bus Travel Desert" 
          className="w-full h-full object-cover animate-slow-zoom" 
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col justify-center h-full pt-20">
        <div className="max-w-3xl space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/40 rounded-full px-5 py-2 text-amber-400 text-sm font-bold shadow-lg">
            <Award size={16} />
            <span>الشركة الرائدة في النقل البري الدولي</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white drop-shadow-lg">
            رحلة تتعدى <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-400 to-amber-200">
               حدود التوقعات
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light">
            نربط بين حضارتي وادي النيل بأسطول من الحافلات الفاخرة. 
            <strong className="text-white font-bold"> {COMPANY_SLOGAN} </strong>
            بأعلى معايير الرفاهية والأمان.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact" 
              className="group bg-amber-500 hover:bg-amber-400 text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-amber-500/20 flex items-center gap-3 hover:-translate-y-1"
            >
              احجز رحلتك الآن
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={22} />
            </a>
            <a 
              href="#bus-schedule" 
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 flex items-center gap-3"
            >
              جدول الرحلات
              <Clock size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Stats/Features Bar */}
      <div className="relative z-20 container mx-auto px-4 -mt-12 md:-mt-20 mb-8 hidden md:block">
        <div className="bg-white shadow-2xl rounded-2xl p-6 grid grid-cols-3 divide-x divide-x-reverse divide-slate-100 border-b-4 border-amber-500 animate-fade-in-up animate-delay-300">
            <div className="flex items-center gap-4 px-4">
                <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck size={28} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 text-lg">أمان شامل</h3>
                    <p className="text-slate-500 text-sm">سائقين محترفين وتأمين كامل للرحلة</p>
                </div>
            </div>
            <div className="flex items-center gap-4 px-4">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <Wifi size={28} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 text-lg">رفاهية مطلقة</h3>
                    <p className="text-slate-500 text-sm">واي فاي، مقاعد مريحة، ووجبات</p>
                </div>
            </div>
            <div className="flex items-center gap-4 px-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                    <Clock size={28} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 text-lg">دقة في المواعيد</h3>
                    <p className="text-slate-500 text-sm">رحلات يومية مجدولة وثابتة</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};