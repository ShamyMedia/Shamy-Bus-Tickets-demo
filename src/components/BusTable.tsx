import React from 'react';
import { Clock, MapPin, Bus, AlertCircle, Star } from 'lucide-react';
import { DAILY_BUS_TRIPS } from '../constants';

export const BusTable: React.FC = () => {
  return (
    <section id="bus-schedule" className="py-24 bg-slate-50 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-600 font-bold tracking-wide text-sm uppercase mb-2 block">وجهتك القادمة</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            اختر رحلتك المثالية
          </h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg leading-relaxed">
            نقدم لك خيارات متنوعة تناسب جدولك وميزانيتك. اختر الرحلة التي تناسبك واستمتع بتجربة سفر لا تُنسى.
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {DAILY_BUS_TRIPS.map((trip) => (
            <div 
              key={trip.id} 
              className="group relative flex flex-col md:flex-row bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
            >
              {/* Image Section (Top on mobile, Right on Desktop) */}
              <div className="w-full md:w-1/3 relative h-56 md:h-auto overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                 <img 
                    src={trip.image} 
                    alt={trip.destination} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 {/* Status Badge overlaid on Image */}
                 <div className="absolute top-4 right-4 z-20">
                    {trip.status === 'boarding' ? (
                        <span className="inline-flex items-center gap-1 bg-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-bold animate-pulse shadow-lg">
                            <Clock size={12} /> يغلق قريباً
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1 bg-slate-900/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg border border-white/20">
                            {trip.status === 'scheduled' ? 'مجدولة' : trip.status === 'departed' ? 'غادرت' : 'وصلت'}
                        </span>
                    )}
                 </div>
                 <div className="absolute bottom-4 right-4 z-20 text-white">
                    <p className="text-xs opacity-90 font-medium mb-1">الوجهة</p>
                    <p className="text-2xl font-bold leading-none">{trip.destination}</p>
                 </div>
              </div>

              {/* Middle Section: Info */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0">
                            <Bus size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">{trip.company}</h3>
                            <div className="flex items-center gap-1 text-xs text-amber-500">
                                <Star size={10} fill="currentColor" />
                                <Star size={10} fill="currentColor" />
                                <Star size={10} fill="currentColor" />
                                <Star size={10} fill="currentColor" />
                                <Star size={10} fill="currentColor" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                    {/* Origin Time */}
                    <div className="text-center min-w-[60px]">
                        <p className="text-2xl font-black text-slate-800 mb-1">{trip.time.split(' ')[0]}</p>
                        <p className="text-xs text-slate-400 font-bold uppercase">{trip.time.split(' ')[1]}</p>
                    </div>

                    {/* Route Viz */}
                    <div className="flex-1 px-2 flex flex-col items-center">
                        <p className="text-xs text-slate-400 mb-2">{trip.duration}</p>
                        <div className="w-full flex items-center gap-2">
                            <div className="h-[2px] flex-1 bg-slate-200 relative">
                                <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-slate-300"></div>
                            </div>
                            <Bus size={16} className="text-sky-500" />
                            <div className="h-[2px] flex-1 bg-slate-200 relative">
                                <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-sky-500"></div>
                            </div>
                        </div>
                        <p className="text-xs text-sky-600 mt-2 font-bold">{trip.origin} &larr; {trip.destination}</p>
                    </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-dashed border-slate-200 flex items-center gap-2 text-slate-500 text-sm">
                    <Clock size={16} className="text-amber-500" />
                    <span>يرجى الحضور قبل ساعة لإنهاء الإجراءات</span>
                </div>
              </div>

              {/* Divider (Visual Perforation) */}
              <div className="relative hidden md:block w-0 border-l-2 border-dashed border-slate-200 my-4">
                <div className="absolute -top-6 -left-3 w-6 h-6 bg-slate-50 rounded-full"></div>
                <div className="absolute -bottom-6 -left-3 w-6 h-6 bg-slate-50 rounded-full"></div>
              </div>

              {/* Right Side (Left in LTR): Price & Action */}
              <div className="md:w-48 bg-sky-50 md:bg-white p-6 flex flex-col justify-center items-center gap-4 border-t md:border-t-0 border-slate-100">
                <div className="text-center">
                    <span className="text-xs text-slate-500 block mb-1">السعر للفرد</span>
                    <span className="text-2xl font-black text-sky-700 block">{trip.price}</span>
                </div>
                <a 
                    href="#contact"
                    className="w-full py-3 px-4 bg-slate-900 hover:bg-sky-600 text-white text-center rounded-xl font-bold text-sm transition-all shadow-lg transform group-hover:scale-105 flex items-center justify-center gap-2"
                >
                    احجز الآن
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Info Banner */}
        <div className="mt-12 bg-white border-r-4 border-amber-500 rounded-lg p-6 shadow-sm flex items-start gap-4 max-w-4xl mx-auto">
          <div className="p-2 bg-amber-100 text-amber-600 rounded-full shrink-0">
              <AlertCircle size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">معلومات تهمك قبل السفر</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
               يرجى التأكد من صلاحية جواز السفر لمدة لا تقل عن 6 أشهر. الأسعار الموضحة تشمل (التذكرة + رسوم العبور + وجبة خفيفة). الأطفال دون 6 سنوات مجاناً (بدون مقعد).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};