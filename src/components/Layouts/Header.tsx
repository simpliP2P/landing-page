import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../atoms/Button';
import { motion } from 'framer-motion';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../atoms/Logo';

// Typography styles
const navLinkStyles = "font-roboto text-white text-[16px] md:text-[18px]";

const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating to a new section
  useEffect(() => {
    const handleHashChange = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSignUp = () => {
    router.push('https://simplip2p.vercel.app/register');
    setIsMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo className="h-7 w-auto md:h-9" />
            <span className={`text-lg md:text-xl font-bold text-white`}>simpliP2P</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <div className="relative group">
              <a href="#features" className={`flex items-center gap-1 hover:text-white transition-colors ${navLinkStyles}`}>
                <span>Solutions</span>
                <FaChevronDown className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {["E-Procurement", "Strategic Sourcing", "Spend Analysis"].map((item, i) => (
                  <a 
                    key={i} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            {["How it works", "Case studies", "Pricing", "FAQ"].map((item, i) => (
              <a 
                key={i} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className={`hover:text-white transition-colors ${navLinkStyles}`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={handleSignUp}
              className="px-5 py-2 lg:w-[170px] lg:h-[48px] lg:px-[30px] lg:py-[10px] rounded-lg bg-[#0D0E4E] text-white hover:bg-[#0D0E4E]/90 transition-colors flex justify-center items-center"
            >
              <span className="font-bold text-sm lg:text-base">Get Started</span>  
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0, 
          opacity: isMenuOpen ? 1 : 0 
        }}
        className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col gap-2">
            {["Solutions", "How it works", "Case studies", "Pricing", "FAQ"].map((item, i) => (
              <a 
                key={i}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-gray-300 hover:text-white transition-colors py-3 border-b border-gray-700/50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="mt-4">
              <Button
                onClick={handleSignUp}
                className="w-full py-3 rounded-lg bg-[#0D0E4E] text-white hover:bg-[#0D0E4E]/90 transition-colors shadow-lg text-center"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;