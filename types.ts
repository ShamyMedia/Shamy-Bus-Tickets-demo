export interface Trip {
  id: string;
  origin: string;
  destination: string;
  departureTime: string;
  price?: string;
  image: string;
  features: string[];
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  socialHandle: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}