import { ContactInfo, Trip } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: "+201006404614",
  whatsapp: "201006404614",
  email: "shamymediaeg@gmail.com",
  address: "شارع فيصل - الجيزة، مصر",
  socialHandle: "shsmymediaeg"
};

// الصور مختارة بعناية كسويق بصري لتوحي بالرفاهية والأمان
export const TRIPS: Trip[] = [
  {
    id: 'cairo-khartoum',
    origin: 'القاهرة',
    destination: 'الخرطوم',
    departureTime: '06:00 صباحاً',
    price: 'تواصل للسعر',
    // صورة من الداخل توحي بالراحة والرفاهية (مقاعد واسعة)
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
    features: ['تكييف هواء بارد', 'مقاعد VIP واسعة', 'واي فاي مجاني', 'وجبة ضيافة']
  },
  {
    id: 'khartoum-cairo',
    origin: 'الخرطوم',
    destination: 'القاهرة',
    departureTime: '07:00 صباحاً',
    price: 'تواصل للسعر',
    // صورة خارجية لباص حديث جداً وأنيق (يوحي بالحداثة والموثوقية)
    image: 'https://images.unsplash.com/photo-1596436376362-617759b55539?q=80&w=800&auto=format&fit=crop',
    features: ['أحدث موديلات الحافلات', 'وزن إضافي مسموح', 'شواحن USB لكل مقعد']
  },
  {
    id: 'cairo-dongola',
    origin: 'القاهرة',
    destination: 'دنقلا',
    departureTime: '08:30 مساءً',
    price: 'تواصل للسعر',
    // صورة للطريق وقت الغروب الذهبي (توحي بمتعة السفر وهدوء الطريق)
    image: 'https://images.unsplash.com/photo-1519817914152-c2d2219b8a62?q=80&w=800&auto=format&fit=crop',
    features: ['رحلة مباشرة وسريعة', 'سائقين ذوي خبرة', 'توقفات مريحة للصلاة']
  }
];

// رسالة افتراضية عامة
export const WHATSAPP_LINK = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("مرحباً شركة الشامي، أود الاستفسار عن حجز رحلة.")}`;