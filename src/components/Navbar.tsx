'use client';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect } from 'react';
import { Language, ContentSections } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  lang: Language;
  content: ContentSections['nav'];
  setLang: (l: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ lang, content, setLang, theme, toggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-primary-600 to-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:rotate-12 transition-transform duration-300">
              K
            </div>
            <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">
              Koulchi<span className="text-primary-600">Connect</span>
            </span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors hover:scale-105">
              {content.services}
            </a>
            <a href="#features" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors hover:scale-105">
              {content.features}
            </a>
            <a href="#provider" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors hover:scale-105">
              {content.providerCta}
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors hover:scale-105">
              {content.contact}
            </a>
            
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-yellow-400 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <LanguageSwitcher currentLang={lang} onToggle={setLang} />
            
            <button className="group relative bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 text-white px-7 py-2.5 rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <Download size={18} className="relative z-10" />
              <span className="relative z-10 font-semibold text-sm">{content.download}</span>
            </button>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="md:hidden flex items-center gap-2">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-yellow-400 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <LanguageSwitcher currentLang={lang} onToggle={setLang} />
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="text-gray-700 dark:text-white hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 z-50"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            
            <motion.div 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-[73px] left-0 right-0 bg-white dark:bg-slate-900 shadow-2xl z-40 md:hidden rounded-b-3xl overflow-hidden border-t border-gray-100 dark:border-slate-800"
            >
              <div className="p-6 space-y-4">
                <a 
                  href="#services" 
                  onClick={() => setMobileOpen(false)} 
                  className="block text-gray-800 dark:text-gray-100 hover:text-primary-600 text-lg py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-all font-medium"
                >
                  {content.services}
                </a>
                <a 
                  href="#features" 
                  onClick={() => setMobileOpen(false)} 
                  className="block text-gray-800 dark:text-gray-100 hover:text-primary-600 text-lg py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-all font-medium"
                >
                  {content.features}
                </a>
                <a 
                  href="#provider" 
                  onClick={() => setMobileOpen(false)} 
                  className="block text-gray-800 dark:text-gray-100 hover:text-primary-600 text-lg py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-all font-medium"
                >
                  {content.providerCta}
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileOpen(false)} 
                  className="block text-gray-800 dark:text-gray-100 hover:text-primary-600 text-lg py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-all font-medium"
                >
                  {content.contact}
                </a>
                
                <button 
                  onClick={() => setMobileOpen(false)}
                  className="w-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download size={20} />
                  <span className="font-semibold">{content.download}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}