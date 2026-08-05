import {
  ServiceItem,
  WhyChooseUsItem,
  ProjectItem,
  Testimonial,
  BrandPartner,
  ServiceArea,
  BlogPost,
  FAQItem,
} from '../types';
import solarImg from '../assets/images/solar_installation_1785527524771.jpg';
import cctvImg from '../assets/images/cctv_security_1785527538569.jpg';

export const IMAGES = {
  solar: solarImg,
  cctv: cctvImg,
};

export const COMPANY_INFO = {
  name: 'Expert Technologies',
  tagline: 'Premier Solar & CCTV Security Solutions in Chhatrapati Sambhajinagar',
  shortDesc: 'Certified Solar rooftop power installers & high-definition 4K CCTV surveillance experts in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra.',
  phone: '+91 95954 43387',
  phoneFormatted: '+91 95954 43387',
  whatsapp: '919595443387',
  email: 'info@experttechnologies.in',
  supportEmail: 'support@experttechnologies.in',
  facebook: 'https://www.facebook.com/share/18wvGBiMam/',
  facebookUrl: 'https://www.facebook.com/share/18wvGBiMam/',
  instagram: 'https://www.instagram.com/experttech4u?igsh=Njk1am16dXBrMnA3',
  instagramUrl: 'https://www.instagram.com/experttech4u?igsh=Njk1am16dXBrMnA3',
  linkedin: 'https://linkedin.com/company/experttechnologies',
  youtube: 'https://youtube.com/@experttechnologies',
  address: 'Plot 45, Garkheda Parisar, Chh. Sambhajinagar - 431001, Maharashtra, India',
  city: 'Chhatrapati Sambhajinagar',
  district: 'Chhatrapati Sambhajinagar (Aurangabad)',
  state: 'Maharashtra',
  pincode: '431001',
  googleMapsUrl: 'https://maps.google.com/?q=Plot+45+Garkheda+Parisar+Chh+Sambhajinagar+431001',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.5432!2d75.3521!3d19.8654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2bf!2sGarkheda+Parisar%2C+Chhatrapati+Sambhajinagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM (Sun: Emergency On-Call Support)',
  yearsExperience: 8,
  completedProjects: '650+',
  happyClients: '99%',
  googleRating: '4.9',
  totalReviews: '320+',
  warranties: 'Up to 25 Years Panel Warranty | 2 Years CCTV Replacement | 1 Year Free Service AMC',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'cctv-installation',
    title: 'CCTV Camera Installation',
    category: 'cctv',
    shortDesc: 'Ultra HD 4K IP cameras, ColorVu 24/7 full-color night vision, dome/bullet setups, and remote mobile viewing.',
    fullDesc: 'Expert Technologies provides top-rated HD and 4K IP CCTV camera installation in Chhatrapati Sambhajinagar for homes, retail shops, offices, schools, and factories. Our certified security technicians install tamper-proof cameras with concealed conduit wiring, smart human motion detection, and instant mobile live alerts.',
    iconName: 'Camera',
    features: [
      'Full HD (1080p) & 4K Ultra-HD Crisp Night Recording',
      'Hikvision ColorVu / Dahua Full-Color 24/7 Night Optics',
      'Concealed wiring in heavy-duty ISI PVC conduit pipes',
      '360° Pan-Tilt-Zoom (PTZ) high speed outdoor cameras',
      'Vandal-proof metal body housings & IP67 weather resistance'
    ],
    benefits: [
      'Deter crime, theft, shoplifting & unauthorized entry',
      '24/7 continuous evidence recording with multi-TB storage',
      'Clear face recognition & license plate capture at night',
      'Watch live stream anytime on Android / iPhone'
    ],
    idealFor: ['Independent Houses & Villas', 'Shops, Showrooms & Supermarkets', 'Offices & Co-working Spaces', 'Factories & Warehouses'],
    specs: ['Resolution: 2MP / 3MP / 5MP / 8MP (4K)', 'Storage: 1TB to 10TB Surveillance Hard Disk', 'Night Vision Range: 20m - 80m Color Night Vision', 'App Support: Hik-Connect, DMSS, gCMOB'],
    pricingStarting: '₹10,999 (4-Camera HD System Setup)',
    warrantyPeriod: '2 Years On-Site Replacement Warranty',
    faqs: [
      {
        question: 'Can I view my CCTV cameras on my smartphone when I am outside Chhatrapati Sambhajinagar?',
        answer: 'Yes! We configure free mobile apps (Hik-Connect / DMSS) on your Android or iPhone so you can view live video and past playback from anywhere in the world with internet.'
      },
      {
        question: 'Do these CCTV cameras work during power cuts?',
        answer: 'Yes, we include a heavy-duty UPS battery backup in our installation packages so your cameras keep recording uninterrupted even during load shedding.'
      }
    ]
  },
  {
    id: 'cctv-amc-repair',
    title: 'CCTV AMC & Repair Services',
    category: 'cctv',
    shortDesc: 'Annual Maintenance Contracts (AMC), camera lens cleaning, HDD health checks, DVR/NVR repair, and wire fix.',
    fullDesc: 'Don’t wait for a security incident to discover your CCTV system was offline. Our CCTV AMC service in Chhatrapati Sambhajinagar offers quarterly preventive health checkups, camera focus re-alignment, lens de-dusting, hard drive recording audit, connector replacement, and priority emergency site visits.',
    iconName: 'Wrench',
    features: [
      'Quarterly preventive maintenance visits & deep lens cleaning',
      'Surveillance Hard Disk diagnostic & video recording health check',
      'Power supply voltage testing & BNC/DC connector replacement',
      'Network IP address re-configuration & remote viewing fix',
      'Emergency technician call-out within 4-8 hours in Chh. Sambhajinagar'
    ],
    benefits: [
      '100% video recording uptime assurance',
      'Prevent sudden camera offline errors during emergencies',
      'Extend hard drive & DVR/NVR electronic lifespan',
      'Fixed annual cost with free spare replacement options'
    ],
    idealFor: ['Commercial Complexes', 'Gated Societies & Apartments', 'Jewelry Stores & Banks', 'Schools & Hospitals'],
    specs: ['Visit Frequency: 4 Planned Visits + Unlimited Breakdown Calls', 'Response Time: Under 6 Hours Local', 'Coverage: Cables, Power Supplies, DVR/NVR, Cameras'],
    pricingStarting: '₹2,499 / Year for Home Systems',
    warrantyPeriod: 'Comprehensive & Non-Comprehensive Options',
    faqs: [
      {
        question: 'What is included in a CCTV AMC contract?',
        answer: 'Our AMC covers scheduled lens cleaning, power supply voltage testing, wire repair, DVR/NVR firmware updates, hard disk health verification, and free emergency repair visits.'
      }
    ]
  },
  {
    id: 'solar-installation',
    title: 'Solar System Installation',
    category: 'solar',
    shortDesc: 'Turnkey On-Grid Net-Metering, Off-Grid Battery Backup, and Hybrid Solar Rooftop Power Plants.',
    fullDesc: 'Expert Technologies is a leading solar rooftop installation company in Chhatrapati Sambhajinagar. We design, supply, and erect high-efficiency solar panel systems using Tier-1 MNRE ALMM-approved Mono PERC & Bifacial panels. Enjoy up to 80-90% electricity bill savings with government subsidy assistance.',
    iconName: 'Sun',
    features: [
      'Tier-1 Mono PERC & Bifacial High-Efficiency Solar Modules',
      'On-Grid Net-Metering, Off-Grid Battery, and Smart Hybrid Options',
      'Heavy-duty hot-dip galvanized wind-resistant rooftop structures',
      'AC/DC distribution boxes with Class-II Surge Protection Devices (SPD)',
      'Net-metering application & MSEDCL subsidy process assistance'
    ],
    benefits: [
      'Cut monthly electricity bills by up to 90%',
      'Full ROI payback achieved within 3 to 3.5 years',
      '25 Years linear performance warranty on solar panels',
      'Claim government subsidies under PM Surya Ghar Muft Bijli Yojana'
    ],
    idealFor: ['Residential Roofs (1kW - 10kW)', 'Commercial Buildings & Shops (5kW - 25kW)', 'Factories & Manufacturing Units (10kW - 100kW+)', 'Hospitals & Educational Institutes'],
    specs: ['Panels: Tata / Waaree / Adani / Goldi Mono PERC 540W+', 'Inverters: Solis / Growatt / Havells / Microtek', 'Structure: Hot-Dip Galvanized Iron (140 km/h wind rating)'],
    pricingStarting: '₹45,000 / kW (Before Subsidy)',
    warrantyPeriod: '25 Years Panel Warranty | 5 Years Inverter Warranty',
    faqs: [
      {
        question: 'How much electricity bill can I save with a 3kW Solar Rooftop in Chh. Sambhajinagar?',
        answer: 'A 3kW solar rooftop generates around 12-14 units per day (approx. 360-400 units monthly), saving you around ₹3,000 to ₹4,500 every month on electricity bills.'
      },
      {
        question: 'Do you help with PM Surya Ghar solar subsidy application in MSEDCL?',
        answer: 'Yes! Our team handles the entire process: online portal submission, feasibility report, net-meter installation coordination, and subsidy disbursement.'
      }
    ]
  },
  {
    id: 'networking-solutions',
    title: 'Networking & Structured Cabling',
    category: 'networking',
    shortDesc: 'Structured LAN Cat6 cabling, fiber optic splicing, Wi-Fi mesh setup, server racks, and enterprise routers.',
    fullDesc: 'Build a fast, reliable, and secure IT backbone for your office or industrial facility in Chhatrapati Sambhajinagar. We specialize in Cat6/Cat6A structured cabling, server rack setup, Gigabit network switches, outdoor fiber optic links, and high-speed Wi-Fi access point deployment.',
    iconName: 'Network',
    features: [
      'High-speed Cat6 / Cat6A Gigabit copper LAN cabling',
      'Fiber optic cable laying, OTDR testing, and fusion splicing',
      'Server Rack assembly, patch panels, & cable wire management',
      'Enterprise Wi-Fi 6 mesh routers & ceiling access points',
      'VLAN segmentation, firewall setup, and network bandwidth control'
    ],
    benefits: [
      'Eliminate Wi-Fi dead zones across large offices or factories',
      'Seamless connectivity for computers, VoIP phones, and CCTV',
      'Neat aesthetic server room organization with labeled patch cables',
      'High-speed data transfer up to 10 Gbps'
    ],
    idealFor: ['IT Companies & BPOs', 'Multi-story Office Buildings', 'Schools, Colleges & Labs', 'Hotels & Warehouses'],
    specs: ['Brands: D-Link, TP-Link, Cisco, Ubiquiti, Schneider', 'Cables: D-Link Cat6 305m Box / Molex', 'Racks: 4U to 42U Wall & Floor Mount'],
    pricingStarting: '₹499 per LAN Point Setup',
    warrantyPeriod: '1 Year Workmanship + Brand Warranty',
    faqs: [
      {
        question: 'Can you solve Wi-Fi dead spots in our multi-floor building?',
        answer: 'Absolutely. We install centralized Wi-Fi 6 Access Points connected over Gigabit LAN so you get seamless roaming with full speed on all floors.'
      }
    ]
  },
  {
    id: 'biometric-attendance',
    title: 'Biometric Attendance & Access Control',
    category: 'biometric',
    shortDesc: 'Fingerprint scanners, AI Face Recognition, RFID card readers, magnetic door locks, and payroll software integration.',
    fullDesc: 'Automate employee time tracking and restrict unauthorized access to secure areas with our Biometric Attendance and Access Control systems in Chhatrapati Sambhajinagar. Features touchless AI Face ID, rapid fingerprint matching, electromagnetic door locks, and cloud payroll reports.',
    iconName: 'Fingerprint',
    features: [
      'Touchless AI Face Recognition & High-speed Fingerprint Scanner',
      'RFID Proximity Card & PIN keypad entry options',
      'Electromagnetic (EM) Heavy Duty Lock for Glass & Wooden Doors',
      'Cloud & Desktop Attendance Management Software with Mobile App',
      'Battery backup for attendance logging during power cuts'
    ],
    benefits: [
      'Prevent buddy punching & proxy attendance fraud',
      'Automate monthly salary and leave calculation in 1 click',
      'Restrict unauthorized entry to server rooms, MD cabins & vaults',
      'Real-time employee in/out SMS alerts to managers'
    ],
    idealFor: ['Offices & Corporate Hubs', 'Factories & Industrial Units', 'Gyms & Membership Clubs', 'Coaching Classes & Schools'],
    specs: ['Brands: eSSL, ZKTeco, Realtime, CP Plus', 'Capacity: 1,000 to 50,000 User Records', 'Software: Realtime Web / eSSL Smart Office'],
    pricingStarting: '₹4,999 (Basic Biometric Terminal)',
    warrantyPeriod: '1 Year On-Site Warranty',
    faqs: [
      {
        question: 'Does the biometric software work with our payroll system?',
        answer: 'Yes! Our biometric software exports detailed attendance, overtime, late mark, and leave reports directly to Excel, PDF, or Tally/Payroll software.'
      }
    ]
  },
  {
    id: 'video-door-phone',
    title: 'Video Door Phone & Smart Locks',
    category: 'vdp',
    shortDesc: '7-inch color video door phones, smartphone intercom, electronic rim locks, and biometric smart digital door handles.',
    fullDesc: 'Know who is at your doorstep before opening the door. Our Video Door Phone (VDP) and Smart Digital Door Lock installations in Chhatrapati Sambhajinagar combine crisp video intercom, two-way voice talkback, infrared night vision, and remote door unlock from your smartphone or indoor monitor.',
    iconName: 'Smartphone',
    features: [
      '7-Inch High-Resolution Touch Screen Indoor Monitor',
      'Vandal-Proof Outdoor Camera Unit with IR Night Vision',
      'Wi-Fi Smartphone Integration - Answer door from anywhere',
      'Electronic door lock integration - 1-tap remote unlock',
      'Biometric Fingerprint + Password + Keycard Smart Handle Locks'
    ],
    benefits: [
      'Maximum safety for senior citizens, women, and kids at home',
      'Speak to delivery personnel even when you are away from home',
      'Keyless convenient entry using fingerprint or PIN code',
      'Record photo/video snapshots of visitors automatically'
    ],
    idealFor: ['Independent Villas & Bungalows', 'Flats & Apartments', 'Doctor Clinics & Executive Offices', 'Gated Communities'],
    specs: ['Brands: Hikvision, CP Plus, Godrej, Yale', 'Display: 7" TFT LCD / HD Touchscreen', 'Locks: Electronic Rim / Mortise Digital Handle'],
    pricingStarting: '₹6,499 (VDP Basic Setup)',
    warrantyPeriod: '2 Years Manufacturer Warranty',
    faqs: [
      {
        question: 'Can I unlock my front door using my phone when a guest arrives?',
        answer: 'Yes, our Wi-Fi enabled VDP systems connect to your smartphone app, allowing you to see the visitor, talk to them, and unlock the door remotely.'
      }
    ]
  },
  {
    id: 'annual-maintenance-contract',
    title: 'Annual Maintenance Contract (AMC)',
    category: 'maintenance',
    shortDesc: 'Combined Solar Panel Washing + CCTV System AMC packages for total peace of mind and zero system downtime.',
    fullDesc: 'Keep your solar rooftop generating peak power and your CCTV cameras recording 24/7 with Expert Technologies’ combined AMC plans. Tailored for residential societies, commercial complexes, and manufacturing plants across Chhatrapati Sambhajinagar.',
    iconName: 'ShieldCheck',
    features: [
      'Bi-monthly soft-water solar panel cleaning & dust washing',
      'Quarterly CCTV camera lens cleaning & alignment check',
      'Hard disk recording verification & remote connectivity test',
      'Inverter terminal thermal checkup & battery water top-up',
      'Priority emergency call-outs with zero service visit charges'
    ],
    benefits: [
      'Boost solar generation by 15-25% by removing dust buildup',
      'Zero risk of camera video loss during unexpected incidents',
      'Dedicated helpline with fast local engineer dispatch',
      'Budget-friendly fixed annual maintenance pricing'
    ],
    idealFor: ['Residential Housing Societies', 'Commercial Malls & Complexes', 'Educational Campuses', 'Industrial Plants in Waluj & Shendra'],
    specs: ['Coverage: Solar Panels, Inverter, CCTV Cameras, DVR/NVR, Cabling', 'SLA: Response within 6 Hours'],
    pricingStarting: '₹3,999 / Year (Custom Combo AMC)',
    warrantyPeriod: 'Full Year Service Guarantee',
    faqs: [
      {
        question: 'Why is solar panel cleaning essential in Chhatrapati Sambhajinagar?',
        answer: 'Dust, pollution, and bird droppings accumulate quickly on solar panels, reducing energy output by up to 20-30%. Periodic washing restores 100% solar efficiency.'
      }
    ]
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Garkheda Parisar',
    locality: 'Garkheda, Chhatrapati Sambhajinagar',
    pincode: '431001',
    description: 'Our main head office locality. Rapid service response within 30 minutes for solar panel installation and CCTV camera setup.',
    popularProjects: '120+ Solar Rooftops & CCTV setups in residential bungalows and shops.'
  },
  {
    name: 'CIDCO (Town Centre & Sectors)',
    locality: 'CIDCO N-1 to N-12, Chhatrapati Sambhajinagar',
    pincode: '431003',
    description: 'Prime commercial and residential hub. We serve all sectors from CIDCO N-1 to N-12 with 4K CCTV setups & rooftop solar.',
    popularProjects: '80+ Retail store CCTV installations & residential solar rooftop plants.'
  },
  {
    name: 'Waluj MIDC Industrial Area',
    locality: 'Waluj Industrial Zone, Chhatrapati Sambhajinagar',
    pincode: '431136',
    description: 'Major industrial zone. High-capacity commercial solar power plants (25kW - 100kW) & perimeter IP surveillance.',
    popularProjects: '45+ Industrial solar rooftop systems & factory CCTV networks.'
  },
  {
    name: 'Shendra MIDC & DMIC Zone',
    locality: 'Shendra MIDC, Chhatrapati Sambhajinagar',
    pincode: '431007',
    description: 'Industrial and manufacturing cluster. Heavy-duty solar plants, biometrics, and optical fiber LAN cabling.',
    popularProjects: '30+ Industrial solar rooftop & enterprise networking projects.'
  },
  {
    name: 'Chikalthana MIDC & Airport Road',
    locality: 'Chikalthana, Chhatrapati Sambhajinagar',
    pincode: '431006',
    description: 'Near airport and commercial center. Fast installation of CCTV security and solar net-metering.',
    popularProjects: '60+ Hotel & showroom CCTV setups and commercial solar roof plants.'
  },
  {
    name: 'Jalna Road & Kranti Chowk',
    locality: 'Jalna Road, Chhatrapati Sambhajinagar',
    pincode: '431001',
    description: 'Central arterial road with showrooms, clinics, and banks. ColorVu CCTV cameras & high-speed Wi-Fi networking.',
    popularProjects: '90+ Showroom CCTV setups & biometric access control doors.'
  },
  {
    name: 'Beed Bypass Road',
    locality: 'Beed Bypass, Chhatrapati Sambhajinagar',
    pincode: '431005',
    description: 'Fast-growing residential housing township area. On-Grid solar rooftop packages and video door phone systems.',
    popularProjects: '110+ Home solar rooftops and flat apartment CCTV networks.'
  },
  {
    name: 'Paithan Road & Kanchanwadi',
    locality: 'Paithan Road, Chhatrapati Sambhajinagar',
    pincode: '431005',
    description: 'Educational institutes and housing colonies. Hybrid solar systems with battery backup and campus CCTV.',
    popularProjects: '50+ School/college campus CCTV & hybrid solar installations.'
  },
  {
    name: 'Osmanpura & Shahnoorwadi',
    locality: 'Osmanpura, Chhatrapati Sambhajinagar',
    pincode: '431005',
    description: 'Dense commercial market and residential area. Quick CCTV camera repair, AMC visits, and solar installs.',
    popularProjects: '75+ Shopkeeper CCTV setups and residential solar units.'
  },
  {
    name: 'Railway Station Road & Padampura',
    locality: 'Station Road, Chhatrapati Sambhajinagar',
    pincode: '431005',
    description: 'Hotels, lodges, and commercial establishments. 24/7 CCTV surveillance, smart door locks, and solar heating/power.',
    popularProjects: '40+ Hotel CCTV networks and commercial rooftop solar.'
  }
];

