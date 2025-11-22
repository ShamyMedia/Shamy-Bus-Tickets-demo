import React from 'react';
import { ShieldCheck, Clock, Wifi, Coffee } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 1,
    title: 'أمان تام',
    description: 'سائقون محترفون وحافلات تخضع للصيانة الدورية لضمان سلامتك طوال الطريق.',
    icon: <ShieldCheck size={40} className="text-brand-600" />,
  },
  {
    id: 2,
    title: 'دقة في المواعيد',
    description: 'نلتزم بمواعيد الانطلاق والوصول لضمان عدم إضاعة وقتك الثمين.',
    icon: <Clock size={40} className="text-brand-600" />,
  },
  {
    id: 3,
    title: 'راحة ورفاهية',
    description: 'مقاعد واسعة ومريحة للنوم مع مساحات واسعة للأقدام.',
    icon: <Coffee size={40} className="text-brand-600" />,
  },
  {
    id: 4,
    title: 'خدمات متكاملة',
    description: 'واي فاي مجاني وشواحن USB ومرافق نظيفة داخل الحافلة.',
    icon: <Wifi size={40} className="text-brand-600" />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">لماذا نحن؟</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            أفضل خيار للسفر البري
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            نحن لا ننقلك فقط من مكان لآخر، نحن نهتم بتجربة سفرك كاملة.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.id} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brand-50 rounded-md shadow-sm border border-brand-100">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-bold text-gray-900 tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;