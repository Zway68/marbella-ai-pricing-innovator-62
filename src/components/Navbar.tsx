
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-marbella-900 tracking-tight">
          Marbella<span className="text-marbella-500">AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">{t('Home', '首页')}</Link>
          <Link to="/about" className="nav-link">{t('About Us', '关于我们')}</Link>
          <a href="#pricing" className="nav-link">{t('Pricing', '价格')}</a>
          <a href="#mentors" className="nav-link">{t('Mentors', '导师')}</a>
          <a href="#testimonials" className="nav-link">{t('Testimonials', '客户见证')}</a>
          <a href="#contact" className="button-primary">{t('Contact Us', '联系我们')}</a>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            className="text-marbella-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 pt-20 px-4 transition-transform duration-300 md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-6 items-center">
          <Link
            to="/"
            className="text-lg font-medium text-marbella-800 hover:text-marbella-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('Home', '首页')}
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium text-marbella-800 hover:text-marbella-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('About Us', '关于我们')}
          </Link>
          <a
            href="#pricing"
            className="text-lg font-medium text-marbella-800 hover:text-marbella-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('Pricing', '价格')}
          </a>
          <a
            href="#mentors"
            className="text-lg font-medium text-marbella-800 hover:text-marbella-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('Mentors', '导师')}
          </a>
          <a
            href="#testimonials"
            className="text-lg font-medium text-marbella-800 hover:text-marbella-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('Testimonials', '客户见证')}
          </a>
          <a
            href="#contact"
            className="button-primary mt-4 w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('Contact Us', '联系我们')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
