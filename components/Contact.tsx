import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-extrabold mb-8 border-r-4 border-brand-500 pr-4">
              تواصل معنا للحجز
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              فريقنا جاهز للإجابة على استفساراتكم ومساعدتكم في حجز رحلاتكم طوال أيام الأسبوع. نسعد بزيارتكم في مكتبنا.
            </p>

            <div className="space-y-6 bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center group">
                <div className="flex-shrink-0 bg-brand-900/50 p-4 rounded-xl group-hover:bg-brand-600 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-brand-400 group-hover:text-white" />
                </div>
                <div className="mr-5">
                  <h3 className="text-lg font-bold text-white">رقم الهاتف / واتساب</h3>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="mt-1 text-gray-300 hover:text-brand-400 transition block" dir="ltr">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex-shrink-0 bg-brand-900/50 p-4 rounded-xl group-hover:bg-brand-600 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-brand-400 group-hover:text-white" />
                </div>
                <div className="mr-5">
                  <h3 className="text-lg font-bold text-white">البريد الإلكتروني</h3>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="mt-1 text-gray-300 hover:text-brand-400 transition block">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex-shrink-0 bg-brand-900/50 p-4 rounded-xl group-hover:bg-brand-600 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-brand-400 group-hover:text-white" />
                </div>
                <div className="mr-5">
                  <h3 className="text-lg font-bold text-white">العنوان</h3>
                  <p className="mt-1 text-gray-300">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex-shrink-0 bg-brand-900/50 p-4 rounded-xl group-hover:bg-brand-600 transition-colors duration-300">
                  <Facebook className="w-6 h-6 text-brand-400 group-hover:text-white" />
                </div>
                <div className="mr-5">
                  <h3 className="text-lg font-bold text-white">فيسبوك</h3>
                  <a 
                    href={`https://facebook.com/${CONTACT_INFO.socialHandle}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-1 text-gray-300 hover:text-brand-400 transition block"
                  >
                    @{CONTACT_INFO.socialHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed - Updated to Faisal Street coordinates */}
          <div className="h-[450px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 relative group">
            <div className="absolute inset-0 bg-brand-500/10 pointer-events-none group-hover:bg-transparent transition-colors z-10"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27631.53646097211!2d31.17874375!3d30.02631645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846bd3435d157%3A0x246e25539655888!2sFaisal%20St.%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1708940000000!5m2!1sen!2seg" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع مكتب الشامي في فيصل"
              className="grayscale group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;