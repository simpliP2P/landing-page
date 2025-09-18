"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
} from "react-icons/fa";
import TeamMemberModal from "../../components/molecules/TeamMemberModal";
import PageHero from "../organisms/PageHero";
import Divider from "../atoms/Divider";

// Team members data with full bios
const teamMembers = [
  {
    name: "Olalekan",
    role: "Founder & CEO",
    image: "/Ola.jpg",
    description:
      "Olalekan is the visionary founder of SimpliP2P with over a decade of experience across global organizations. As a certified SAP MDG specialist, he has led complex data migration and system integration initiatives, bridging procurement strategy with data-driven execution.",
    fullBio: `
      <p>Olalekan is the visionary founder of SimpliP2P, Nigeria's innovative eProcurement solution transforming how businesses manage sourcing and supplier engagement. With over a decade of hands-on experience across global organizations, Olalekan possesses deep, end-to-end knowledge of procurement and supply chain data management from a technical and operational standpoint.</p>
      <p>As a certified SAP Master Data Governance (MDG) specialist, he has led complex data migration, governance, and system integration initiatives—bridging procurement strategy with data-driven execution. His career spans major implementations involving S/4HANA, ECC, Oracle EBS, and Dynamics 365, where he engineered master data frameworks across P2P lifecycles, ensuring compliance, integrity, and business efficiency.</p>
      <p>At the heart of SimpliP2P is Olalekan's commitment to re-engineering procurement through intelligent automation, transparency, and scalable digital infrastructure tailored for African markets.</p>
    `,
  },
  {
    name: "Banke",
    role: " Board Member ",
    image: "/Banke.jpg",
    description:
      "Banke Shaba is a certified Co -founder, ACCA part-qualified, with a master’s degree and over 10 years of experience delivering finance transformation across FMCG, pharmaceuticals, manufacturing, the public sector, financial institutions, and retail",
    fullBio: `
      <p>Her expertise spans the full S/4HANA lifecycle, with a strong focus on go-to-market delivery and transformation in the areas of Procure-to-Pay (P2P), Order-to-Cash (OTC), and banking. She has deep experience in core finance modules, credit management, budgeting, forecasting, reporting, and data migration, as well as SAP Public Cloud, FI-CA for public sector rent collection, and bank connectivity solution</p>
      <p>Banke is known for translating complex business requirements into practical SAP solutions that modernise finance operations, improve compliance, and deliver measurable value.</p>    `,
  },
  {
  name: "Motunrayo",
  role: "Board Member",
  image: "/Mo.png",
  description:
    "Motunrayo Ologunwa (Mo) is a skilled MI/SAP Analyst with expertise in implementing and optimizing SAP solutions to enhance efficiency, streamline operations, and deliver actionable insights.",
  fullBio: `
    <p>Mo leverages a unique blend of technical SAP expertise and Management Information (MI) analysis to help organizations transform complex data into strategic insights. Her specialization covers:</p>
    <ul>
      <li>Business process analysis and re-engineering</li>
      <li>SAP configuration, testing, and deployment</li>
      <li>Customized reporting and dashboards for decision-making</li>
      <li>End-user support and training</li>
    </ul>
    <p>Her deep understanding of SAP module integration enables the design of holistic solutions that drive growth and optimize performance. For a consultation on leveraging data and SAP systems effectively, connect with Mo Ologunwa.</p>
  `,
},

  {
    name: "Anjola",
    role: "Chief Technology Officer",
    image: "/Anjola.jpg",
    description:
      "Anjola leads the technology strategy for SimpliP2P, architecting scalable procurement solutions that optimize user workflows while ensuring robust functionality for vendor management, sourcing, and compliance.",
    fullBio: `
      <p>As Chief Technology Officer at SimpliP2P, Anjola drives the strategic vision and technical development of our procurement platform. He excels at designing scalable systems that meet the complex needs of procurement teams while delivering secure and efficient digital solutions.</p>
      <p>Anjola oversees platform architecture, engineering execution, and technical innovation, ensuring that every feature is reliable, performant, and aligned with business goals. He collaborates closely with product and business teams to translate customer needs into high-quality, future-proof technology solutions.</p>
      <p>With a focus on continuous improvement, Anjola monitors platform performance, integrates user feedback, and identifies opportunities to enhance SimpliP2P’s capabilities, delivering procurement workflows that are efficient, transparent, and user-friendly.</p>
    `,
  },
  {
    name: "Dolapo",
    role: "Head of Marketing",
    image: "/dolapo.png",
    description:
      "Dolapo leads our marketing initiatives, crafting compelling narratives about SimpliP2P's value proposition. She develops targeted campaigns that resonate with procurement professionals across Nigerian industries, driving awareness and adoption of our platform.",
    fullBio: `
      <p>As Head of Marketing at SimpliP2P, Dolapo is responsible for building our brand presence across the Nigerian procurement landscape. She develops comprehensive marketing strategies that highlight how our platform addresses the unique challenges of local businesses.</p>
      <p>Dolapo creates educational content that showcases the benefits of digital procurement transformation, from cost savings to operational efficiency. She works closely with sales to develop messaging that resonates with key decision-makers in finance, procurement, and operations.</p>
      <p>Through market research and industry analysis, Dolapo ensures that SimpliP2P's positioning remains relevant and compelling in Nigeria's evolving business environment. Her campaigns focus on building awareness, generating qualified leads, and supporting customer retention efforts.</p>
    `,
  },
];

