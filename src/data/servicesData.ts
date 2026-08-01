import { ServiceItem, WhyChooseUsItem, ProjectItem } from '../types';
import solarImg from '../assets/images/solar_installation_1785527524771.jpg';
import cctvImg from '../assets/images/cctv_security_1785527538569.jpg';

export const IMAGES = {
  solar: solarImg,
  cctv: cctvImg,
};

export const COMPANY_INFO = {
  name: 'Expert Technologies',
  tagline: 'Reliable Solar & CCTV Solutions for Homes and Businesses',
  phone: '+91 95954 43387',
  phoneFormatted: '+91 95954 43387',
  whatsapp: '919595443387',
  email: 'info@experttechnologies.in',
  supportEmail: 'support@experttechnologies.in',
  address: 'Plot 42, Tech Park Avenue, Near Central Bus Terminus, Industrial Area Phase II, City Center',
  googleMapsUrl: 'https://maps.google.com/?q=Expert+Technologies+Solar+CCTV',
  workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM (Sun: On Call Support)',
  yearsExperience: 8,
  completedProjects: '650+',
  happyClients: '99%',
  warranties: 'Up to 25 Years Panel Warranty | 2 Years CCTV Replacement',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'solar-installation',
    title: 'Solar System Installation',
    category: 'solar',
    shortDesc: 'Complete turnkey solar power plant installations for rooftop & open ground spaces with Tier-1 solar modules.',
    fullDesc: 'Expert Technologies designs and installs high-efficiency rooftop and ground-mounted solar panel systems customized for maximum sunlight harvesting. Our certified solar engineers handle structure fabrication, electrical wiring, panel alignment, and grid integration.',
    iconName: 'Sun',
    features: [
      'High-efficiency Mono PERC & Bifacial Solar Panels',
      'Heavy-duty hot-dip galvanized mounting structures',
      'AC/DC distribution boxes with surge protection (SPD)',
      'Custom rooftop space optimization & shade analysis',
      'Net-metering & government subsidy documentation assistance'
    ],
    benefits: [
      'Slash electricity bills by up to 80-90%',
      'Payback period within 3 to 4 years',
      'Clean green energy reducing carbon footprint',
      '25-year performance warranty on solar panels'
    ],
    idealFor: ['Independent Houses & Villas', 'Shops & Commercial Stores', 'Factories & Manufacturing Plants', 'Schools & Colleges']
  },
  {
    id: 'ongrid-offgrid-solar',
    title: 'On-Grid & Off-Grid Solar Systems',
    category: 'solar',
    shortDesc: 'Custom On-Grid Net Metering, Off-Grid Battery Backup, and Smart Hybrid Solar Solutions.',
    fullDesc: 'Whether you want to sell excess power back to the grid or require 100% uninterrupted power during grid outages, we offer tailored On-Grid, Off-Grid, and Hybrid Solar inverter systems with long-life Lithium-ion or Tubular solar batteries.',
    iconName: 'Zap',
    features: [
      'On-Grid Systems with Bi-Directional Net Metering',
      'Off-Grid Systems with Heavy Duty Solar Inverters & Battery Banks',
      'Smart Hybrid Systems combining Grid + Solar + Battery Backup',
      'Real-time WiFi/Mobile App power generation tracking',
      'Automatic transfer switches for instant load transfer'
    ],
    benefits: [
      'Zero power interruption during outages',
      'Earn credits for excess energy fed into local grid',
      'Flexible battery storage capacity suited to your night load',
      'Extremely low maintenance requirements'
    ],
    idealFor: ['Offices with continuous server loads', 'Hospitals & Diagnostic Centers', 'Remote Agro/Farmhouses', 'Residential Apartments']
  },
  {
    id: 'cctv-installation',
    title: 'CCTV Camera Installation',
    category: 'cctv',
    shortDesc: 'High-definition 4K IP cameras, full-color night vision, wireless, and dome/bullet camera setups.',
    fullDesc: 'Safeguard your family, employees, assets, and inventory with professional CCTV camera installation. We install ultra-HD IP and HD-TVI cameras featuring smart motion detection, night vision color optics, and weather-resistant IP67 metal housings.',
    iconName: 'Camera',
    features: [
      'Full HD (1080p) & 4K Ultra-HD Crisp Recording',
      'ColorVu / Starlight 24/7 Full-Color Night Vision',
      'Concealed wiring in heavy-duty PVC/conduit pipes',
      '360° Pan-Tilt-Zoom (PTZ) high speed cameras',
      'Vandal-proof & weather-resistant outdoor camera housings'
    ],
    benefits: [
      'Deter crime, theft, and unauthorized intrusion',
      '24/7 continuous evidence recording with multi-terabyte storage',
      'Clear face recognition & vehicle license plate capture',
      'Neat, aesthetic installation with hidden cables'
    ],
    idealFor: ['Retail Stores & Supermarkets', 'Gated Communities & Apartments', 'Offices & Co-working Spaces', 'Warehouses & Godowns']
  },
  {
    id: 'surveillance-solutions',
    title: 'Security Surveillance Solutions',
    category: 'cctv',
    shortDesc: 'Remote smartphone live view, AI human detection alarms, multi-location centralized monitoring setups.',
    fullDesc: 'Transform standalone cameras into a smart security perimeter. We setup centralized NVR/DVR recording servers, instant smartphone push alerts for human/vehicle detection, two-way audio talkback, and multi-branch video management software.',
    iconName: 'ShieldCheck',
    features: [
      'Remote Live Monitoring on iOS/Android & Windows PCs',
      'AI Human & Vehicle Motion Detection (Zero false alarms)',
      'Centralized multi-site monitoring for chain stores & branches',
      'Cloud storage backup & secure encrypted video feeds',
      'Integration with Intrusion Alarms & Video Door Phones'
    ],
    benefits: [
      'Monitor your property from anywhere in the world',
      'Instant mobile alerts when perimeter is breached',
      'Easily search past footage by date, time, or event',
      'Multi-user access rights for managers and security guards'
    ],
    idealFor: ['Schools & Educational Institutions', 'Industrial Premises & Mills', 'Jewelry Shops & Banks', 'Multi-Store Chains']
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    category: 'maintenance',
    shortDesc: 'Periodic solar panel de-dusting, health checkups, CCTV lens cleaning, cable repair & Annual Maintenance Contracts (AMC).',
    fullDesc: 'Ensure peak solar energy output and uninterrupted CCTV recording with our proactive maintenance plans. We offer single-visit health audits, solar panel washing, inverter calibration, CCTV lens alignment, HDD health checks, and AMC packages.',
    iconName: 'Wrench',
    features: [
      'Solar Panel De-Dusting & Soft Water Washing Service',
      'Inverter terminal torque check & thermal inspection',
      'CCTV Lens cleaning, focal re-adjustment & night LED check',
      'Hard drive health diagnostic & video backup verification',
      'Priority emergency call-out within 4-12 hours'
    ],
    benefits: [
      'Restore up to 15-25% lost solar efficiency from dust',
      'Prevent sudden camera offline failures',
      'Extend lifespan of solar inverters & CCTV hard drives',
      'Hassle-free Annual Maintenance Contracts (AMC)'
    ],
    idealFor: ['Existing Solar System Owners', 'Commercial Complexes', 'Educational Campuses', 'Factories']
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'quality-products',
    title: 'Quality Products',
    desc: 'We strictly source Tier-1 MNRE-approved solar panels (ALMM listed) and premium CCTV brands (Hikvision, Dahua, CP Plus) with genuine manufacturer warranties.',
    iconName: 'Award',
    highlight: 'Tier-1 Certified Brands'
  },
  {
    id: 'professional-installation',
    title: 'Professional Installation',
    desc: 'Our certified engineers and technicians follow safety codes, perform neat conduit wiring, structural anchorage, and rigorous load testing on every job.',
    iconName: 'UserCheck',
    highlight: 'Experienced Engineers'
  },
  {
    id: 'affordable-pricing',
    title: 'Affordable Pricing',
    desc: 'Transparent pricing with no hidden charges. We offer competitive combo packages for combined Solar + CCTV installations with quick payback ROI.',
    iconName: 'DollarSign',
    highlight: 'Best Market Rates'
  },
  {
    id: 'trusted-service',
    title: 'Trusted Service',
    desc: 'Over 650+ satisfied residential and commercial installations across the region with top-rated customer feedback and repeat references.',
    iconName: 'Shield',
    highlight: '650+ Success Stories'
  },
  {
    id: 'after-sales-support',
    title: 'After-Sales Support',
    desc: 'Dedicated technical support team ready to assist with app setup, remote troubleshooting, system expansions, and quick repair visits.',
    iconName: 'Headphones',
    highlight: 'Dedicated Helpdesk'
  }
];

