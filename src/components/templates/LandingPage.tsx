"use client";
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent, FormEvent, JSX } from "react";
import Image from "next/image";
import { FaCheckCircle, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import FullScreenLoader from '../organisms/FullScreenLoader';
import Header from '../Layouts/Header';
import FAQ from '../organisms/FAQ';
import Button from '../atoms/Button';
import Footer from '../Layouts/Footer';

// Define types for form data
interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

// Define types for feature items
interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Define types for how it works steps
interface StepItem {
  title: string;
  step: string;
  description: string;
}

export default function LandingPage(): JSX.Element {
  const [loading, setIsLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const router = useRouter();
  
  // Fix loader - set loading to false after content is ready
  useEffect(() => {
    // Simulate content loading with images preload
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = (): void => {
    router.push('https://simplip2p.vercel.app/register');
  };

  const handleHowItWorks = (): void => {
    const element = document.getElementById('how-it-works');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle form input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the data to your API
    console.log('Form submitted:', formData);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      // Show success message or redirect
      alert('Demo request submitted successfully!');
    }, 1500);
  };

  if (loading) return <FullScreenLoader />;

  // Feature items data
  const featureItems: FeatureItem[] = [
    {
      icon: <FaChartLine className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Cost Optimization",
      description: "Gain insights into spending patterns and identify cost-saving opportunities with powerful analytics dashboards."
    },
    {
      icon: <FaCheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
      title: "Approval Workflows",
      description: "Configure custom approval workflows to ensure compliance with your organization's procurement policies."
    },
    {
      icon: <FaShieldAlt className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />,
      title: "Vendor Management",
      description: "Centralize vendor information, track performance metrics, and streamline supplier relationship management."
    }
  ];

  // How it works steps data
  const stepItems: StepItem[] = [
    {
      title: "Create an Account",
      step: "Step 1",
      description: "Register your organization and set up your procurement team with role-based access controls."
    },
    {
      title: "Configure Workflows",
      step: "Step 2",
      description: "Set up approval processes, spending limits, and integration with your existing systems."
    },
    {
      title: "Start Managing Procurement",
      step: "Step 3",
      description: "Process purchase requisitions, manage vendors, and gain insights through comprehensive reporting."
    }
  ];

  return (
    <div className="font-montserrat">
      <main>
        <div className="min-h-screen">
          <Header />
          
          {/* Hero Section - Improved for responsiveness */}
          <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/hero-bg.png"
                alt="Background Pattern"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Hero Text - improved spacing and typography for mobile */}
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
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
                  >
                    Streamline Your <span className="text-blue-400">Procurement</span> Process
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed"
                  >
                    Seamless & Secure P2P Transactions – Anytime, Anywhere!
                  </motion.p>
                  
                  {/* Improved button layout for mobile */}
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
                    <button
                      onClick={handleHowItWorks}
                      className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-6 sm:px-10 py-3 flex justify-center items-center rounded-lg text-sm sm:text-base font-semibold transition-all"
                    >
                      <span>How It Works</span> 
                    </button>
                  </motion.div>
                  
                  {/* Better layout for mobile features */}
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
                
                {/* Hero Image - better mobile rendering */}
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
                  
                  {/* Adjust badge positions for mobile */}
                  <div className="absolute -top-3 -right-2 md:-top-4 md:-right-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-xs py-1 px-2 md:px-3 rounded-full shadow-lg">
                    Enterprise Ready
                  </div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 bg-gradient-to-br from-amber-500 to-amber-700 text-white text-xs py-1 px-2 md:px-3 rounded-full shadow-lg">
                    Cost-Effective
                  </div>
                </motion.div>
              </div>
              
              {/* Trusted by section - improve spacing */}
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
          
          {/* Features Highlights - make cards responsive */}
          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Transform Your Procurement Operations</h2>
                <p className="text-lg md:text-xl text-gray-600">
                  Our platform provides everything you need to streamline purchases, manage suppliers, and drive cost savings.
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
                    <div className="mb-4 p-3 rounded-full bg-gray-100 inline-block">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{feature.title}</h3>
                    <p className="text-[#808080] font-medium text-[15px] md:text-[17px] leading-6">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section - improve mobile layout */}
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

          {/* FAQ Section */}
          <FAQ />

          {/* Demo Request Section - improve form responsiveness */}
          <section className="py-16 md:py-24 bg-primary">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-xs md:text-sm font-medium mb-2">
                    Get a Personalized Demo
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Ready to Transform Your Procurement Process?</h2>
                  <p className="text-lg md:text-xl text-slate-300">
                    See how our platform can drive efficiency and cost savings for your organization
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-5 sm:p-8 border border-white/20">
                  <form onSubmit={handleSubmitForm} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-white mb-1 md:mb-2">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 text-sm md:text-base"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-white mb-1 md:mb-2">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 text-sm md:text-base"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-white mb-1 md:mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 text-sm md:text-base"
                        placeholder="Your organization name"
                        required
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-white mb-1 md:mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 text-sm md:text-base"
                        placeholder="Your contact number"
                      />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-medium text-white mb-1 md:mb-2">How can we help?</label>
                      <textarea
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 text-sm md:text-base"
                        placeholder="Tell us about your procurement needs..."
                        required
                      />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full ${isSubmitting ? 'bg-blue-700' : 'bg-primary hover:bg-blue-600'} flex justify-center items-center text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold transition-colors shadow-lg shadow-blue-500/30`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Request Your Demo'}
                      </Button>
                      <p className="text-center mt-3 text-xs md:text-sm text-slate-400">
                        We&apos;ll get back to you within 24 hours
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}