export default function AboutPage() {
  // State to control the modal
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member: (typeof teamMembers)[0]) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="font-montserrat">
      <main>
        <div className="min-h-screen">
          <PageHero
            title="About SimpliP2P"
            subtitle="Transforming procurement in Nigeria through digital innovation"
            highlightText="SimpliP2P"
            backgroundImage={[
              "/procurement-3.webp",
              "/procurement-2.jpg",
              "/procurement-3.webp",
            ]}
            height="full"
            overlay="dark"
            autoSlide={true}
            slideDuration={6000}
          />

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
                      SimpliP2P was born from a simple yet powerful idea: to
                      transform the traditional procurement landscape in Nigeria
                      by harnessing the power of digital innovation. Rooted in
                      deep industry experience and a firm understanding of local
                      procurement challenges, we set out to streamline the
                      Procure-to-pay (P2P) process through a secure,
                      user-centric, and transparent platform.
                    </p>
                    <p className="text-base md:text-lg">
                      Our name, SimpliP2P—short for Simplified
                      Procure-to-Pay—embodies our mission: to simplify how
                      businesses manage procurement by eliminating
                      inefficiencies, reducing manual paperwork, and promoting
                      vendor inclusivity.
                    </p>
                    <p className="text-base md:text-lg">
                      At SimpliP2P, we bridge the gap between public and private
                      sector buyers and their suppliers through a robust
                      eProcurement solution designed specifically for
                      Nigeria&apos;s evolving business environment.
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
                      src="/procurement-3.webp"
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
                      <h4 className="font-bold text-gray-900">
                        Local Innovation
                      </h4>
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
                      What sets us apart is our local-first approach. We
                      don&apos;t just replicate foreign models; we innovate with
                      the Nigerian context at heart. Our solution empowers
                      procurement teams to do more with less—faster, smarter,
                      and with full accountability.
                    </p>
                    <p className="text-base md:text-lg">
                      Our platform supports strategic sourcing, automated
                      approvals, vendor onboarding, compliance tracking, and
                      end-to-end transparency—helping organizations make
                      informed decisions while staying fully audit-ready.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {[
                      {
                        icon: <FaHandshake className="text-blue-500" />,
                        text: "Local Partnerships",
                      },
                      {
                        icon: <FaGlobe className="text-blue-500" />,
                        text: "Nigerian Market Expertise",
                      },
                      {
                        icon: <FaCheckCircle className="text-blue-500" />,
                        text: "Compliance-Focused",
                      },
                      {
                        icon: <FaLightbulb className="text-blue-500" />,
                        text: "Innovative Solutions",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm"
                      >
                        <div className="text-xl">{item.icon}</div>
                        <p className="font-medium text-sm text-gray-800">
                          {item.text}
                        </p>
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
                <Divider/>
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
                    To be Nigeria&apos;s most trusted eProcurement solution,
                    enabling efficient, fair, and transparent procurement for
                    organizations of all sizes.
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
                    To digitize and optimize the procurement process through
                    intuitive technology that enhances value, promotes
                    integrity, and drives measurable business results.
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
                    description:
                      "We uphold the highest ethical standards in all our actions and decisions.",
                  },
                  {
                    icon: "/icon-innovation.svg",
                    title: "Innovation",
                    description:
                      "We constantly seek better solutions to Nigeria's procurement challenges.",
                  },
                  {
                    icon: "/icon-transparency.svg",
                    title: "Transparency",
                    description:
                      "We believe in clear, honest communication with all stakeholders.",
                  },
                  {
                    icon: "/icon-excellence.svg",
                    title: "Excellence",
                    description:
                      "We strive for perfection in our platform, service, and support.",
                  },
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
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
                  Our diverse team of experts is committed to revolutionizing
                  Nigeria&apos;s procurement landscape
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
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
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {member.description}
                      </p>
                      <button
                        onClick={() => openModal(member)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors flex items-center"
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
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
                  Connect with our team to learn how SimpliP2P can help your
                  organization
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

      {/* Team Member Modal */}
      {selectedMember && (
        <TeamMemberModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          member={selectedMember}
        />
      )}
    </div>
  );
}