export const PROJECTS_SHOWCASE: ProjectItem[] = [
  {
    id: 'project-1',
    title: '10 kW On-Grid Solar Rooftop',
    clientType: 'Home',
    category: 'Solar System',
    specs: '20x 540W Mono PERC Panels + Solis 3-Phase Inverter',
    location: 'Greenwood Residency, Sector 4',
    image: solarImg
  },
  {
    id: 'project-2',
    title: '16 Camera 4K IP CCTV Network',
    clientType: 'Office',
    category: 'CCTV Security',
    specs: 'Hikvision 4K Dome/Bullet IP Cameras + 16-Channel NVR + Remote App',
    location: 'Horizon IT Hub, Commercial Zone',
    image: cctvImg
  },
  {
    id: 'project-3',
    title: '25 kW Commercial Solar + 24-Cam Security Combo',
    clientType: 'Industry',
    category: 'Solar + CCTV Combo',
    specs: '25kW Solar Power Plant + Full Perimeter AI Thermal Surveillance',
    location: 'Apex Precision Engineering, Industrial Phase II',
    image: solarImg
  },
  {
    id: 'project-4',
    title: 'Campus Wide CCTV & Solar Light Setup',
    clientType: 'School',
    category: 'Solar + CCTV Combo',
    specs: '32-Camera HD Surveillance System + Solar Street Lighting',
    location: 'St. Mary High School Campus',
    image: cctvImg
  }
];
