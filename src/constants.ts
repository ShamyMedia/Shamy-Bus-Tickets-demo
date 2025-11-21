import { Plane, Package, FileCheck, Bus, } from 'lucide-react';
import { Service, ContactInfo, BusTrip, Flight } from './types';

export const COMPANY_NAME = "الأفق للسفر والشحن";
export const COMPANY_SLOGAN = "رحلاتك آمنة ومريحة بين مصر والسودان";

export const CONTACT_INFO: ContactInfo = {
  phone: "+20 100 640 4614",
  whatsapp: "201006404614",
  email: "shamymediaeg@gmail.com",
  address: "شارع فيصل، الجيزة، جمهورية مصر العربية",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55264.73721703804!2d31.15750828356859!3d30.00933588927757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458460641801115%3A0x1522667339119e1!2sFaisal%20Street%2C%20Giza!5e0!3m2!1sen!2seg!4v1695641234567!5m2!1sen!2seg",
  socialHandle: "shsmymediaeg"
};

export const NAV_LINKS = [
  { name: 'الرئيسية', href: '#hero' },
  { name: 'مواعيد الرحلات', href: '#bus-schedule' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'تواصل معنا', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'نقل بري فاخر',
    description: 'أسطول من الباصات الحديثة المكيفة (واي فاي - حمام - وجبات) لضمان راحة المسافرين.',
    icon: Bus
  },
  {
    id: '3',
    title: 'شحن بضائع وأمانات',
    description: 'خدمة شحن بري للأمتعة والبضائع من الباب للباب مع ضمان التسليم الآمن والسريع.',
    icon: Package
  },
  {
    id: '4',
    title: 'تأشيرات وتخليص',
    description: 'نوفر مساعدة شاملة في إجراءات التأشيرات والموافقات الأمنية وتخليص إجراءات المعابر.',
    icon: FileCheck
  },
  {
    id: '2',
    title: 'حجز تذاكر طيران',
    description: 'خدمة حجز تذاكر الطيران لكافة الخطوط كخيار بديل عند الحاجة للسرعة.',
    icon: Plane
  }
];

export const DAILY_BUS_TRIPS: BusTrip[] = [
  {
    id: 'B-CAI-KRT-01',
    origin: 'الجيزة - فيصل',
    destination: 'الخرطوم',
    time: '05:00 AM',
    company: 'سوبر جيت الأفق',
    status: 'scheduled',
    price: '3500 ج.م',
    duration: '24 ساعة',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000&auto=format&fit=crop' // Bus 1: Modern White Front View
  },
  {
    id: 'B-CAI-DNG-02',
    origin: 'الجيزة - فيصل',
    destination: 'دنقلا',
    time: '07:30 AM',
    company: 'الأفق السريع',
    status: 'boarding',
    price: '3000 ج.م',
    duration: '18 ساعة',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop' // Bus 2: Coach on highway/desert
  },
  {
    id: 'B-CAI-WHL-03',
    origin: 'القاهرة',
    destination: 'حلفا',
    time: '09:00 AM',
    company: 'الأفق المميز',
    status: 'scheduled',
    price: '2500 ج.م',
    duration: '15 ساعة',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=1000&auto=format&fit=crop' // Bus 3: Green Modern Coach
  },
  {
    id: 'B-KRT-CAI-04',
    origin: 'الخرطوم',
    destination: 'القاهرة',
    time: '06:00 AM',
    company: 'سوبر جيت الأفق',
    status: 'departed',
    price: '120000 SDG',
    duration: '24 ساعة',
    image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=1000&auto=format&fit=crop' // Bus 4: Blue Side Profile
  }
];

export const DAILY_FLIGHTS: Flight[] = []; // Kept empty as focus is on buses