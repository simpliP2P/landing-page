"use client";
import { useState, useEffect, JSX } from "react";
import FullScreenLoader from '../organisms/FullScreenLoader';
import FAQ from '../organisms/FAQ';
import HowItWorks from '../organisms/HowItWorks';
import Features from '../organisms/Features';
import HeroSection from '../organisms/HeroSection';

export default function LandingPage(): JSX.Element {
  const [loading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <FullScreenLoader />;

  return (
    <main className="font-montserrat min-h-screen text-tertiary font-bold text-xl">
           <HeroSection/>  
            <Features />  
            <HowItWorks />      
            <FAQ />
    </main>
  );
}