export interface ServiceItem {
  id: string;
  title: string;
  category: 'solar' | 'cctv' | 'networking' | 'biometric' | 'vdp' | 'maintenance';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  benefits: string[];
  idealFor: string[];
  specs?: string[];
  pricingStarting?: string;
  warrantyPeriod?: string;
  faqs?: { question: string; answer: string }[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  highlight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  clientType: 'Home' | 'Shop' | 'Office' | 'School' | 'Industry';
  category: 'Solar System' | 'CCTV Security' | 'Solar + CCTV Combo' | 'Networking & Biometric';
  specs: string;
  location: string;
  image: string;
  completionYear?: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: 'Home' | 'Shop' | 'Office' | 'School' | 'Industry';
  serviceRequired: string;
  city: string;
  estimatedBudget?: string;
  message: string;
}

export interface CallbackFormData {
  fullName: string;
  phone: string;
  preferredTime: string;
  service: string;
  location: string;
}

export interface CalculationResult {
  propertyType: string;
  systemType: string;
  solarKw?: number;
  panelsCount?: number;
  monthlySavings?: number;
  cctvCount?: number;
  nvrStorage?: string;
  estimatedPriceRange: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  date: string;
  verified: boolean;
}

export interface BrandPartner {
  id: string;
  name: string;
  category: 'Solar' | 'CCTV' | 'Networking' | 'Inverters';
  tagline: string;
  logoText: string;
}

export interface ServiceArea {
  name: string;
  locality: string;
  pincode: string;
  description: string;
  popularProjects: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'Solar Guide' | 'CCTV & Security' | 'Government Subsidy' | 'Maintenance & AMC';
  author: string;
  publishDate: string;
  readTime: string;
  image: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Solar' | 'CCTV' | 'AMC & Support' | 'General & Location';
}

export interface AIChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: string[];
  leadCapture?: boolean;
}
