import { Language } from '../types';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher({
  currentLang,
  onToggle
}: {
  currentLang: Language;
  onToggle: (l: Language) => void
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'en' as Language, label: 'English', short: 'EN', region: 'US' },
    { code: 'fr' as Language, label: 'Français', short: 'FR', region: 'FR' },
    { code: 'ar' as Language, label: 'العربية', short: 'AR', region: 'MA' },
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-4 md:py-2.5 rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-gray-300 dark:hover:border-slate-600 hover:shadow-sm transition-all duration-200"
      >
        <Globe size={16} className="text-blue-600 dark:text-blue-400 md:w-[18px] md:h-[18px]" />
        <span className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm uppercase tracking-wide">
          {currentLanguage?.short}
        </span>
        <ChevronDown
          size={14}
          className={`text-gray-500 dark:text-gray-400 transition-transform duration-200 md:w-4 md:h-4 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 md:hidden" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-xl py-2 z-50 animate-slideDown">
           
            <div className="py-2">
              {languages.map((lang) => {
                const isActive = currentLang === lang.code;
                
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onToggle(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-150 flex items-center justify-between group ${
                      isActive ? 'bg-blue-50 dark:bg-slate-700' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        isActive 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-slate-600'
                      }`}>
                        {lang.region}
                      </span>
                      <div>
                        <p className={`font-semibold text-sm ${
                          isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-gray-100'
                        } ${lang.code === 'ar' ? 'font-arabic' : ''}`}>
                          {lang.label}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                          {lang.short}
                        </p>
                      </div>
                    </div>
                    
                    {isActive && (
                      <Check size={18} className="text-blue-600 dark:text-blue-400 animate-scaleIn" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}