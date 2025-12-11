// src/constants/content.ts
import { ContentSections } from '@/types';

export const TEXT_CONTENT: Record<'fr' | 'ar' | 'en', ContentSections> = {
  fr: {
    nav: { 
      services: "Services", 
      features: "Avantages", 
      providerCta: "Devenir Prestataire", 
      download: "Télécharger" 
    },
    hero: {
      title: "Des artisans fiables, à portée de main.",
      subtitle: "KoulchiConnect vous connecte instantanément avec les meilleurs professionnels pour tous vos besoins de réparation et d'entretien au Maroc.",
      ctaUser: "Télécharger l'application",
      ctaProvider: "Devenir Prestataire",
      trustedBy: "Faites confiance à nos experts vérifiés",
      common: {
        guaranteedService: "Service Garanti", 
        verifiedPros: "Professionnels Vérifiés", 
      },
    },
    howItWorks: {
      title: "Comment ça marche ?",
      steps: [
        { 
          title: "Sélectionnez un service", 
          desc: "Choisissez parmi une large gamme de services : plomberie, électricité, nettoyage..." 
        },
        { 
          title: "Choisissez un artisan", 
          desc: "Comparez les profils, les avis et les prix des professionnels disponibles." 
        },
        { 
          title: "Réservez instantanément", 
          desc: "Validez votre demande et suivez l'arrivée de votre prestataire en temps réel." 
        },
      ]
    },
    services: {
      title: "Services Disponibles",
      subtitle: "Nous couvrons tous vos besoins domestiques",
      items: [
        { name: "Plomberie", desc: "Fuites, installation sanitaire, débouchage." },
        { name: "Électricité", desc: "Câblage, pannes, installation de luminaires." },
        { name: "Nettoyage", desc: "Nettoyage à domicile, fin de chantier, bureaux." },
        { name: "Peinture", desc: "Peinture intérieure, extérieure et décoration." },
        { name: "Réparation", desc: "Réparations générales et travaux manuels divers." },
        { name: "Montage", desc: "Montage de meubles et équipements domestiques." },
        { name: "Climatisation", desc: "Entretien, réparation et installation de climatiseurs." },
        { name: "Petits travaux", desc: "Accrochage étagères, cadres et petites modifications." },
      ]
    },
    features: {
      badge: "Nos Avantages",
      title: "Pourquoi choisir KoulchiConnect ?",
      subtitle: "Découvrez pourquoi des milliers de Marocains nous font confiance", 
      items: [
        { title: "Artisans vérifiés", desc: "Identité et compétences rigoureusement contrôlées." },
        { title: "Réservation rapide", desc: "Processus simple en 3 étapes pour trouver de l'aide." },
        { title: "Gestion facile", desc: "Suivez toutes vos demandes depuis l'application." },
        { title: "Avis & évaluations", desc: "Consultez les retours authentiques d'autres clients." },
        { title: "Support bilingue", desc: "Assistance disponible en arabe et en français." },
        { title: "Notifications", desc: "Restez informé à chaque étape de votre service." },
      ]
    },
    provider: {
      title: "Vous êtes un professionnel qualifié ?",
      desc: "Rejoignez KoulchiConnect et développez votre activité. Touchez des milliers de clients potentiels sans effort marketing.",
      cta: "Rejoignez KoulchiConnect et développez votre activité",
      badge: "Pour les artisans et professionnels",
      benefits: {
        income: {
          title: "Revenus stables",
          desc: "Un flux régulier de demandes pour un revenu stable et prévisible"
        },
        clients: {
          title: "Nouveaux clients",
          desc: "Accédez à des milliers de clients potentiels dans votre région"
        },
        management: {
          title: "Gestion simplifiée",
          desc: "Gérez vos demandes, planning et avis depuis une seule application"
        }
      },
      stats: {
        title: "Rejoignez notre réseau en pleine croissance",
        providers: "Artisans actifs",
        satisfied: "Clients satisfaits",
        cities: "Villes couvertes"
      },
    },
    footer: {
      about: "Première plateforme marocaine dédiée aux services d'artisans et de maintenance à domicile.",
      links: "Liens rapides",
      contact: "Contact",
      tagline: "La 1ère plateforme de services à domicile",
      followUs: "Suivez-nous",
      home: "Accueil",
      joinUs: "Devenir prestataire",
      location: "Casablanca, Maroc",
      trademark: "Tous droits réservés. KoulchiConnect est une marque déposée."
    },
       gallery: {
      title: "Nos Réalisations",
      subtitle: "Découvrez les projets réalisés par nos artisans qualifiés",
      images: [
        {
          title: "Rénovation Complète",
          category: "Plomberie",
          image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&q=80"
        },
        {
          title: "Installation Électrique",
          category: "Électricité",
          image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80"
        },
        {
          title: "Peinture Moderne",
          category: "Peinture",
          image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80"
        },
        {
          title: "Nettoyage Professionnel",
          category: "Nettoyage",
          image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
        },
      ]
    }
  },

  ar: {
    nav: { 
      services: "الخدمات", 
      features: "المميزات", 
      providerCta: "انضم كمقاول", 
      download: "تحميل التطبيق" 
    },
    hero: {
      title: "حرفيون موثوقون، في متناول يديك.",
      subtitle: "كولشي كونكت يربطك فوراً بأفضل المحترفين لجميع احتياجات الصيانة والإصلاح في المغرب.",
      ctaUser: "تحميل التطبيق",
      ctaProvider: "انضم كمقاول",
      trustedBy: "ثق بخبرائنا الموثقين",
      common: {
        guaranteedService: "خدمة مضمونة",
        verifiedPros: "محترفون موثقون", 
      },
    },
    howItWorks: {
      title: "كيف يعمل التطبيق؟",
      steps: [
        { title: "اختر خدمة", desc: "اختر من بين مجموعة واسعة من الخدمات: السباكة، الكهرباء، التنظيف..." },
        { title: "اختر الحرفي", desc: "قارن الملفات الشخصية، التقييمات والأسعار للمحترفين المتاحين." },
        { title: "احجز فوراً", desc: "أكد طلبك وتابع وصول المقاول في الوقت الفعلي." },
      ]
    },
    services: {
      title: "الخدمات المتوفرة",
      subtitle: "نغطي جميع احتياجات منزلك",
      items: [
        { name: "السباكة", desc: "تسربات، تركيبات صحية، تسليك المجاري." },
        { name: "الكهرباء", desc: "التمديدات، الأعطال، تركيب الإنارة." },
        { name: "التنظيف", desc: "تنظيف المنازل، نهاية الأشغال، المكاتب." },
        { name: "الصباغة", desc: "صباغة داخلية وخارجية وديكور." },
        { name: "الإصلاحات", desc: "إصلاحات عامة وأعمال يدوية متنوعة." },
        { name: "التركيب", desc: "تركيب الأثاث والمعدات المنزلية." },
        { name: "التكييف", desc: "صيانة وإصلاح وتركيب المكيفات." },
        { name: "أعمال صغيرة", desc: "تعليق رفوف، إطارات وتعديلات بسيطة." },
      ]
    },
    features: {
      badge: "مزايا",
      subtitle: "اكتشف لماذا يثق بنا آلاف المغاربة", 
      title: "لماذا تختار كولشي كونكت؟",
      items: [
        { title: "حرفيون تم التحقق منهم", desc: "تم فحص الهوية والمهارات بدقة." },
        { title: "حجز سريع", desc: "عملية بسيطة في 3 خطوات للعثور على المساعدة." },
        { title: "إدارة سهلة", desc: "تابع جميع طلباتك من التطبيق." },
        { title: "تقييمات وآراء", desc: "اطلع على آراء حقيقية من عملاء آخرين." },
        { title: "دعم ثنائي اللغة", desc: "مساعدة متاحة باللغتين العربية والفرنسية." },
        { title: "إشعارات", desc: "ابق على اطلاع في كل مرحلة من مراحل خدمتك." },
      ]
    },
    provider: {
      title: "هل أنت حرفي محترف؟",
      desc: "انضم إلى كولشي كونكت وطوّر نشاطك. وصل لآلاف الزبائن المحتملين بدون مجهود تسويقي.",
      cta: "انضم إلى كولشي كونكت وطوّر نشاطك",
      badge: "للحرفيين والمهنيين",
      benefits: {
        income: {
          title: "زيادة الدخل",
          desc: "نضمن لك مصدر دخل مستقر من خلال تدفق مستمر للطلبات"
        },
        clients: {
          title: "عملاء جدد",
          desc: "الوصول إلى آلاف العملاء المحتملين في منطقتك"
        },
        management: {
          title: "إدارة سهلة",
          desc: "إدارة طلباتك وتقييماتك من خلال تطبيق واحد"
        }
      },
      stats: {
        title: "انضم إلى شبكتنا المتنامية",
        providers: "حرفيون نشطون",
        satisfied: "عملاء راضون",
        cities: "مدن مغطاة"
      },
    },
    footer: {
      about: "أول منصة مغربية مخصصة لخدمات الحرفيين والصيانة المنزلية.",
      links: "روابط سريعة",
      contact: "اتصل بنا",
      tagline: "منصة الخدمات المنزلية الأولى",
      followUs: "تابعنا على",
      home: "الرئيسية",
      joinUs: "انضم إلينا",
      location: "الدار البيضاء، المغرب",
      trademark: "جميع الحقوق محفوظة. KoulchiConnect هي علامة تجارية مسجلة."
    },
       gallery: {
      title: "إنجازاتنا",
      subtitle: "اكتشف المشاريع التي أنجزها حرفيونا المؤهلون",
      images: [
        {
          title: "تجديد كامل",
          category: "السباكة",
          image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&q=80"
        },
        {
          title: "التركيب الكهربائي",
          category: "الكهرباء",
          image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80"
        },
        {
          title: "دهان عصري",
          category: "الصباغة",
          image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80"
        },
        {
          title: "تنظيف احترافي",
          category: "التنظيف",
          image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
        },
      ]
    }
  },

  en: {
    nav: { 
      services: "Services", 
      features: "Features", 
      providerCta: "Become a Provider", 
      download: "Download" 
    },
    hero: {
      title: "Reliable craftsmen, at your fingertips.",
      subtitle: "KoulchiConnect instantly connects you with the best professionals for all your repair and maintenance needs in Morocco.",
      ctaUser: "Download the app",
      ctaProvider: "Become a Provider",
      trustedBy: "Trust our verified experts",
      common: {
        guaranteedService: "Guaranteed Service", 
        verifiedPros: "Verified Professionals", 
      },
    },
    howItWorks: {
      title: "How does it work?",
      steps: [
        { 
          title: "Select a service", 
          desc: "Choose from a wide range of services: plumbing, electricity, cleaning..." 
        },
        { 
          title: "Choose a craftsman", 
          desc: "Compare profiles, reviews and prices of available professionals." 
        },
        { 
          title: "Book instantly", 
          desc: "Confirm your request and track your provider's arrival in real time." 
        },
      ]
    },
    services: {
      title: "Available Services",
      subtitle: "We cover all your household needs",
      items: [
        { name: "Plumbing", desc: "Leaks, sanitary installation, unclogging." },
        { name: "Electricity", desc: "Wiring, breakdowns, lighting installation." },
        { name: "Cleaning", desc: "Home cleaning, post-construction, offices." },
        { name: "Painting", desc: "Interior, exterior painting and decoration." },
        { name: "Repair", desc: "General repairs and various manual work." },
        { name: "Assembly", desc: "Furniture and household equipment assembly." },
        { name: "Air Conditioning", desc: "Maintenance, repair and installation of air conditioners." },
        { name: "Small jobs", desc: "Hanging shelves, frames and small modifications." },
      ]
    },
    features: {
      badge: "Our Advantages",
      title: "Why choose KoulchiConnect?",
      subtitle: "Discover why thousands of Moroccans trust us", 
      items: [
        { title: "Verified craftsmen", desc: "Identity and skills rigorously checked." },
        { title: "Quick booking", desc: "Simple 3-step process to find help." },
        { title: "Easy management", desc: "Track all your requests from the app." },
        { title: "Reviews & ratings", desc: "Check authentic feedback from other customers." },
        { title: "Bilingual support", desc: "Assistance available in Arabic and French." },
        { title: "Notifications", desc: "Stay informed at every step of your service." },
      ]
    },
    provider: {
      title: "Are you a qualified professional?",
      desc: "Join KoulchiConnect and grow your business. Reach thousands of potential customers without marketing effort.",
      cta: "Join KoulchiConnect and grow your business",
      badge: "For craftsmen and professionals",
      benefits: {
        income: {
          title: "Stable income",
          desc: "A regular flow of requests for stable and predictable income"
        },
        clients: {
          title: "New customers",
          desc: "Access thousands of potential customers in your area"
        },
        management: {
          title: "Simplified management",
          desc: "Manage your requests, schedule and reviews from a single app"
        }
      },
      stats: {
        title: "Join our growing network",
        providers: "Active craftsmen",
        satisfied: "Satisfied customers",
        cities: "Cities covered"
      },
    },
    footer: {
      about: "Morocco's first platform dedicated to craftsmen and home maintenance services.",
      links: "Quick links",
      contact: "Contact",
      tagline: "The 1st home services platform",
      followUs: "Follow us",
      home: "Home",
      joinUs: "Become a provider",
      location: "Casablanca, Morocco",
      trademark: "All rights reserved. KoulchiConnect is a registered trademark."
    },
     gallery: {
      title: "Our Achievements",
      subtitle: "Discover projects completed by our qualified artisans",
      images: [
        {
          title: "Complete Renovation",
          category: "Plumbing",
          image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&q=80"
        },
        {
          title: "Electrical Installation",
          category: "Electricity",
          image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80"
        },
        {
          title: "Modern Painting",
          category: "Painting",
          image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80"
        },
        {
          title: "Professional Cleaning",
          category: "Cleaning",
          image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
        },
      ]
    }
  }
};