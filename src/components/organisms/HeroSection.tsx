"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Carousel from '../atoms/Carousel'
import { useRouter } from 'next/navigation'

const HeroSection = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('https://simplip2p.vercel.app/register');
  };

  const heroImages = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Professional team analyzing procurement data
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Digital procurement dashboard
    "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Business analytics on laptop
    "https://images.unsplash.com/photo-1494961104809-3c171b308be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Supply chain logistics warehouse
  ];
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-0 left-0 w-full h-full">
        <Carousel images={heroImages} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium mb-2">
                #1 Procurement Solution
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm sm:text-4xl font-bold text-white mb-4 md:mb-3 leading-tight"
            >
              Transform Your <span className="text-blue-400">Procurement</span> Process!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-300 mb-6 md:mb-4 leading-relaxed"
            >
               Faster, Smarter, More Efficient
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleGetStarted}
                className="bg-primary hover:bg-secondary text-white px-6 sm:px-10 py-3 flex justify-center items-center rounded-lg text-sm sm:text-base font-semibold transition-colors"
              >
                <span>Get Started</span> 
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 md:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4"
            >
              {[
                "Fast Implementation",
                "99.9% Uptime",
                "Enterprise Security"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mt-8 lg:mt-0 relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/dashboard.png"
                alt="Procurement Dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 600px"
                priority
              />
              <div className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none"></div>
            </div>
            
            <div className="absolute -top-3 -right-2 md:-top-4 md:-right-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-xs py-1 px-2 md:px-3 rounded-full shadow-lg">
              Enterprise Ready
            </div>
            <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 bg-gradient-to-br from-amber-500 to-amber-700 text-white text-xs py-1 px-2 md:px-3 rounded-full shadow-lg">
              Cost-Effective
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-white/10"
        >
          <p className="text-center text-xs md:text-sm text-slate-400 uppercase tracking-wider mb-4 md:mb-6">
            Trusted by procurement teams worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 grayscale opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-6 md:h-8 w-auto">
                <Image
                  src={`/logo-white.png`}
                  alt={`Partner ${i}`}
                  width={120}
                  height={32}
                  className="h-full w-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection