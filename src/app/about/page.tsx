"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLightbulb, FaHandshake, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="font-montserrat">
      <main>
        <div className="min-h-screen">          
          {/* Hero Section */}
          <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/hero-bg.png"
                alt="Background Pattern"
                fill
                sizes="100vw"
                className="object-cover opacity-80"
                priority
              />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  About <span className="text-blue-400">SimpliP2P</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed"
                >
                  Transforming procurement in Nigeria through digital innovation
                </motion.p>
              </div>
            </div>
          </section>
          
          {/* Our Story Section */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="order-2 md:order-1"
                >
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-600 text-xs sm:text-sm font-medium mb-3">
                    Our Story
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Simplifying Procurement in Nigeria
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-base md:text-lg">
                      SimpliP2P was born from a simple yet powerful idea: to transform the traditional procurement landscape in Nigeria by harnessing the power of digital innovation. Rooted in deep industry experience and a firm understanding of local procurement challenges, we set out to streamline the Procure-to-pay (P2P) process through a secure, user-centric, and transparent platform.
                    </p>
                    <p className="text-base md:text-lg">
                      Our name, SimpliP2P—short for Simplified Procure-to-Pay—embodies our mission: to simplify how businesses manage procurement by eliminating inefficiencies, reducing manual paperwork, and promoting vendor inclusivity.
                    </p>
                    <p className="text-base md:text-lg">
                      At SimpliP2P, we bridge the gap between public and private sector buyers and their suppliers through a robust eProcurement solution designed specifically for Nigeria&apos;s evolving business environment.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="order-1 md:order-2"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/happy-young-african-businessman.png"
                      alt="Nigerian Business Professional"
                      width={600}
                      height={500}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    <div className="absolute inset-0 border border-gray-200 rounded-2xl pointer-events-none"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Local-First Approach Section */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/happy-young-african-businessman.png"
                      alt="African Business Team"
                      width={600}
                      height={500}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    <div className="absolute inset-0 border border-gray-200 rounded-2xl pointer-events-none"></div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 md:p-6 rounded-xl shadow-lg max-w-[220px] hidden md:block">
                    <div className="flex items-center gap-3 mb-2">
                      <FaLightbulb className="text-yellow-500 text-xl" />
                      <h4 className="font-bold text-gray-900">Local Innovation</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Built by Nigerians, for the Nigerian market
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-600 text-xs sm:text-sm font-medium mb-3">
                    Our Approach
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Nigerian-First Innovation
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-base md:text-lg">
                      What sets us apart is our local-first approach. We don&apos;t just replicate foreign models; we innovate with the Nigerian context at heart. Our solution empowers procurement teams to do more with less—faster, smarter, and with full accountability.
                    </p>
                    <p className="text-base md:text-lg">
                      Our platform supports strategic sourcing, automated approvals, vendor onboarding, compliance tracking, and end-to-end transparency—helping organizations make informed decisions while staying fully audit-ready.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {[
                      { icon: <FaHandshake className="text-blue-500" />, text: "Local Partnerships" },
                      { icon: <FaGlobe className="text-blue-500" />, text: "Nigerian Market Expertise" },
                      { icon: <FaCheckCircle className="text-blue-500" />, text: "Compliance-Focused" },
                      { icon: <FaLightbulb className="text-blue-500" />, text: "Innovative Solutions" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                        <div className="text-xl">
                          {item.icon}
                        </div>
                        <p className="font-medium text-sm text-gray-800">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Vision & Mission Section */}
          <section className="py-16 md:py-24 bg-primary text-white">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Our Vision & Mission
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 }}
                  className="w-16 md:w-24 h-1 bg-blue-400 mx-auto"
                >
                </motion.div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                >
                  <div className="inline-block p-3 rounded-full bg-blue-600 mb-6">
                    <Image
                      src="/eye-vision.svg"
                      alt="Vision"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    To be Nigeria&apos;s most trusted eProcurement solution, enabling efficient, fair, and transparent procurement for organizations of all sizes.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                >
                  <div className="inline-block p-3 rounded-full bg-blue-600 mb-6">
                    <Image
                      src="/target-mission.svg"
                      alt="Mission"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    To digitize and optimize the procurement process through intuitive technology that enhances value, promotes integrity, and drives measurable business results.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Values Section */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-600 text-xs sm:text-sm font-medium mb-3">
                  Our Foundation
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  The Values That Drive Us
                </h2>
                <p className="text-lg text-gray-600">
                  Our core values shape every aspect of what we do at SimpliP2P
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                {[
                  {
                    icon: "/icon-integrity.svg",
                    title: "Integrity",
                    description: "We uphold the highest ethical standards in all our actions and decisions."
                  },
                  {
                    icon: "/icon-innovation.svg",
                    title: "Innovation",
                    description: "We constantly seek better solutions to Nigeria's procurement challenges."
                  },
                  {
                    icon: "/icon-transparency.svg",
                    title: "Transparency",
                    description: "We believe in clear, honest communication with all stakeholders."
                  },
                  {
                    icon: "/icon-excellence.svg",
                    title: "Excellence",
                    description: "We strive for perfection in our platform, service, and support."
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center"
                  >
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Image
                        src="/logo-white.png"
                        alt={value.title}
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Team Section */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-600 text-xs sm:text-sm font-medium mb-3">
                  Our Leadership
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Meet the Team Behind SimpliP2P
                </h2>
                <p className="text-lg text-gray-600">
                  Our diverse team of experts is committed to revolutionizing Nigeria&apos;s procurement landscape
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Ola Adeyemi",
                    role: "Chief Executive Officer",
                    image: "/happy-young-african-businessman-sm.png",
                    description: "Anjola over 15 years in procurement, Oluwaseun leads our vision to transform Nigeria's procurement landscape."
                  },
                  {
                    name: "Anjola Adeyemi",
                    role: "Chief Technology Officer",
                    image: "/happy-young-african-businessman-sm.png",
                    description: "Ola brings extensive experience in building enterprise-grade software solutions for the African market."
                  },
                  {
                    name: "Dolapo BAS",
                    role: "Head of Operations",
                    image: "/happy-young-african-businessman-sm.png",
                    description: "Dolapo ensures our platform delivers consistent value while meeting the unique needs of Nigerian businesses."
                  }
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md"
                  >
                    <div className="h-60 relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your Procurement Process?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Connect with our team to learn how SimpliP2P can help your organization
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact" 
                    className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/" 
                    className="px-8 py-3 bg-white text-primary border border-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </main>
    </div>
  );
}