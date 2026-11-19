export interface Category {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  details: {
    material: string;
    hardware: string;
    lining: string;
    dimensions: string;
    features: string[];
  };
}

export interface ManufacturingStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'detail' | 'craft' | 'lifestyle' | 'hardware';
  image: string;
  caption: string;
}

export interface ValuePillar {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}
