export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Cafe' | 'Freelancer' | 'Tech Startup' | 'E-commerce';
  image: string;
  description: string;
}

export interface FormData {
  businessName: string;
  businessType: string;
  designStyle: 'Minimal' | 'Modern' | 'Classic' | 'Futuristic';
  primaryColor: string;
  contactEmail: string;
  additionalInfo: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}
