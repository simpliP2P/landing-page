import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaAngleRight } from 'react-icons/fa';
import { IoMail, IoCall, IoLocation, IoShieldCheckmark, IoGlobe } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Logo from '../atoms/Logo';

const Footer = () => {

  const solutions = [
    { name: 'E-Procurement', href: '#e-procurement' },
    { name: 'Supplier Management', href: '#supplier-management' },
    { name: 'Purchase Order Management', href: '#purchase-order' },
    { name: 'Contract Management', href: '#contract-management' },
    { name: 'Spend Analytics', href: '#spend-analytics' },
    { name: 'Invoice Processing', href: '#invoice-processing' },
  ];

  const resources = [
    { name: 'Documentation', href: '#docs' },
    { name: 'Webinars', href: '#webinars' },
    { name: 'Blog', href: '#blog' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
  ];

  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-12 md:pt-20 pb-6 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-10 md:mb-12">
          {/* Brand and Info */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <Logo className="h-8 md:h-10 w-auto" />
              <span className="text-xl md:text-2xl font-bold text-white">simpliP2P</span>
            </div>
            <p className="text-slate-300 mb-6 md:mb-8 text-xs md:text-sm">
              Streamlining procurement processes with intelligent automation, centralized data management, and real-time analytics.
            </p>
            <div className="flex items-center gap-3 md:gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 md:p-2.5 rounded-full transition-all">
                <FaLinkedin className="w-3 h-3 md:w-4 md:h-4" />
              </a>
              <a href="https://www.instagram.com/simplip2p" className="bg-white/10 hover:bg-white/20 p-2 md:p-2.5 rounded-full transition-all">
                <FaInstagram className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-6 border-b border-white/10 pb-2">Solutions</h3>
            <ul className="space-y-2 md:space-y-3">
              {solutions.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5 md:gap-2"
                  >
                    <FaAngleRight className="w-2 h-2 md:w-3 md:h-3 text-blue-400 flex-shrink-0" />
                    <span className="text-xs md:text-sm leading-tight">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-6 border-b border-white/10 pb-2">Resources</h3>
            <ul className="space-y-2 md:space-y-3">
              {resources.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5 md:gap-2"
                  >
                    <FaAngleRight className="w-2 h-2 md:w-3 md:h-3 text-blue-400 flex-shrink-0" />
                    <span className="text-xs md:text-sm leading-tight">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-6 border-b border-white/10 pb-2">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              {company.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5 md:gap-2"
                  >
                    <FaAngleRight className="w-2 h-2 md:w-3 md:h-3 text-blue-400 flex-shrink-0" />
                    <span className="text-xs md:text-sm leading-tight">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-6 border-b border-white/10 pb-2">Contact Us</h3>
            <ul className="space-y-3 md:space-y-4">
              <motion.li 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex items-start gap-2 md:gap-3"
              >
                <IoLocation className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-xs md:text-sm leading-tight">
                  10 Agboola Aina Street, Off Toyin Street, Ikeja, Lagos, Nigeria
                </span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 md:gap-3"
              >
                <IoMail className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:help@simplip2p.com" className="text-slate-300 hover:text-blue-400 transition-colors text-xs md:text-sm">
                  help@simplip2p.com
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 md:gap-3"
              >
                <IoCall className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+2341234567890" className="text-slate-300 hover:text-blue-400 transition-colors text-xs md:text-sm">
                   07059751272
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Certificates and Trust */}
        <div className="border-t border-white/10 pt-6 md:pt-8 pb-8 md:pb-10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
            <div className="flex items-center gap-1.5 md:gap-2">
              <IoShieldCheckmark className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              <span className="text-xs md:text-sm text-slate-300">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <IoShieldCheckmark className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              <span className="text-xs md:text-sm text-slate-300">GDPR Ready</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <IoShieldCheckmark className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              <span className="text-xs md:text-sm text-slate-300">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <IoGlobe className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              <span className="text-xs md:text-sm text-slate-300">Available in 12 Countries</span>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-slate-400">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} simpliP2P. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-blue-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;