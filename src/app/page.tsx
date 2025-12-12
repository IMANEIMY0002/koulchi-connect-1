'use client';

import { useState, useEffect } from 'react';
import { TEXT_CONTENT } from '@/constants/content';
import { Language } from '@/types';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import Features from '@/components/Features';
import ProviderCTA from '@/components/ProviderCTA';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';


export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'fr';
    const saved = localStorage.getItem('language') as Language;
    if (saved === 'fr' || saved === 'ar' || saved === 'en') {
      return saved;
    }
    return 'fr';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    setIsLoaded(true);
  }, [lang]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('language', lang);
    }
  }, [lang, isLoaded]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const t = TEXT_CONTENT[lang];

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
        <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark bg-slate-950' : 'bg-white'}`}>
      <Navbar lang={lang} content={t.nav} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
      <Hero content={t.hero} lang={lang} />
      <HowItWorks content={t.howItWorks} lang={lang} />
      <Services content={t.services} lang={lang} />
      <Features content={t.features} lang={lang} />
      <Gallery content={t.gallery} lang={lang} />
      <ProviderCTA content={t.provider} lang={lang} />
      <Contact content={t.contact} lang={lang} />
      <Footer content={t.footer} nav={t.nav} lang={lang} />
    </div>
  );
}