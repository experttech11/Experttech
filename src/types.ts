export interface ServiceItem {
  id: string;
  title: string;
  category: 'solar' | 'cctv' | 'maintenance';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  benefits: string[];
  idealFor: string[];
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
  category: 'Solar System' | 'CCTV Security' | 'Solar + CCTV Combo';
  specs: string;
  location: string;
  image: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: 'Home' | 'Shop' | 'Office' | 'School' | 'Industry';
  serviceRequired: 'Solar System Installation' | 'On-Grid & Off-Grid Solar' | 'CCTV Camera Installation' | 'Security Surveillance Solutions' | 'Solar + CCTV Combo' | 'Maintenance & Support';
  city: string;
  estimatedBudget?: string;
  message: string;
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
