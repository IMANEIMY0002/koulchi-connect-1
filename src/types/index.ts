export type Language = 'fr' | 'ar' | 'en';

export interface ContentSections {
  nav: { services: string; features: string; providerCta: string; contact: string; download: string };
  hero: { title: string; subtitle: string; ctaUser: string; ctaProvider: string; trustedBy: string ; common: {
      guaranteedService: string,
      verifiedPros:string}};
  howItWorks: { title: string; steps: { title: string; desc: string }[] };
  services: { title: string; subtitle: string; items: { name: string; desc: string }[] };
  features: { title: string; subtitle: string;  items: { title: string; desc: string }[];  badge?: string;};
  provider: { 
    title: string; 
    desc: string; 
    cta: string;
    badge: string;
    benefits: {
      income: { title: string; desc: string };
      clients: { title: string; desc: string };
      management: { title: string; desc: string };
    };
    stats: {
      title: string;
      providers: string;
      satisfied: string;
      cities: string;
    };
   
  };
  footer: { 
    about: string; 
    links: string; 
    contact: string; 
    tagline: string;
    followUs: string;
    home: string;
    joinUs: string;
    trademark: string;
    location: string;
  };
   gallery: {
    title: string;
    subtitle: string;
    images: {
      title: string;
      category: string;
      image: string;
    }[];
  };
   contact: { 
    badge: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      success: string;
    };
    info: {
      address: string;
      email: string;
      phone: string;
      hours: string;
    }
  };
}
  
