import { Product, Category } from './types';
import { catalogImages } from './imageCatalog';

export const categories: Category[] = [
  'Accessories & Miscellaneous',
  'Consumables & Chemicals',
  'Device Parts & Tools',
  'Diagnostics',
  'Fixtures & Mats',
  'Measuring Tools',
  'Microscopes & Cameras',
  'Opening & Hand Tools',
  'Power & Cables',
  'Screen Repair',
  'Soldering Equipment'
];

const manualProducts: Product[] = [
  {
    id: "p1",
    name: "S-UEM3PRO Multimeter Tester",
    description: "Professional Multimeter & Testing Unit for advanced diagnostics on mobile motherboards.",
    features: [
      "High precision readings",
      "Multiple testing interfaces",
      "Built-in display",
      "Ideal for motherboard microsoldering diagnostics"
    ],
    price: 245,
    category: "Diagnostics",
    image: "https://www.diyfixtool.com/cdn/shop/files/S-UEM3PRO_1.jpg",
    rating: 4.8,
    reviewsCount: 124,
    inStock: true,
    brand: "QianLi"
  },
  {
    id: "p2",
    name: "2UUL FD40 Screwdriver Set",
    description: "Precision screwdriver set engineered for daily mobile repair operations.",
    features: [
      "Magnetic bits",
      "Aircraft-grade aluminum handle",
      "Durable S2 alloy steel bits",
      "Compact storage"
    ],
    price: 85,
    category: "Screwdriver Sets",
    image: "https://www.diyfixtool.com/cdn/shop/files/2UULFD40_1.png",
    rating: 4.6,
    reviewsCount: 89,
    inStock: true,
    brand: "2UUL"
  },
  {
    id: "p3",
    name: "MobiTool STD-15Ultra Repair Kit",
    description: "Comprehensive starter repair kit including precision standard tools for multiple device repairs.",
    features: [
      "Wide range of standard bits",
      "Spudgers and opening picks",
      "Suction cup and tweezers",
      "Premium storage box"
    ],
    price: 450,
    category: "Complete Kits",
    image: "https://www.diyfixtool.com/cdn/shop/files/MobiToolSTD-15Ultra_1.jpg",
    rating: 4.9,
    reviewsCount: 205,
    inStock: true,
    brand: "MobiTool"
  },
  {
    id: "p4",
    name: "JBC CD-2SH Precision Soldering Station",
    description: "Industry-leading soldering station with rapid heating and unmatched precision for micro-soldering.",
    features: [
      "Exclusive JBC heating system",
      "Sleep and hibernation modes",
      "Fast tip replacement",
      "Incredible thermal recovery"
    ],
    price: 2200,
    category: "Soldering Equipment",
    image: "https://www.diyfixtool.com/cdn/shop/files/JBC_CD-2SH.png",
    rating: 5.0,
    reviewsCount: 312,
    inStock: true,
    brand: "JBC"
  },
  {
    id: "p5",
    name: "UV Curing Lamp (Double Light)",
    description: "Professional UV Curing light for rapid hardening of OCA/LOCA adhesives.",
    features: [
      "Dual LED technology",
      "Fast curing speed",
      "Even light distribution",
      "Safe and durable"
    ],
    price: 120,
    category: "Lighting & Optics",
    image: "https://www.diyfixtool.com/cdn/shop/files/UVCuringLamp_2.png",
    rating: 4.7,
    reviewsCount: 140,
    inStock: true,
    brand: "DIYFix"
  },
  {
    id: "p6",
    name: "Mechanic 2 Solder Paste",
    description: "High-quality low melting point solder paste mechanics use for advanced logic board repairs.",
    features: [
      "Low melting point",
      "Excellent wettability",
      "Minimal residue",
      "Perfect for BGA reballing"
    ],
    price: 25,
    category: "Adhesives & Tapes",
    image: "https://www.diyfixtool.com/cdn/shop/files/Mechanic2_1.jpg",
    rating: 4.8,
    reviewsCount: 512,
    inStock: true,
    brand: "Mechanic"
  },
  {
    id: "p7",
    name: "FNIRSI HS-03 Smart Soldering Iron",
    description: "Portable smart soldering iron with OLED display and temperature control.",
    features: [
      "OLED display",
      "Precise temperature control",
      "Fast heating",
      "Compact and portable"
    ],
    price: 195,
    category: "Soldering Equipment",
    image: "https://www.diyfixtool.com/cdn/shop/files/FNIRSIHS-03_1.png",
    rating: 4.6,
    reviewsCount: 92,
    inStock: true,
    brand: "FNIRSI"
  },
  {
    id: "p8",
    name: "CH898 Hot Air Rework Station",
    description: "Reliable hot air station for desoldering SMD components quickly and safely.",
    features: [
      "Rapid heat-up",
      "Adjustable airflow",
      "Auto cool-down feature",
      "Includes multiple nozzles"
    ],
    price: 450,
    category: "Soldering Equipment",
    image: "https://www.diyfixtool.com/cdn/shop/files/CH898_1.png",
    rating: 4.5,
    reviewsCount: 156,
    inStock: true,
    brand: "CH"
  },
  {
    id: "p9",
    name: "Qianli Lattice Precision Calibrator",
    description: "Advanced precision calibrator for logic board Face ID and dot matrix repairs.",
    features: [
      "Extremely precise calibration",
      "Compatible with multiple models",
      "Sturdy metal build",
      "Professional grade tool"
    ],
    price: 320,
    category: "Precision Tools",
    image: "https://www.diyfixtool.com/cdn/shop/files/qianli-toolplus-lattice-face-precision-calibrator-for-iphone-x-11pro-max-china-phonefix-1.jpg",
    rating: 4.8,
    reviewsCount: 45,
    inStock: true,
    brand: "QianLi"
  },
  {
    id: "p10",
    name: "iCopy 4 in 1 Face/Battery Set",
    description: "Essential programmer set specifically for Face ID and battery programming operations.",
    features: [
      "4-in-1 capability",
      "Battery health editing",
      "True Tone restoration",
      "Face ID repair support"
    ],
    price: 299,
    category: "Programmers",
    image: "https://www.diyfixtool.com/cdn/shop/files/icopy_4_in_1_face_battery_set.jpg",
    rating: 4.9,
    reviewsCount: 112,
    inStock: true,
    brand: "iCopy"
  },
  {
    id: "p11",
    name: "SOPTOP Microscope",
    description: "Binocular microscope tailored for micro-soldering with wide-field eyepieces.",
    features: [
      "7x-45x continuous zoom",
      "Wide-field eyepieces",
      "Adjustable LED light",
      "Stable heavy pillar stand"
    ],
    price: 1850,
    category: "Microscopes",
    image: "https://www.diyfixtool.com/cdn/shop/files/SOPTOP_1.jpg",
    rating: 5.0,
    reviewsCount: 68,
    inStock: true,
    brand: "SOPTOP"
  },
  {
    id: "p12",
    name: "33V 10A DC Power Supply",
    description: "Stable and adjustable bench power supply for short detection and booting up motherboards.",
    features: [
      "0-33V adjustable voltage",
      "0-10A adjustabe current",
      "Digital display",
      "Overcurrent protection"
    ],
    price: 380,
    category: "Power Supplies",
    image: "https://www.diyfixtool.com/cdn/shop/files/33V10A_1.jpg",
    rating: 4.7,
    reviewsCount: 220,
    inStock: true,
    brand: "Generic"
  },
  {
    id: "p13",
    name: "Mechanic 3 Solder Flux",
    description: "Premium rosin core soldering flux for advanced microsoldering techniques.",
    features: [
      "No-clean necessary",
      "High viscosity",
      "Perfect for BGA and SMD",
      "Minimal smoking"
    ],
    price: 30,
    category: "Soldering Equipment",
    image: "https://www.diyfixtool.com/cdn/shop/files/mechanic3_2.jpg",
    rating: 4.6,
    reviewsCount: 300,
    inStock: true,
    brand: "Mechanic"
  },
  {
    id: "p14",
    name: "G35 Pro Polishing Pen",
    description: "Electric polishing and grinding pen for removing IC glue and precision cutting.",
    features: [
      "Adjustable speeds",
      "Multiple grinding heads included",
      "Rechargeable battery",
      "Low vibration"
    ],
    price: 150,
    category: "Precision Tools",
    image: "https://www.diyfixtool.com/cdn/shop/files/G35ProPolishingPen.jpg",
    rating: 4.8,
    reviewsCount: 95,
    inStock: true,
    brand: "G-Series"
  },
  {
    id: "p15",
    name: "T800 Intelligent Rework Station",
    description: "High-end rework station for complex motherboard component removal and installation.",
    features: [
      "Intelligent temperature tracking",
      "Rapid heating element",
      "Pre-set profiles",
      "Digital calibration"
    ],
    price: 1100,
    category: "Rework Stations",
    image: "https://www.diyfixtool.com/cdn/shop/files/T800-1.jpg",
    rating: 4.9,
    reviewsCount: 42,
    inStock: true,
    brand: "T-Series"
  },
  {
    id: "p16",
    name: "A1706 PCB Stencil",
    description: "Precision BGA reballing stencil for Macbook and laptop motherboards.",
    features: [
      "Laser cut precision",
      "Heat resistant material",
      "Anti-buckling design",
      "Specific for A1706 models"
    ],
    price: 45,
    category: "Precision Tools",
    image: "https://www.diyfixtool.com/cdn/shop/files/A1706.jpg",
    rating: 4.4,
    reviewsCount: 15,
    inStock: true,
    brand: "MobiTool"
  },
  {
    id: "p17",
    name: "P30R Pro Multimeter",
    description: "Advanced multimeter equipped with bluetooth and app integration for smart diagnostics.",
    features: [
      "Bluetooth connectivity",
      "True RMS measurement",
      "Data logging",
      "Smart app integration"
    ],
    price: 280,
    category: "Testing Equipment",
    image: "https://www.diyfixtool.com/cdn/shop/files/P30RPro_2.jpg",
    rating: 4.7,
    reviewsCount: 88,
    inStock: true,
    brand: "P-Pro"
  },
  {
    id: "p18",
    name: "150ml Isopropyl Alcohol Bottle",
    description: "Dispenser bottle suitable for IPA, ideal for keeping your desk clean and safe.",
    features: [
      "Anti-static material",
      "Spill-proof pump",
      "Stainless steel cap",
      "Generous 150ml capacity"
    ],
    price: 25,
    category: "Cleaning Kits",
    image: "https://www.diyfixtool.com/cdn/shop/files/150ml.jpg",
    rating: 4.5,
    reviewsCount: 300,
    inStock: true,
    brand: "DIYFix"
  },
  {
    id: "p19",
    name: "REFOX Silicone Mat",
    description: "Heat-resistant silicone soldering mat with magnetic sections for screw tracking.",
    features: [
      "500°C Heat resistance",
      "Magnetic screw parts",
      "Ruler indicator built-in",
      "Easy to clean"
    ],
    price: 65,
    category: "Accessories",
    image: "https://www.diyfixtool.com/cdn/shop/files/REFOX_7.jpg",
    rating: 4.9,
    reviewsCount: 420,
    inStock: true,
    brand: "REFOX"
  },
  {
    id: "p20",
    name: "2UUL Magnetizing Set",
    description: "Magnetizer and demagnetizer for keeping your bits charged and ready for tiny screws.",
    features: [
      "Instant magnetizing",
      "Safe demagnetizing",
      "Durable shell",
      "Portable design"
    ],
    price: 18,
    category: "Accessories",
    image: "https://www.diyfixtool.com/cdn/shop/files/2UUL_1.jpg",
    rating: 4.8,
    reviewsCount: 150,
    inStock: true,
    brand: "2UUL"
  }
];

