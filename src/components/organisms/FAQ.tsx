import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

const faqs = [
  {
    question: "What is simpliP2P?",
    answer: "simpliP2P is a comprehensive procurement platform that streamlines the purchasing process for businesses. It offers automated workflows, vendor management, and real-time tracking of procurement activities, helping organizations reduce costs and improve operational efficiency."
  },
  {
    question: "How secure is the platform?",
    answer: "Our platform employs enterprise-grade security measures including 256-bit encryption, multi-factor authentication, and regular security audits. We're SOC 2 compliant and adhere to international data protection standards to ensure your procurement data remains completely secure and confidential."
  },
  {
    question: "Can I integrate simpliP2P with my existing systems?",
    answer: "Yes, simpliP2P provides seamless integration with most common ERP systems (SAP, Oracle, Microsoft Dynamics), accounting software (QuickBooks, Xero), and other business tools through our extensive API library. Our implementation team can assist with custom integrations for your specific tech stack."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive support including 24/7 technical assistance, a dedicated customer success manager for enterprise clients, extensive documentation, video tutorials, and regular training sessions. Our average response time is under 30 minutes, ensuring your procurement processes are never disrupted."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is straightforward. Schedule a demo through our website, and our team will guide you through the platform's capabilities tailored to your organization's needs. After that, our implementation specialists will help with setup, data migration, and training to ensure a smooth transition."
  },
  {
    question: "Is simpliP2P suitable for small businesses?",
    answer: "Absolutely! We offer flexible plans designed specifically for small businesses. Our platform scales with your growth, allowing you to start with essential procurement tools and add more advanced features as your needs evolve."
  }
];

const successStories = [
  {
    name: "Sarah Johnson",
    role: "Procurement Director",
    company: "Tech Solutions Inc.",
    image: "/logo-black.png",
    quote: "SimpliP2P has revolutionized our procurement process. We've reduced processing time by 60% and improved vendor relationships significantly. The analytics dashboards provide actionable insights that helped us reduce our procurement costs by 22% in just six months."
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "Global Logistics Ltd.",
    image: "/logo-black.png",
    quote: "The platform's integration capabilities and real-time tracking have made our operations more efficient. We've eliminated paper-based processes, reduced approval cycles by 70%, and gained complete visibility into our supply chain. The ROI has been remarkable."
  },
  {
    name: "Emily Rodriguez",
    role: "Supply Chain Head",
    company: "Retail Dynamics",
    image: "/logo-black.png",
    quote: "Since implementing SimpliP2P, our procurement team spends 80% less time on administrative tasks. The automated approval workflows and supplier management features have transformed how we operate. Our compliance rate is now at 99%, eliminating costly procurement errors."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Success Stories Section */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Trusted by Procurement Leaders</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              See how simpliP2P has transformed procurement processes for organizations across industries
            </p>
            <div className="w-16 md:w-24 h-1 bg-primary mx-auto mt-4 md:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-5 md:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col gap-4">
                  <FaQuoteLeft className="text-blue-100 mb-4 md:mb-6 h-6 w-6 md:h-8 md:w-8" />
                  <blockquote className="text-gray-700 text-sm md:text-[15px] h-[150px] md:h-[200px] overflow-y-auto relative z-10">
                    &quot;{story.quote}&quot;
                  </blockquote>
                  
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-100 border-2 border-blue-100">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        sizes="(max-width: 768px) 48px, 64px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm md:text-base">{story.name}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{story.role}</p>
                      <p className="text-xs md:text-sm text-blue-600">{story.company}</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 -mr-6 -mt-6 md:-mr-8 md:-mt-8 bg-blue-50 rounded-full opacity-70"></div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column: FAQ Questions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12"
            >
              <span className="block text-blue-600 font-medium text-sm md:text-base mb-2">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Frequently Asked Questions</h2>
              <p className="text-lg md:text-xl text-gray-600">
                Find answers to common questions about simpliP2P &apos;s procurement platform.
              </p>
              <div className="w-16 md:w-24 h-1 bg-blue-500 mt-4 md:mt-6"></div>
            </motion.div>

            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden shadow-md border border-gray-100"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className={`w-full flex items-center justify-between p-4 md:p-6 text-left transition-all ${
                      openIndex === index ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <span className={`font-semibold text-sm md:text-base ${openIndex === index ? 'text-blue-700' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`${openIndex === index ? 'text-blue-600' : 'text-gray-500'}`}
                    >
                      <IoChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 md:p-6 pt-0 bg-white border-t border-gray-100">
                          <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: CTA and Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="relative mt-6 lg:mt-0"
          >
            <div className="lg:sticky lg:top-24 space-y-6 md:space-y-8">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/globe.svg"
                  alt="Global Procurement Network"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Global Procurement Network</h3>
                  <p className="text-white/90 mb-3 md:mb-4 text-sm md:text-base">Join thousands of procurement professionals worldwide who trust simpliP2P</p>
                  <div className="flex items-center gap-2 text-white/90 text-xs md:text-sm">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image 
                            src="/logo-white.png" 
                            alt={`User ${i}`} 
                            width={32} 
                            height={32}
                            sizes="(max-width: 768px) 24px, 32px" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <span>10,000+ users worldwide</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Still have questions?</h3>
                <p className="text-gray-600 mb-5 md:mb-6 text-sm md:text-base">
                  Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <a
                    href="#contact"
                    className="bg-blue-50 hover:bg-blue-100 transition-colors text-blue-600 font-medium py-2 md:py-3 px-4 rounded-lg text-center text-sm md:text-base"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#demo"
                    className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium py-2 md:py-3 px-4 rounded-lg text-center text-sm md:text-base"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;