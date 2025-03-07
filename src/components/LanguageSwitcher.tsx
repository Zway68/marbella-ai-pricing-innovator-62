
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-marbella-700 hover:text-marbella-500 transition-colors"
      aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'en' ? '中文' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