export const BRAND_PARTNERS: BrandPartner[] = [
  { id: 'hikvision', name: 'Hikvision', category: 'CCTV', tagline: 'World Leader in Digital Surveillance', logoText: 'HIKVISION' },
  { id: 'dahua', name: 'Dahua Technology', category: 'CCTV', tagline: 'AI-Powered Smart Security Systems', logoText: 'DAHUA' },
  { id: 'cpplus', name: 'CP Plus', category: 'CCTV', tagline: 'India No. 1 Security & CCTV Brand', logoText: 'CP PLUS' },
  { id: 'tatapower', name: 'Tata Power Solar', category: 'Solar', tagline: 'Tier-1 Premium Solar Modules', logoText: 'TATA POWER SOLAR' },
  { id: 'waaree', name: 'Waaree Energies', category: 'Solar', tagline: 'India Premier Solar Panel Manufacturer', logoText: 'WAAREE' },
  { id: 'solis', name: 'Solis Inverters', category: 'Inverters', tagline: 'High Efficiency On-Grid Solar Inverters', logoText: 'SOLIS' },
  { id: 'growatt', name: 'Growatt', category: 'Inverters', tagline: 'Smart Solar & Hybrid Inverters', logoText: 'GROWATT' },
  { id: 'essl', name: 'eSSL Security', category: 'Networking', tagline: 'Biometric Attendance & Access Control', logoText: 'eSSL' },
  { id: 'dlink', name: 'D-Link', category: 'Networking', tagline: 'Gigabit LAN Cabling & Switches', logoText: 'D-LINK' },
  { id: 'havells', name: 'Havells Solar', category: 'Solar', tagline: 'Heavy Duty Solar Rooftop Inverters', logoText: 'HAVELLS' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Rameshwar Patil',
    role: 'Homeowner',
    location: 'Beed Bypass, Chh. Sambhajinagar',
    rating: 5,
    comment: 'Installed a 5kW On-Grid solar rooftop system from Expert Technologies. My electricity bill came down from ₹6,500/month to almost ZERO! Their team handled the entire MSEDCL net-metering and subsidy paperwork seamlessly.',
    serviceUsed: '5kW On-Grid Solar Rooftop',
    date: '15 Jan 2026',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Sanjay Deshmukh',
    role: 'Business Owner (Retail Store)',
    location: 'CIDCO N-4, Chh. Sambhajinagar',
    rating: 5,
    comment: 'Got 8 Hikvision ColorVu night vision cameras installed at my retail store in CIDCO. The picture quality at night is crystal clear full-color! Also configured live smartphone view so I can check my shop anytime.',
    serviceUsed: '8-Camera 4K CCTV System',
    date: '02 Feb 2026',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Anil Kulkarni',
    role: 'Plant Manager',
    location: 'Waluj MIDC, Chh. Sambhajinagar',
    rating: 5,
    comment: 'Expert Technologies installed a 25kW commercial solar power plant and perimeter IP CCTV cameras for our factory in Waluj MIDC. Outstanding engineering quality, heavy galvanized structure, and prompt after-sales support.',
    serviceUsed: '25kW Solar + IP Surveillance',
    date: '20 Dec 2025',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Priya Joshi',
    role: 'Apartment Committee Member',
    location: 'Garkheda Parisar, Chh. Sambhajinagar',
    rating: 5,
    comment: 'We gave our housing society CCTV AMC and solar rooftop lighting work to Expert Technologies. Extremely polite technicians, neat concealed wiring, and very reasonable pricing. Highly recommended in Aurangabad region!',
    serviceUsed: 'CCTV AMC + Solar Street Lighting',
    date: '18 Nov 2025',
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'pm-surya-ghar-subsidy-guide-chh-sambhajinagar',
    title: 'How to Get Up to ₹78,000 Government Subsidy for Solar Rooftop in Chhatrapati Sambhajinagar',
    summary: 'Complete guide on PM Surya Ghar Muft Bijli Yojana in Maharashtra. Learn eligibility, required documents, capacity calculation, and step-by-step subsidy application process.',
    category: 'Government Subsidy',
    author: 'Expert Solar Engineering Team',
    publishDate: '28 Jan 2026',
    readTime: '4 min read',
    image: solarImg,
    content: [
      'The PM Surya Ghar Muft Bijli Yojana provides generous central government subsidies for residential solar rooftop installations across Chhatrapati Sambhajinagar (Aurangabad) and Maharashtra.',
      'Subsidy Breakdown: For 1 kW system, subsidy is ₹30,000; for 2 kW system, subsidy is ₹60,000; and for 3 kW or higher residential rooftop systems, maximum subsidy is ₹78,000.',
      'Key Eligibility Requirements: Must have an independent roof or society terrace permission, active MSEDCL residential electricity connection, and a valid Aadhaar card linked bank account.',
      'At Expert Technologies, we handle the complete online registration, technical feasibility approval from MSEDCL, net-meter testing, and direct bank transfer subsidy claim for our clients in Garkheda, CIDCO, Beed Bypass, and all areas of Chhatrapati Sambhajinagar.'
    ],
    keyTakeaways: [
      'Get up to ₹78,000 direct bank subsidy for 3kW solar rooftop.',
      'Save ₹3,000 - ₹5,000 every month on electricity bills.',
      'Net-metering allows selling surplus solar energy back to MSEDCL grid.',
      'Complete end-to-end documentation managed by Expert Technologies.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'top-things-to-check-before-buying-cctv-camera',
    title: 'Top 5 Things to Check Before Installing CCTV Cameras in Your Shop or Home',
    summary: 'Don’t make costly CCTV mistakes! Learn the difference between IP vs HD analog cameras, 24/7 full-color night vision, storage calculation, and concealed conduit wiring.',
    category: 'CCTV & Security',
    author: 'Surveillance Specialist',
    publishDate: '10 Jan 2026',
    readTime: '5 min read',
    image: cctvImg,
    content: [
      'Selecting the right CCTV camera system for your home, showroom, or warehouse in Chhatrapati Sambhajinagar can be confusing with so many technical terms.',
      '1. ColorVu / Night Optics: Traditional infrared cameras record grainy black-and-white footage at night. Always choose Full-Color 24/7 Starlight or ColorVu cameras so you can read vehicle numbers and identify shirt colors in total darkness.',
      '2. IP Cameras vs. Analog HD: For sharp face identification and digital zoom without blur, IP cameras with PoE wiring are vastly superior to old analog TVI cameras.',
      '3. Hard Drive Surveillance Grade: Never use normal desktop computer hard drives in a DVR/NVR. Always insist on Western Digital Purple or Seagate SkyHawk surveillance hard drives built for 24/7 continuous writing.',
      '4. Concealed Wiring: Exposed camera wires can be easily cut by burglars. Expert Technologies uses heavy-duty ISI PVC conduit pipes to hide all power and data cables.'
    ],
    keyTakeaways: [
      'Choose ColorVu cameras for full-color night vision recording.',
      'Insist on Surveillance-grade hard drives (WD Purple / SkyHawk).',
      'Use concealed conduit piping to protect camera cables.',
      'Verify remote mobile view configuration on your phone before final payment.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'why-solar-panel-cleaning-is-crucial-in-aurangabad',
    title: 'Why Dust Drops Solar Generation by 25% in Chhatrapati Sambhajinagar & How to Clean Panels',
    summary: 'Dust, industrial emissions, and bird droppings severely drop solar rooftop efficiency. Discover the best solar panel cleaning schedule, soft water washing tips, and AMC solutions.',
    category: 'Maintenance & AMC',
    author: 'Solar AMC Supervisor',
    publishDate: '02 Feb 2026',
    readTime: '3 min read',
    image: solarImg,
    content: [
      'Chhatrapati Sambhajinagar experiences dry dusty months and industrial dust from nearby MIDC zones like Waluj, Shendra, and Chikalthana.',
      'When fine dust settles on your solar glass panels, it blocks sunlight from reaching the silicon solar cells underneath. Studies show that uncleaned solar panels lose up to 18% to 25% of their daily energy output!',
      'Best Cleaning Practices: 1. Always wash solar panels early morning or late evening when glass is cool to prevent thermal shock cracking. 2. Use soft water and microfiber wipers — never use hard borewell water that leaves white calcium spots.',
      'Opt for an Annual Maintenance Contract (AMC) with Expert Technologies for hassle-free soft water solar panel de-dusting and inverter health audits.'
    ],
    keyTakeaways: [
      'Dust layer reduces solar power output by 15% to 25%.',
      'Clean solar panels every 15-20 days during dry seasons.',
      'Avoid hard water to prevent permanent white scale stains on panel glass.',
      'Our Solar AMC keeps your energy yield at 100% year-round.'
    ]
  },
  {
    id: 'blog-4',
    slug: 'cctv-amc-vs-breakdown-repairs-which-is-better',
    title: 'CCTV AMC vs. On-Call Repairs: Which is Better for Businesses & Apartment Societies?',
    summary: 'Compare the cost and security risks of Annual Maintenance Contracts (AMC) versus calling technicians only after cameras break down.',
    category: 'CCTV & Security',
    author: 'Security Maintenance Lead',
    publishDate: '15 Dec 2025',
    readTime: '4 min read',
    image: cctvImg,
    content: [
      'Many housing societies and shop owners in Chhatrapati Sambhajinagar only check their CCTV DVR when a theft or dispute happens — only to discover that the hard drive stopped recording 2 months ago!',
      'Why Breakdown Repairs Fail: Calling a technician on-demand often results in delayed response times, high per-visit fees, and lost evidence during critical moments.',
      'Why AMC is Superior: An Annual Maintenance Contract provides quarterly health audits, automated hard drive recording checks, free wire/connector replacements, and emergency 6-hour breakdown dispatch.',
      'Expert Technologies offers economical CCTV AMC packages starting at just ₹2,499/year in Chhatrapati Sambhajinagar.'
    ],
    keyTakeaways: [
      'Prevent missed recordings during theft or property damage incidents.',
      'Quarterly lens cleaning & hard disk health checks included.',
      'Guaranteed emergency technician response time under 6 hours.',
      'Predictable annual maintenance budget with zero hidden visit charges.'
    ]
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where is Expert Technologies located in Chhatrapati Sambhajinagar?',
    answer: 'Our main office is at Plot 45, Garkheda Parisar, Chhatrapati Sambhajinagar (Aurangabad) - 431001, Maharashtra. We serve all areas including CIDCO, Beed Bypass, Waluj MIDC, Shendra, Chikalthana, Jalna Road, and Paithan Road.',
    category: 'General & Location'
  },
  {
    id: 'faq-2',
    question: 'How much does a 3 kW Rooftop Solar system cost in Chhatrapati Sambhajinagar?',
    answer: 'A standard 3 kW On-Grid residential solar rooftop system costs approx. ₹1,35,000 to ₹1,50,000. Under the PM Surya Ghar Muft Bijli Yojana, you get a direct government subsidy of ₹78,000, bringing your net effective investment down to around ₹60,000 - ₹70,000 with a payback period under 3 years.',
    category: 'Solar'
  },
  {
    id: 'faq-3',
    question: 'What CCTV camera package do you recommend for a retail shop or showroom?',
    answer: 'We recommend a 4-Camera or 8-Camera Hikvision / CP Plus 4K IP or ColorVu Full-Color night vision package with a 1TB/2TB WD Purple surveillance hard disk, heavy PVC conduit cabling, UPS power backup, and remote smartphone app configuration.',
    category: 'CCTV'
  },
  {
    id: 'faq-4',
    question: 'Do you offer free site surveys before installation?',
    answer: 'Yes! We provide 100% Free On-Site Engineering Surveys across Chhatrapati Sambhajinagar. Our engineer visits your home, shop, or factory to measure roof shadow, assess CCTV angle coverage, and provide an exact quotation with ROI calculation.',
    category: 'General & Location'
  },
  {
    id: 'faq-5',
    question: 'What is covered under your CCTV & Solar AMC maintenance contracts?',
    answer: 'Our AMC includes regular solar panel soft-water washing, inverter calibration, CCTV camera lens cleaning, recording hard drive diagnostics, wire/connector replacements, and priority 4-8 hour emergency site visit visits.',
    category: 'AMC & Support'
  },
  {
    id: 'faq-6',
    question: 'How long does a 4-camera CCTV or 3kW solar installation take?',
    answer: 'A standard 4-8 camera CCTV installation takes 1 working day. A residential 3kW to 5kW solar rooftop installation takes 2 to 3 days for structural fabrication and panel mounting.',
    category: 'General & Location'
  },
  {
    id: 'faq-7',
    question: 'Can solar panels withstand heavy rain, wind, and hailstorms?',
    answer: 'Yes! We use hot-dip galvanized steel mounting structures engineered to withstand wind speeds up to 140 km/h. The solar panels feature toughened anti-reflective tempered glass certified for heavy rain and hail impact.',
    category: 'Solar'
  },
  {
    id: 'faq-8',
    question: 'Do you also install Biometric Attendance and Video Door Phones?',
    answer: 'Yes! Besides Solar and CCTV, Expert Technologies supplies and installs Biometric Fingerprint/Face ID Attendance machines, Electromagnetic door locks, Structured LAN networking cabling, and Video Door Phones (VDP).',
    category: 'CCTV'
  }
];

export const INSTALLATION_STEPS = [
  {
    step: '01',
    title: 'Free On-Site Survey & Inspection',
    desc: 'Our certified engineer visits your location in Chhatrapati Sambhajinagar to analyze roof shadow/CCTV angles, load requirements, and cable routes.',
    iconName: 'MapPin'
  },
  {
    step: '02',
    title: 'Custom Engineering & Proposal',
    desc: 'We prepare a transparent 3D solar structure layout or camera position map with exact pricing, Tier-1 brand options, and ROI calculation.',
    iconName: 'FileText'
  },
  {
    step: '03',
    title: 'Professional Installation & Wiring',
    desc: 'Experienced technicians execute neat concealed conduit cabling, structural anchorage, surge protection, and electrical safety connections.',
    iconName: 'CheckCircle2'
  },
  {
    step: '04',
    title: 'Net-Metering / App Testing & AMC',
    desc: 'We configure mobile apps for live tracking, assist with MSEDCL solar net-metering approvals, and provide handholding & AMC support.',
    iconName: 'ShieldCheck'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'quality-products',
    title: 'Tier-1 Certified Products',
    desc: 'We strictly source MNRE-approved solar panels (ALMM listed) and premium CCTV brands (Hikvision, Dahua, CP Plus) with genuine manufacturer warranties.',
    iconName: 'Award',
    highlight: 'MNRE & ALMM Approved'
  },
  {
    id: 'professional-installation',
    title: 'Certified Local Engineers',
    desc: 'Our skilled technicians in Chhatrapati Sambhajinagar follow safety codes, perform neat conduit wiring, heavy structural anchorage, and rigorous load testing.',
    iconName: 'UserCheck',
    highlight: '8+ Years Local Expertise'
  },
  {
    id: 'affordable-pricing',
    title: 'Transparent Pricing & Subsidy',
    desc: 'No hidden charges. Complete assistance in claiming up to ₹78,000 PM Surya Ghar solar subsidy with fast ROI payback in 3 years.',
    iconName: 'DollarSign',
    highlight: 'Max Subsidy Savings'
  },
  {
    id: 'trusted-service',
    title: '650+ Satisfied Clients',
    desc: 'Over 650+ residential, commercial, and industrial installations across Chhatrapati Sambhajinagar with a 4.9/5 star Google customer rating.',
    iconName: 'Shield',
    highlight: '4.9 Star Google Rating'
  },
  {
    id: 'after-sales-support',
    title: 'Quick Local AMC Support',
    desc: 'Dedicated technical support team ready to assist with remote mobile app setup, solar panel cleaning, CCTV repair visits, and AMC services.',
    iconName: 'Headphones',
    highlight: 'Under 6 Hour Response'
  }
];

export const PROJECTS_SHOWCASE: ProjectItem[] = [
  {
    id: 'project-1',
    title: '10 kW Residential On-Grid Solar Rooftop',
    clientType: 'Home',
    category: 'Solar System',
    specs: '20x Waaree 540W Mono PERC Panels + Solis 3-Phase Inverter + Net Metering',
    location: 'Beed Bypass Road, Chhatrapati Sambhajinagar',
    image: solarImg,
    completionYear: '2026'
  },
  {
    id: 'project-2',
    title: '16 Camera 4K IP Surveillance Network',
    clientType: 'Office',
    category: 'CCTV Security',
    specs: 'Hikvision 4K Dome/Bullet IP Cameras + 16-Channel NVR + Smart App',
    location: 'CIDCO Town Centre, Chhatrapati Sambhajinagar',
    image: cctvImg,
    completionYear: '2026'
  },
  {
    id: 'project-3',
    title: '25 kW Commercial Solar + 24 Cam IP Security',
    clientType: 'Industry',
    category: 'Solar + CCTV Combo',
    specs: '25kW Heavy Solar Plant + Perimeter AI Thermal CCTV + Concealed Wiring',
    location: 'Waluj MIDC Industrial Area, Chhatrapati Sambhajinagar',
    image: solarImg,
    completionYear: '2025'
  },
  {
    id: 'project-4',
    title: 'Campus-Wide CCTV & Biometric Attendance',
    clientType: 'School',
    category: 'Networking & Biometric',
    specs: '32-Camera HD CCTV Network + eSSL Face ID Biometric Door System',
    location: 'Paithan Road, Chhatrapati Sambhajinagar',
    image: cctvImg,
    completionYear: '2025'
  },
  {
    id: 'project-5',
    title: '5 kW Rooftop Solar + 8 Cam Security System',
    clientType: 'Shop',
    category: 'Solar + CCTV Combo',
    specs: '5kW Rooftop Power Plant + 8-Cam 24/7 ColorVu Night Vision CCTV',
    location: 'Jalna Road Market, Chhatrapati Sambhajinagar',
    image: solarImg,
    completionYear: '2026'
  }
];
