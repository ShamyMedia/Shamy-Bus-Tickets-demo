import React from 'react';
import { MapPin, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import { TRIPS, CONTACT_INFO } from '../constants';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-bold tracking-wide uppercase mb-2">مواعيدنا</h2>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            جدول الرحلات اليومية
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            اختر وجهتك واستمتع برحلة مريحة وآمنة. الحجز متاح فوراً عبر الواتساب.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 max-w-lg mx-auto md:max-w-none">
          {TRIPS.map((trip) => (
            <div key={trip.id} className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="flex-shrink-0 relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  src={trip.image} 
                  alt={`${trip.origin} إلى ${trip.destination}`} 
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur text-brand-700 px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  متاح يومياً
                </div>
              </div>
              
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="text-center">
                      <span className="block text-xs text-gray-500 mb-1">من</span>
                      <span className="font-bold text-gray-900 text-lg">{trip.origin}</span>
                    </div>
                    <div className="flex flex-col items-center px-4">
                      <ArrowLeft className="text-brand-500 w-6 h-6" />
                      <span className="text-xs text-gray-400 mt-1">رحلة مباشرة</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-xs text-gray-500 mb-1">إلى</span>
                      <span className="font-bold text-gray-900 text-lg">{trip.destination}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-700 mb-6 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                    <Clock className="ml-2 w-5 h-5 text-blue-600" />
                    <span className="font-bold text-sm ml-2">موعد التحرك:</span>
                    <span className="font-bold text-lg text-blue-900">{trip.departureTime}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">مميزات الرحلة:</h4>
                    <ul className="space-y-2">
                      {trip.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="flex-shrink-0 w-4 h-4 text-brand-500 ml-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 pt-6 border-t border-gray-100">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`السلام عليكم، أرغب في حجز رحلة من ${trip.origin} إلى ${trip.destination} موعد ${trip.departureTime}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-4 border border-transparent rounded-xl shadow-md text-base font-bold text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all"
                  >
                    احجز الآن عبر واتساب
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;