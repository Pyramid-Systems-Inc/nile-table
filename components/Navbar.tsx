'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Check if we're on the home page (which has a dark hero background)
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: isVisible ? 0 : -100,
        transition: { duration: 0.3, ease: 'easeInOut' }
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || !isHomePage
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-serif font-bold text-xl">N</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-serif text-xl font-semibold ${isScrolled || !isHomePage ? 'text-blue-900' : 'text-white'
                }`}>
                The Nile&apos;s Table
              </h1>
              <p className={`text-sm ${isScrolled || !isHomePage ? 'text-gray-600' : 'text-white/80'
                }`}>
                Ancient Tradition Reimagined
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 hover:text-yellow-400 ${isActive
                    ? 'text-yellow-400'
                    : isScrolled || !isHomePage ? 'text-blue-900' : 'text-white'
                    } ${isActive ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:rounded-full' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Book a Table Button */}
          <div className="hidden lg:block">
            <Link
              href="/book"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg"
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled || !isHomePage ? 'text-blue-900' : 'text-white'
              }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`font-medium py-3 px-4 rounded-lg transition-all duration-300 ${isActive
                        ? 'bg-yellow-100 text-yellow-600 border-l-4 border-yellow-400'
                        : 'text-blue-900 hover:text-yellow-400 hover:bg-yellow-50'
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/book"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg w-full text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}