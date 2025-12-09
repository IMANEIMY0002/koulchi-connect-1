import { Language } from '@/types';
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

  // Fermer le dropdown quand on clique ailleurs
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
      {/* Bouton principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200"
      >
        <Globe size={18} className="text-blue-600" />
        <span className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
          {currentLanguage?.short}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Overlay transparent pour mobile */}
          <div 
            className="fixed inset-0 z-40 md:hidden" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl py-2 z-50 animate-slideDown">
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Select Region
              </p>
            </div>

            {/* Liste des langues */}
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
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150 flex items-center justify-between group ${
                      isActive ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        isActive 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                      }`}>
                        {lang.region}
                      </span>
                      <div>
                        <p className={`font-semibold text-sm ${
                          isActive ? 'text-blue-600' : 'text-gray-900'
                        } ${lang.code === 'ar' ? 'font-arabic' : ''}`}>
                          {lang.label}
                        </p>
                        <p className="text-xs text-gray-500 uppercase">
                          {lang.short}
                        </p>
                      </div>
                    </div>
                    
                    {isActive && (
                      <Check size={18} className="text-blue-600 animate-scaleIn" />
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