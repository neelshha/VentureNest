import { useState, useEffect } from 'react';
import { Menu, X, Smartphone, Download, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPricingDropdownOpen, setIsPricingDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src="/logo.png"
              alt="VentureNest Logo"
              className="h-8 w-auto"
            />
            <span className="font-raleway font-bold text-xl md:text-2xl text-[#882727] ml-2">
              VentureNest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link to="/events" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 inline-flex items-center px-3 py-2 rounded-md text-sm font-medium">
                Events
              </Link>
              <div className="relative group">
                <button
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => setIsPricingDropdownOpen(!isPricingDropdownOpen)}
                  type="button"
                >
                  Pricing
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {isPricingDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      <Link
                        to="/pricing-startups"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        For Startups
                      </Link>
                      <Link
                        to="/pricing-investors"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        For Investors
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 inline-flex items-center px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
                aria-label="Download Mobile App"
              >
                <Smartphone className="h-6 w-6 text-gray-700" />
                <Download className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-3 text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
              <Link
                to="/login"
                className="px-4 py-2 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors duration-200 font-medium"
              >
                Log In
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/events"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <div className="space-y-1">
              <button
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsPricingDropdownOpen(!isPricingDropdownOpen)}
              >
                Pricing
              </button>
              {isPricingDropdownOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/pricing-startups"
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    For Startups
                  </Link>
                  <Link
                    to="/pricing-investors"
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    For Investors
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="pt-2 border-t border-gray-200">
              <Link 
                to="/login"
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-accent hover:text-accent/90 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;