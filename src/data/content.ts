import { Category, Product, ManufacturingStep, GalleryItem, ValuePillar } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'tote-bags',
    name: 'Tote Bags',
    tagline: 'Stylish & Spacious • Perfect for Office, Travel & Daily Living',
    description: 'Generously proportioned with strong strap attachments, reinforced base construction, and spacious interior layout to effortlessly carry laptops, documents, and daily essentials.',
    image: '/images/products/tote-tan.jpg',
    features: ['Spacious Main Compartment', 'Reinforced Strap Attachments', 'Available in Cognac Tan & Jet Black']
  },
  {
    id: 'handbags',
    name: 'Quilted Handbags',
    tagline: 'Elegance in Every Step • Signature Diamond Quilted Finish',
    description: 'Precision diamond-quilted styling crafted from premium PU leather with quad gold rivets, rolled double handles, and spacious multi-compartment interior.',
    image: '/images/products/quilted-mauve.jpg',
    features: ['Intricate Diamond Quilted Body', 'Dual Sturdy Rolled Handles', 'Rear Quick-Access Zip Pocket']
  },
  {
    id: 'shoulder-bags',
    name: 'Fancy Dual-Carry Bags',
    tagline: 'Fashion Meets Function • Handbag & Shoulder Versatility',
    description: 'A refined silhouette equipped with dual rolled top handles and a detachable adjustable shoulder strap for seamless transitions between formal meetings and casual outings.',
    image: '/images/products/satchel-mauve.jpg',
    features: ['Detachable Long Shoulder Strap', 'Gilded Metal Brand Emblem', 'Triple-Chamber Interior Organization']
  },
  {
    id: 'fashion-bags',
    name: 'Quilted Black Edition',
    tagline: 'Timeless Monochrome with High-Polish Gold Hardware',
    description: 'Structured silhouette combining scratch-resistant diamond quilting with champagne gold accents, designed for modern women seeking sophisticated poise.',
    image: '/images/products/quilted-black.jpg',
    features: ['High-Tensile Diamond Stitching', 'Quad Gold Rivet Accents', 'Scratch & Spill Resistant PU Leather']
  },
  {
    id: 'everyday-bags',
    name: 'Everyday Multi-Compartment',
    tagline: 'Engineered for Routine • Triple Organized Chambers',
    description: 'Thoughtfully designed with 3 interior compartments, central zip divider, and exterior zipper for smart, clutter-free daily carry.',
    image: '/images/products/quilted-multiangle.jpg',
    features: ['Triple Compartment Partitioning', 'Exterior Fast-Access Phone Zipper', '360° Swivel Metal Clasps']
  },
  {
    id: 'crossbody-bags',
    name: 'Crossbody & Satchels',
    tagline: 'Hands-Free Luxury for Dynamic Lifestyles',
    description: 'Sleek, lightweight designs featuring adjustable straps, secure zipper compartments, and balanced weight distribution for long hours of comfortable wear.',
    image: '/images/products/satchel-black.jpg',
    features: ['Adjustable Strap with Metal Buckle', 'Lightweight Construction', 'Heavy-Duty Stitching']
  },
  {
    id: 'casual-bags',
    name: 'Executive Black Totes',
    tagline: 'Minimalist Stance with Maximum Utility',
    description: 'Clean-cut contemporary tote featuring a sleek gold bar accent, deep storage capacity, and water-resistant wipe-clean PU leather finish.',
    image: '/images/products/tote-black.jpg',
    features: ['Deep Main Storage Volume', 'Dual Comfortable Shoulder Straps', 'Metallic Gold Bar Accent']
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'executive-tote-tan',
    name: 'Executive Tote — Cognac Tan',
    category: 'Tote Bags',
    tagline: 'Stylish & Spacious • Perfect for Office, Travel & Daily Living',
    description: 'A hallmark of everyday elegance, this tote bag is crafted from premium durable PU leather in a rich cognac tan tone. Featuring dual reinforced shoulder straps, a central metallic gold emblem bar, and an expansive interior that comfortably fits laptops, notebooks, and work essentials.',
    image: '/images/products/tote-tan.jpg',
    details: {
      material: 'High-Grade Durable & Long-Lasting PU Leather',
      hardware: 'Polished Metallic Gold Bar Clasp & Rivet Anchors',
      lining: 'Spacious Interior with Fabric Partitioning',
      dimensions: '39 cm (W) × 30 cm (H) × 13 cm (D)',
      features: [
        'Spacious Main Compartment for Laptop & Work Essentials',
        'Strong Strap Attachment Engineered for Daily Load',
        'Lightweight & Comfortable Ergonomic Shoulder Drop',
        'Perfect for Office, Travel & Everyday Commute'
      ]
    }
  },
  {
    id: 'executive-tote-black',
    name: 'Executive Tote — Jet Black',
    category: 'Tote Bags',
    tagline: 'Classy Minimalist Silhouette with High-Capacity Interior',
    description: 'Rendered in deep jet black with a refined matte luster and warm gold emblem bar. The reinforced flat bottom maintains structure while the wide-aperture top zipper allows instant access to all your essentials.',
    image: '/images/products/tote-black.jpg',
    details: {
      material: 'Scratch-Resistant Wipe-Clean PU Leather',
      hardware: 'Gilded Metallic Center Accent & Reinforced Eyelets',
      lining: 'Tear-Resistant Lined Interior with Slip Pockets',
      dimensions: '39 cm (W) × 30 cm (H) × 13 cm (D)',
      features: [
        'Expansive Storage for Tablet, Makeup Pouch & Planner',
        'Durable Double-Stitched Shoulder Straps',
        'Structured Flat Base that Stands Upright',
        'Versatile Styling for Corporate & Casual Environments'
      ]
    }
  },
  {
    id: 'quilted-ladies-mauve',
    name: 'Quilted Ladies Handbag — Dusty Rose',
    category: 'Handbags',
    tagline: 'Elegance in Every Step • Signature Diamond Quilted Finish',
    description: 'An exquisite ladies handbag featuring intricate diamond quilt embroidery on premium PU leather. Equipped with sturdy double handles secured with quad gold rivets, a prominent gold metal logo plate, and a multi-compartment interior for office, college, and travel.',
    image: '/images/products/quilted-mauve.jpg',
    details: {
      material: 'Premium Quality Diamond-Quilted PU Leather',
      hardware: 'Bespoke Gold Metal Logo Plaque & 8 Anchor Rivets',
      lining: 'Triple Compartment Fabric Lining with Central Zip',
      dimensions: '30 cm (W) × 24 cm (H) × 12 cm (D)',
      features: [
        'Intricate Diamond Quilted Texture on Front & Back',
        'Sturdy Rolled Double Handles with Quad Rivet Mounts',
        'Rear External Zipper for Fast Phone Retrieval',
        'Ideal for Office, College, Shopping & Travel'
      ]
    }
  },
  {
    id: 'quilted-ladies-black',
    name: 'Quilted Luxe Handbag — Midnight Black',
    category: 'Fashion Bags',
    tagline: 'Timeless Monochrome Poise with Champagne Gold Accents',
    description: 'Sophisticated black diamond quilting complemented by gleaming gold hardware. The structured silhouette and balanced proportions make it an indispensable accessory for formal galas and professional boardrooms alike.',
    image: '/images/products/quilted-black.jpg',
    details: {
      material: 'Ultra-Durable PU Leather with Deep Diamond Quilting',
      hardware: 'High-Polish Gold Logo Bar & Handle Connection Rings',
      lining: 'Triple-Partition Microfiber with Center Zip Chamber',
      dimensions: '30 cm (W) × 24 cm (H) × 12 cm (D)',
      features: [
        'Scratch & Spill Resistant Quilted Surface',
        'Concealed Side D-Rings for Optional Long Strap',
        'Double-Reinforced Hand Straps for Long Durability',
        'High-End Fashion Aesthetic for Every Occasion'
      ]
    }
  },
  {
    id: 'quilted-multiangle-edition',
    name: 'Quilted Handbag — 360° & Interior Architecture',
    category: 'Everyday Bags',
    tagline: 'Triple-Compartment Engineering & Multi-Angle Craft',
    description: 'An in-depth showcase of our signature quilted handbag construction: revealing the triple-chamber partitioned interior with smooth-glide center zipper, exterior back zip pocket, and adjustable detachable shoulder strap with 360° swivel clasps.',
    image: '/images/products/quilted-multiangle.jpg',
    details: {
      material: 'Multi-Layer Structured PU Leather',
      hardware: 'Smooth Metal Zippers, Gold Buckle & Swivel Hooks',
      lining: 'Triple-Chamber Lined Interior with Zip Partition',
      dimensions: '30 cm (W) × 24 cm (H) × 12 cm (D)',
      features: [
        'Triple-Partitioned Interior for Impeccable Organization',
        'Rear Quick-Access Zip Pocket for Phone or Keys',
        'Adjustable Crossbody Strap with Heavy-Duty Swivel Clips',
        'Lightweight Core for All-Day Carrying Comfort'
      ]
    }
  },
  {
    id: 'fancy-handbag-mauve',
    name: 'Fancy Dual-Carry Handbag — Dusty Rose',
    category: 'Shoulder Bags',
    tagline: 'Fashion Meets Function • Everyday Versatility',
    description: 'Sleek smooth PU leather with vertical seam tailoring, comfortable top handles with gold rivets, and a detachable long shoulder strap. Seamlessly transitions from an elegant handbag to a hands-free shoulder bag.',
    image: '/images/products/satchel-mauve.jpg',
    details: {
      material: 'Supple Smooth-Finish PU Leather',
      hardware: 'Gilded Swivel Strap Clasps & Metal Logo Badge',
      lining: 'Deep Multi-Compartment Storage with Zippers',
      dimensions: '31 cm (W) × 25 cm (H) × 11 cm (D)',
      features: [
        '2-in-1 Dual Carry: Hand-Held or Detachable Crossbody',
        'Strong Strap Hook & Riveted Handle Anchors',
        'Spacious Internal Volume for Daily Essentials',
        'Lightweight Construction with Premium Soft Handfeel'
      ]
    }
  },
  {
    id: 'fancy-handbag-black',
    name: 'Fancy Dual-Carry Handbag — Midnight Black',
    category: 'Casual Bags',
    tagline: 'Trendy • Classy • Versatile for Every Occasion',
    description: 'Minimalist elegance in midnight black smooth PU leather. Featuring dual top rolled handles, quad decorative gold studs, full-length detachable strap, and a triple-chamber interior layout designed for the modern woman on the move.',
    image: '/images/products/satchel-black.jpg',
    details: {
      material: 'Premium Quality Water-Resistant PU Leather',
      hardware: 'Gold Metallic Logo Plaque, Rivets & Swivel Hooks',
      lining: 'Spacious Multi-Compartment Interior',
      dimensions: '31 cm (W) × 25 cm (H) × 11 cm (D)',
      features: [
        'Durable Stitching & Precision Edge Finishing',
        'Detachable Long Strap for Shoulder or Crossbody Wear',
        'Triple Divided Compartments with Middle Zip Pocket',
        'Perfect for Office, Shopping, Dining & Gifting'
      ]
    }
  }
];

