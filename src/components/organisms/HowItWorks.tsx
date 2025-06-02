import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { stepItems } from '@/lib/constant'
import { FaCheckCircle } from 'react-icons/fa'
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Getting Started is Easy</h2>
        <div className="w-16 md:w-24 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start md:items-center">
        {/* Steps - adjust width for mobile */}
        <div className="space-y-8 md:space-y-12 order-2 md:order-1">
          {stepItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-4 sm:p-6 w-full sm:w-[85%] md:w-[70%] rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-primary"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-base md:text-lg font-bold mb-3 md:mb-4">{item.step}</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
              <p className="text-gray-600 text-[14px] md:text-[15px]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Image - position for mobile */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative order-1 md:order-2 mb-8 md:mb-0"
        >
          <Image
            src="/how.png"
            alt="How It Works"
            width={600}
            height={600}
            className="w-full h-auto rounded-lg"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 600px"
          />
          
          {/* Adjust the floating element for mobile */}
          <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 bg-white shadow-xl rounded-2xl p-4 md:p-6 max-w-[180px] md:max-w-xs">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-green-100 flex items-center justify-center">
                <FaCheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm md:text-base">Results</h4>
            </div>
            <ul className="space-y-2">
              {["30% reduction in processing time", "25% cost savings", "99% compliance rate"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 text-xs md:text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default HowItWorks