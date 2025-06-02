import { featureItems } from '@/lib/constant'
import React from 'react'
import { motion } from 'framer-motion'
const Features = () => {
  return (
    <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6 md:mb-10 max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Transform Your Procurement Operations</h2>
                <p className="text-lg md:text-xl text-gray-600">
                Our end-to-end procurement platform reduces costs by 25%, cuts processing time by 30%, and delivers 99% compliance - all while simplifying every step from requisition to payment.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
                {featureItems.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100"
                  >
                    <div className={`mb-4 p-3 rounded-full bg-gray-100 inline-block ${feature.color}`}>
                      (feature.icon)
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{feature.title}</h3>
                    <p className="text-[#808080] font-medium text-[15px] md:text-[17px] leading-6">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
  )
}

export default Features