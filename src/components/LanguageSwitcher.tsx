import { Language } from '@/types';

export default function LanguageSwitcher({ currentLang, onToggle }: { currentLang: Language; onToggle: (l: Language) => void }) {
  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
      <button onClick={() => onToggle('fr')} className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${currentLang === 'fr' ? 'bg-white text-primary-700 shadow-sm' : 'text-gray-500'}`}>FR</button>
      <button onClick={() => onToggle('ar')} className={`px-3 py-1 rounded-full text-xs font-semibold transition-all font-arabic ${currentLang === 'ar' ? 'bg-white text-primary-700 shadow-sm' : 'text-gray-500'}`}>عربي</button>
    </div>
  );
}