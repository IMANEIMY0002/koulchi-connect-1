'use client';
import { Menu, X, Download } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';
import { Language } from '@/types';

export default function Navbar({ lang, content, setLang }: { lang: Language; content: any; setLang: (l: Language) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-primary-600 to-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
              K
            </div>
            <span className="text-2xl font-bold text-gray-800">
              Koulchi<span className="text-primary-600">Connect</span>
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors hover:scale-105">
              {content.services}
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors hover:scale-105">
              {content.features}
            </a>
            <a href="#provider" className="text-gray-700 hover:text-primary-600 font-medium transition-colors hover:scale-105">
              {content.providerCta}
            </a>
            <LanguageSwitcher currentLang={lang} onToggle={setLang} />
            
            <button className="group relative bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 text-white px-7 py-2.5 rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <Download size={18} className="relative z-10" />
              <span className="relative z-10 font-semibold text-sm">{content.download}</span>
              
              <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors"></div>
            </button>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher currentLang={lang} onToggle={setLang} />
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="text-gray-700 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-gray-100 z-50"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          
          <div className="fixed top-[73px] left-0 right-0 bg-white shadow-2xl z-40 md:hidden max-h-[calc(100vh-73px)] overflow-y-auto">
            <div className="p-6 space-y-4">
              <a 
                href="#services" 
                onClick={() => setMobileOpen(false)} 
                className="block text-gray-800 hover:text-primary-600 text-lg py-3 px-4 rounded-lg hover:bg-gray-50 transition-all"
              >
                {content.services}
              </a>
              <a 
                href="#features" 
                onClick={() => setMobileOpen(false)} 
                className="block text-gray-800 hover:text-primary-600 text-lg py-3 px-4 rounded-lg hover:bg-gray-50 transition-all"
              >
                {content.features}
              </a>
              <a 
                href="#provider" 
                onClick={() => setMobileOpen(false)} 
                className="block text-gray-800 hover:text-primary-600 text-lg py-3 px-4 rounded-lg hover:bg-gray-50 transition-all"
              >
                {content.providerCta}
              </a>
              
              <button 
                onClick={() => setMobileOpen(false)}
                className="w-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                <Download size={20} />
                <span className="font-semibold">{content.download}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}