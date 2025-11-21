import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Form */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">تواصل معنا</h2>
            <p className="text-slate-600 mb-10">
              فريقنا جاهز للرد على استفساراتكم وحجوزاتكم على مدار الساعة. تفضل بزيارتنا أو تواصل معنا عبر الهاتف.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">العنوان</h4>
                  <p className="text-slate-600">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">الهاتف</h4>
                  <p className="text-slate-600 text-right" dir="ltr">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">البريد الإلكتروني</h4>
                  <p className="text-slate-600">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">ساعات العمل</h4>
                  <p className="text-slate-600">السبت - الخميس: 9:00 ص - 10:00 م</p>
                  <p className="text-slate-600">الجمعة: 4:00 م - 10:00 م</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-slate-100 rounded-2xl overflow-hidden h-[400px] lg:h-auto shadow-inner border border-slate-200">
            <iframe 
              src={CONTACT_INFO.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};