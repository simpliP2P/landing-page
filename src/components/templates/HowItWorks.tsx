"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import PageHero from "../organisms/PageHero";
import { sections } from "@/lib/constant";
import Button from "../atoms/Button";

const HowItWorksPage = () => {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState("purchase-order");

  useEffect(() => {
    const section = searchParams.get("section");
    if (section && sections.find((s) => s.id === section)) {
      setActiveSection(section);
    }
  }, [searchParams]);

  const currentSection = sections.find(
    (section) => section.id === activeSection
  );

  return (
    <article className="min-h-screen bg-tertiary relative">
      <PageHero
        title="How SimpliP2P Works"
        subtitle="Discover how our comprehensive procurement platform transforms your business processes"
        backgroundImage={[
          "/procurement-1.webp",
          "/procurement-2.jpg",
          "/procurement-3.webp",
        ]}
        height="full"
        overlay="dark"
        titleClassName="text-4xl md:text-5xl"
        subtitleClassName="text-lg md:text-xl"
        autoSlide={true}
        slideDuration={2000}
      />

          <div className="flex flex-col lg:flex-row gap-8 mx-auto w-full px-12 py-10 h-full">
            <aside className="lg:w-1/4">
              <div className="sticky top-32">
                <h3 className="text-xl font-bold text-primary  mb-4">
                  Procurement Modules
                </h3>
                <nav className="flex flex-col sticky top-1 z-50">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left p-1 cursor-pointer rounded-lg transition-colors flex items-center gap-3 ${
                        activeSection === section.id
                          ? "text-primary font-bold"
                          : "text-black hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-sm">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content Area */}
            <div className="lg:w-3/4">
              {currentSection && (
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-lg p-10"
                >
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-primary">
                        {currentSection.title}
                      </h2>
                      <p className="text-primary">
                        {currentSection.content.overview}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {currentSection.content.features.map(
                          (feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                        Benefits
                      </h3>
                      <ul className="space-y-3">
                        {currentSection.content.benefits.map(
                          (benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* How It Works Process */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                      How It Works
                    </h3>
                    <div className="grid md:grid-cols-5 gap-4">
                      {currentSection.content.howItWorks.map((step, index) => (
                        <div key={index} className="text-center">
                          <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                            {index + 1}
                          </div>
                          <p className="text-sm text-primary/80 font-medium">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-blue-100 rounded-lg">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        Ready to transform your{" "}
                        {currentSection.title.toLowerCase()}?
                      </h4>
                      <p className="text-gray-600 mb-4">
                        See how SimpliP2P can streamline your procurement
                        processes
                      </p>
                      <div className="flex justify-center items-center w-full">
                        <Button
                          onClick={() =>
                            window.open(
                              "https://app.simplip2p.com/book-a-demo",
                              "_blank"
                            )
                          }
                          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        >
                          Book a Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
    </article>
  );
};

export default HowItWorksPage;
