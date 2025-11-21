import { LucideIcon } from 'lucide-react';

export interface BusTrip {
  id: string;
  destination: string;
  origin: string;
  time: string;
  company: string; // e.g. Shamy Media Buses
  status: 'scheduled' | 'boarding' | 'departed' | 'arrived';
  price: string;
  duration: string;
  image: string;
}

export interface Flight {
  id: string;
  origin: string;
  destination: string;
  airline: string;
  time: string;
  price: string;
  status: 'on-time' | 'delayed' | 'boarding' | 'scheduled';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapUrl: string;
  socialHandle: string;
}