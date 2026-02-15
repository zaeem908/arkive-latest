
import { Service, Project, Product, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Custom Pergolas',
    description: 'Bespoke WPC, Timber, and Aluminum structures designed for high-heat durability and architectural elegance.',
    category: 'Construction',
    icon: 'Hammer'
  },
  {
    id: 's2',
    title: 'Carport Structures',
    description: 'High-tensile fabric, polycarbonate, and metal car parking shades with UV protection certification.',
    category: 'Construction',
    icon: 'Car'
  },
  {
    id: 's3',
    title: 'Structural Welding',
    description: 'Precision MIG/TIG welding for gates, fences, and complex skeletal steel structures for industrial use.',
    category: 'Construction',
    icon: 'Flame'
  },
  {
    id: 's4',
    title: 'HVAC & AC Maintenance',
    description: 'Comprehensive cooling solutions: Duct cleaning, coil chemical washing, and preventative gas refilling.',
    category: 'Maintenance',
    icon: 'Wind'
  },
  {
    id: 's5',
    title: 'Plumbing Engineering',
    description: 'Advanced leak detection, water pump overhauling, and smart drainage system installations.',
    category: 'Maintenance',
    icon: 'Droplets'
  },
  {
    id: 's6',
    title: 'Electrical Works',
    description: 'DEWA-compliant electrical panel upgrades, smart home automation, and 24/7 fault finding.',
    category: 'Maintenance',
    icon: 'Zap'
  },
  {
    id: 's7',
    title: 'Glass & Glazing',
    description: 'Frameless glass partitions, shower enclosures, and high-performance thermal window fixing.',
    category: 'Maintenance',
    icon: 'Maximize'
  },
  {
    id: 's8',
    title: 'Painting & Finishing',
    description: 'Interior and exterior premium coatings, epoxy flooring, and architectural decorative wall finishes.',
    category: 'Construction',
    icon: 'Paintbrush'
  },
  {
    id: 's9',
    title: 'Tiling & Masonry',
    description: 'Marble and porcelain floor tiling, interlock pavement, and structural masonry repairs.',
    category: 'Construction',
    icon: 'Grid'
  },
  {
    id: 's10',
    title: 'Landscaping & Irrigation',
    description: 'Modern garden design, automated irrigation systems, and artificial grass installations.',
    category: 'Construction',
    icon: 'Sprout'
  },
  {
    id: 's11',
    title: 'Annual Maintenance (AMC)',
    description: 'Integrated facility management with scheduled quarterly audits for commercial and residential units.',
    category: 'Consultation',
    icon: 'ShieldCheck'
  },
  {
    id: 's12',
    title: 'Emergency Repair',
    description: 'Rapid response technical team for plumbing bursts, AC failures, and structural emergencies.',
    category: 'Emergency',
    icon: 'BellRing'
  }
];

export const PROJECTS: Project[] = [
  { 
    id: 'p1', 
    title: 'The Sky Villa Pergola', 
    category: 'Luxury Residential', 
    imageUrl: 'https://images.unsplash.com/photo-1510563800743-aed236490d08?q=80&w=1600', 
    description: 'A carbon-neutral timber structure with integrated misting systems and smart bioclimatic louvers.' 
  },
  { 
    id: 'p2', 
    title: 'Nexus Logistics Hub', 
    category: 'Industrial Welding', 
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1600', 
    description: 'High-precision structural welding for a 50k sq.ft automated distribution center with seismic reinforcement.' 
  },
  { 
    id: 'p3', 
    title: 'Solar Carport Grid', 
    category: 'Eco-Construction', 
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-fe19a7865821?q=80&w=1600', 
    description: 'Dual-purpose shade structures featuring 400kWh bifacial solar panels and integrated EV charging backbone.' 
  },
  { 
    id: 'p4', 
    title: 'Crystal Point Facade', 
    category: 'Technical Glazing', 
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600', 
    description: 'Self-cleaning thermal-efficient glass facade for a 45-story commercial tower in Dubai Marina.' 
  },
  { 
    id: 'p5', 
    title: 'Marine Decking & Pool', 
    category: 'Leisure Technical', 
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600', 
    description: 'Anti-corrosive WPC decking and advanced filtration overhaul for a private beach club.' 
  },
  { 
    id: 'p6', 
    title: 'Heritage AC Overhaul', 
    category: 'HVAC Engineering', 
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600', 
    description: 'Retrofitting a district cooling system into a 30-year-old architectural landmark without structural damage.' 
  }
];

export const PRODUCTS: Product[] = [
  { 
    id: 'pr1', 
    name: 'Precision Hedge Trimmer', 
    price: 299, 
    image: 'https://images.unsplash.com/photo-1622355526315-7798369408b0?q=80&w=800', 
    category: 'Landscaping', 
    description: 'Industrial grade lithium-ion trimmer for perfect architectural hedges.' 
  },
  { 
    id: 'pr2', 
    name: 'Smart Irrigation Node', 
    price: 149, 
    image: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=800', 
    category: 'Landscaping', 
    description: 'Cloud-connected controller for automated garden hydration management.' 
  },
  { 
    id: 'pr3', 
    name: 'Furniture Restoration Kit', 
    price: 75, 
    image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=800', 
    category: 'Maintenance', 
    description: 'Complete set of oils and tools for high-end wood furniture reassessment.' 
  },
  { 
    id: 'pr4', 
    name: 'Technical Blueprint Audit', 
    price: 199, 
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=800', 
    category: 'Services', 
    description: 'Professional on-site assessment for luxury furniture structural integrity.' 
  },
  { 
    id: 'pr5', 
    name: 'Industrial Wood Sealer', 
    price: 45, 
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800', 
    category: 'Chemicals', 
    description: 'Premium UV protection for outdoor structures.' 
  },
  { 
    id: 'pr6', 
    name: 'Quick-Fix Glass Seal', 
    price: 24, 
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800', 
    category: 'Consumables', 
    description: 'Professional grade sealant for window repairs.' 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', author: 'Alexander Sterling', role: 'Property Manager', content: 'ARKIVE transformed our outdoor space with a precision I haven’t seen elsewhere.', rating: 5 },
  { id: 't2', author: 'Elena Rossi', role: 'Interior Designer', content: 'Collaborating with ARKIVE on technical installations is always a breeze.', rating: 5 }
];