export const MANUFACTURING_STEPS: ManufacturingStep[] = [
  {
    number: '01',
    title: 'Design & Silhouette Engineering',
    subtitle: 'Conceiving Proportions, Handle Anchors & Compartments',
    description: 'Every handbag model begins with precise structural blueprints. We engineer the balance between handle drop, internal compartment dividers, and strap load-bearing points before pattern cutting begins.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop',
    highlights: [
      'Ergonomic strap attachment and weight distribution analysis',
      'Structural pattern drafting for tote, quilted, and satchel silhouettes',
      'Design of multi-compartment dividers and zipper placement'
    ]
  },
  {
    number: '02',
    title: 'Material Selection & PU Leather Grading',
    subtitle: 'Inspecting Grain, Quilting Density & Metal Hardware',
    description: 'We curate premium PU leather hides with supple hand-feel and durable tear resistance. Every batch is verified for uniform grain, consistent diamond quilting embroidery, and corrosion-proof gold metal hardware.',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1400&auto=format&fit=crop',
    highlights: [
      'High-grade PU leather testing for scuff resistance and flex fatigue',
      'Anti-tarnish electroplated gold logos, rivets, and swivel hooks',
      'High-density lining fabrics and smooth-gliding nylon zippers'
    ]
  },
  {
    number: '03',
    title: 'Production, Quilting & Assembly',
    subtitle: 'Precision Stitching, Handle Riveting & Gusset Bonding',
    description: 'Skilled operators perform diamond quilt stitching, handle rivet fixation, and perimeter edge-creasing. Double-needle stitching is applied to stress points to guarantee lasting resilience under daily use.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1400&auto=format&fit=crop',
    highlights: [
      'Computer-guided diamond quilting for symmetrical stitch cadence',
      'Quad-point heavy rivet insertion for maximum handle load capacity',
      'Reinforced internal lining assembly and zipper taping'
    ]
  },
  {
    number: '04',
    title: 'Finishing & Multi-Point Quality Inspection',
    subtitle: 'White-Glove Check, Zipper Glide & Packaging',
    description: 'Before clearing our manufacturing floor, each handbag is inspected for stitch symmetry, hardware polish, interior cleanliness, and zipper smoothness, followed by protective dust cover preparation.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop',
    highlights: [
      '100% white-glove inspection for seam alignment and edge neatness',
      'Multi-cycle zipper glide and swivel clasp tension checks',
      'Shape preservation padding and export-grade protective packing'
    ]
  }
];

