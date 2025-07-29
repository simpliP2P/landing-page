"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../atoms/Button";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Logo from "../atoms/Logo";
import Divider from "../atoms/Divider";

// Typography styles
const navLinkStyles = "font-roboto text-white text-[1rem] font-medium";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname(); // Use full pathname instead of splitting
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const howItWorksDropdownItems = [
    {
      name: "Purchase Order Management",
      path: "/how-it-works?section=purchase-order",
    },
    {
      name: "Supplier Management",
      path: "/how-it-works?section=supplier-management",
    },
    {
      name: "Inventory Management",
      path: "/how-it-works?section=inventory-management",
    },
    { name: "Budget", path: "/how-it-works?section=budget" },
    { name: "Audit Trails", path: "/how-it-works?section=audit-trails" },
    {
      name: "Approval Workflows",
      path: "/how-it-works?section=approval-workflows",
    },
  ];

  // Simplified navigation items
  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSignUp = () => {
    router.push("https://app.simplip2p.com/book-a-demo");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to check if path is active
  const isActivePath = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-primary shadow-lg py-3" 
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <Logo className="h-8 w-auto md:h-10" theme="white" />
            <span className="text-xl md:text-2xl font-bold text-white">
              simpliP2P
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navigationItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className={`relative py-2 hover:text-white transition-all duration-200 ${navLinkStyles} ${
                    isActivePath(item.path) ? "text-white font-bold" : "text-white/80"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActivePath(item.path) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <Divider width="sm" color="white" />
                    </div>
                  )}
                </Link>
              ))}

              {/* How It Works Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  href="/how-it-works"
                  className={`relative py-2 hover:text-white transition-all duration-200 ${navLinkStyles} flex items-center gap-2 ${
                    pathname.startsWith("/how") ? "text-white font-bold" : "text-white/80"
                  }`}
                >
                  <span>How It Works</span>
                  <FaChevronDown
                    size={10}
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                  {pathname.startsWith("/how") && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <Divider color="white" width="md" />
                    </div>
                  )}
                </Link>

                {/* Dropdown Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: isDropdownOpen ? 1 : 0,
                    y: isDropdownOpen ? 0 : -10,
                    visibility: isDropdownOpen ? "visible" : "hidden",
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50"
                >
                  {howItWorksDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-all duration-200 text-sm font-medium border-b border-gray-50 last:border-b-0"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              </div>

              <Link
                href="/book-a-demo"
                className={`relative py-2 hover:text-white transition-all duration-200 ${navLinkStyles} ${
                  isActivePath("/book-a-demo") ? "text-white font-bold" : "text-white/80"
                }`}
              >
                <span>Book A Demo</span>
                {isActivePath("/book-a-demo") && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <Divider color="white" width="md" />
                  </div>
                )}
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden bg-primary/95 backdrop-blur-md border-t border-white/10"
      >
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-col space-y-1">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Blog", path: "/blog" },
              { name: "Book A Demo", path: "/book-a-demo" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className={`text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 py-4 px-4 rounded-lg ${
                  isActivePath(item.path) ? "text-white bg-white/10 font-bold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile How It Works Section */}
            <div>
              <div className="flex items-center justify-between py-4 px-4">
                <Link
                  href="/how-it-works"
                  className={`transition-colors flex-1 ${
                    pathname.startsWith("/how") ? "text-white font-bold" : "text-white/90 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <FaChevronDown
                    size={12}
                    className={`text-white/90 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: isDropdownOpen ? "auto" : 0,
                  opacity: isDropdownOpen ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pl-6 pb-2 space-y-1">
                  {howItWorksDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="block text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 py-3 px-4 rounded-lg text-sm"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Mobile CTA Button */}
            <div className="pt-4">
              <Button
                onClick={handleSignUp}
                className="w-full py-4 rounded-lg bg-white text-primary hover:bg-gray-100 transition-colors shadow-lg font-semibold"
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