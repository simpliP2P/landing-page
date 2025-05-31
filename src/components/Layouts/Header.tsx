"use client"
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from '../atoms/Button';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../atoms/Logo';

// Typography styles
const navLinkStyles = "font-roboto text-white text-[16px] md:text-[18px]";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
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
        isScrolled ? 'bg-primary/40 shadow-lg py-2' : 'bg-transparent py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 justify-center cursor-pointer">
            <Logo className="h-7 w-auto md:h-9 mt-5" />
            <p className={`text-lg md:text-xl font-bold text-white`}>simpliP2P</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Solution", path: "#" }
            ].map((item, i) => (
              <Link 
                key={i} 
                href={item.path}
                className={`relative pb-1 hover:text-white transition-colors ${navLinkStyles} ${
                  pathname === item.path ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

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
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" }
            ].map((item, i) => (
              <Link 
                key={i}
                href={item.path}
                className={`text-gray-300 hover:text-white transition-colors py-3 border-b border-gray-700/50 ${
                  pathname === item.path ? 'text-white border-b-white' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
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