const categoryParams: Category[] = [
  'Precision Tools',
  'Accessories',
  'Complete Kits',
  'Testing Equipment',
  'Diagnostics',
  'Lighting & Optics',
  'Soldering Equipment',
  'Microscopes'
];

const generatedProducts: Product[] = catalogImages.map((src, index) => {
  let rawName = src.split('/').pop()?.split('.')[0] || `Tool ${index + 1}`;
  // Remove trailing guids or timestamp patterns often found in these uploads
  rawName = rawName.replace(/_[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i, '');
  
  // Replace underscores and dashes with spaces
  let name = rawName.replace(/[-_]/g, ' ').trim();
  
  // Make words title case
  name = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  name = name.replace(/\s{2,}/g, ' '); // Clean multiple spaces
  
  const cat = categoryParams[index % categoryParams.length];
  
  return {
    id: `gen_${index}`,
    name,
    description: `Professional level ${name} designed for precision electronics and mobile device board-level repair. Extremely durable design.`,
    features: ['High quality build', 'Professional standard', 'Durable design', 'Perfect for BGA and SMD'],
    price: Math.floor((index * 13 + 37) % 350) + 10,
    category: cat,
    image: src,
    rating: parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)),
    reviewsCount: Math.floor(Math.random() * 200) + 5,
    inStock: true,
    brand: "Generic"
  };
});

import { catalogProducts } from './catalogProducts';

export const products: Product[] = [
  ...manualProducts,
  ...catalogProducts
];