export const WHY_US_PILLARS: ValuePillar[] = [
  {
    title: 'Thoughtful Designs',
    subtitle: 'Form that Serves Daily Living',
    description: 'Handbags designed with attention to style, practicality, and modern fashion trends — from spacious office totes to elegant quilted evening companions.',
    icon: 'Compass'
  },
  {
    title: 'Quality-Focused Manufacturing',
    subtitle: 'Standards of Uncompromising Finesse',
    description: 'A disciplined focus on product finishing, high-grade PU leather selection, reinforced rivets, and rigorous manufacturing standards.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Style & Functionality',
    subtitle: 'The Perfect Equilibrium',
    description: 'Creating handbags that balance runway fashion, multi-compartment usability, and everyday convenience for the multifaceted modern woman.',
    icon: 'Sparkles'
  },
  {
    title: 'Attention to Detail',
    subtitle: 'Excellence in Every Millimeter',
    description: 'A relentless focus on diamond quilt precision, handle anchor strength, gold metal accents, and internal organization throughout production.',
    icon: 'Eye'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Executive Tote in Cognac Tan',
    category: 'lifestyle',
    image: '/images/products/tote-tan.jpg',
    caption: 'Spacious main compartment with strong strap attachment and metallic gold emblem bar for office and travel.'
  },
  {
    id: 'gal-2',
    title: 'Diamond Quilted Ladies Handbag',
    category: 'detail',
    image: '/images/products/quilted-mauve.jpg',
    caption: 'Precision diamond quilted texture with quad gold rivet handle anchors in soft dusty rose PU leather.'
  },
  {
    id: 'gal-3',
    title: 'Triple-Compartment & 360° Construction',
    category: 'craft',
    image: '/images/products/quilted-multiangle.jpg',
    caption: 'Multi-view inspection highlighting interior zip partitions, rear exterior pocket, and swivel hook attachments.'
  },
  {
    id: 'gal-4',
    title: 'Midnight Black Quilted Edition',
    category: 'hardware',
    image: '/images/products/quilted-black.jpg',
    caption: 'Studio presentation of the black diamond-quilted handbag with gold cast logo plate and structural footing.'
  },
  {
    id: 'gal-5',
    title: 'Fancy Dual-Carry in Dusty Rose',
    category: 'lifestyle',
    image: '/images/products/satchel-mauve.jpg',
    caption: 'Smooth finish with vertical seam accents, top rolled handles, and detachable long shoulder strap.'
  },
  {
    id: 'gal-6',
    title: 'Executive Tote in Jet Black',
    category: 'craft',
    image: '/images/products/tote-black.jpg',
    caption: 'Classic corporate tote with deep interior volume and double-stitched reinforced shoulder straps.'
  },
  {
    id: 'gal-7',
    title: 'Versatile Black Handbag with Detachable Strap',
    category: 'detail',
    image: '/images/products/satchel-black.jpg',
    caption: 'Triple compartment layout with gold metal logo, strong handles, and all-occasion styling.'
  },
  {
    id: 'gal-8',
    title: 'Sartorial Companion in Motion',
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
    caption: 'Byte Bridges India handbags tailored as an extension of personality, confidence, and everyday elegance.'
  }
];

export const COMPANY_INFO = {
  name: 'BYTE BRIDGES INDIA',
  tagline: 'Women’s Handbag Manufacturing & Artisanal Craftsmanship',
  description: 'Byte Bridges India is focused on designing and manufacturing stylish women’s handbags that combine contemporary fashion, functionality, and thoughtful craftsmanship. We partner with fashion brands, retail chains, and private labels for premium handbag design and manufacturing.',
  addressLine1: 'House No. 451, BLK-B, Inder Enclave, Phase-2',
  addressLine2: 'North West Delhi, New Delhi - 110086, Delhi, India',
  address: 'House No. 451, BLK-B, Inder Enclave, Phase-2, North West Delhi, New Delhi - 110086, Delhi, India',
  email: 'mohdabrar.saw@gmail.com',
  phone: '+91 8745003803',
  phoneRaw: '8745003803',
  workingHours: 'Monday – Saturday: 9:30 AM – 7:00 PM IST'
};
