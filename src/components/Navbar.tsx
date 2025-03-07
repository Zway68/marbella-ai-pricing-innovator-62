
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#mentors" className="nav-link">Mentors</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="button-primary">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-marbella-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium text-marbella-800 hover:text-marbella-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <a
            href="#pricing"
            className="text-lg font-medium text-marbella-800 hover:text-marbella-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#mentors"
            className="text-lg font-medium text-marbella-800 hover:text-marbella-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Mentors
          </a>
          <a
            href="#testimonials"
            className="text-lg font-medium text-marbella-800 hover:text-marbella-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="button-primary mt-4 w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
