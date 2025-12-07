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

export default function Home() {
  const [lang, setLang] = useState<Language>('fr');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = TEXT_CONTENT[lang];

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} content={t.nav} setLang={setLang} />
      <Hero content={t.hero} lang={lang} />
      <HowItWorks content={t.howItWorks} lang={lang} />
      <Services content={t.services} lang={lang} />
      <Features content={t.features} lang={lang} />
      <ProviderCTA content={t.provider} lang={lang} />
      <Footer content={t.footer} nav={t.nav} lang={lang} />
    </div>
  );
}