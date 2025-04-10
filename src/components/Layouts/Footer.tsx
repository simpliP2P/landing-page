import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaAngleRight } from 'react-icons/fa';
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
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand and Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white">simpliP2P</span>
            </div>
            <p className="text-slate-300 mb-8 text-[15px]  ">
              Streamlining procurement processes with intelligent automation, centralized data management, and real-time analytics.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <FaAngleRight className="w-3 h-3 text-blue-400" />
                    <span className='text-[10px] leading-none'>{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <FaAngleRight className="w-3 h-3 text-blue-400" />
                    <span className='text-[10px] leading-none'>{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <FaAngleRight className="w-3 h-3 text-blue-400" />
                    <span className='text-[10px] leading-none'>{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <IoLocation className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-[10px] leading-none">
                  10 Agboola Aina Street, Off Toyin Street, Ikeja, Lagos, Nigeria
                </span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <IoMail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:help@simplip2p.com" className="text-slate-300 hover:text-blue-400 text-[10px] transition-colors text-sm">
                  help@simplip2p.com
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <IoCall className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+2341234567890" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                  +234 123 456 7890
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Certificates and Trust */}
        <div className="border-t border-white/10 pt-8 pb-10">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2">
              <IoShieldCheckmark className="w-5 h-5 text-green-400" />
              <span className="text-sm text-slate-300">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <IoShieldCheckmark className="w-5 h-5 text-green-400" />
              <span className="text-sm text-slate-300">GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <IoShieldCheckmark className="w-5 h-5 text-green-400" />
              <span className="text-sm text-slate-300">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <IoGlobe className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-slate-300">Available in 12 Countries</span>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} simpliP2P. All rights reserved.
          </div>
          <div className="flex gap-6">
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