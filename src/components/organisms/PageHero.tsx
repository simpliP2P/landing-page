"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../atoms/Container";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string | string[];
  highlightText?: string;
  height?: "small" | "medium" | "large" | "full";
  overlay?: "light" | "medium" | "dark";
  titleClassName?: string;
  subtitleClassName?: string;
  autoSlide?: boolean;
  slideDuration?: number;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  backgroundImage = "/procurement-1.webp",
  highlightText,
  height = "full",
  overlay = "dark",
  titleClassName = "",
  subtitleClassName = "",
  autoSlide = true,
  slideDuration = 2000,
}) => {
  const images = Array.isArray(backgroundImage)
    ? backgroundImage
    : [backgroundImage];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (autoSlide && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, slideDuration);

      return () => clearInterval(interval);
    }
  }, [autoSlide, images.length, slideDuration]);
  const heightClasses = {
    small: "h-64 md:h-80",
    medium: "h-96 md:h-[500px]",
    large: "h-[600px] md:h-[700px]",
    full: "h-screen",
  };

  const overlayClasses = {
    light: "bg-black/40",
    medium: "bg-black/60",
    dark: "bg-black/80",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const renderTitle = () => {
    if (highlightText && title.includes(highlightText)) {
      const parts = title.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className="text-primary">{highlightText}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section
      className={`relative flex flex-col items-center justify-center overflow-hidden ${heightClasses[height]}`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            variants={backgroundVariants}
            initial="hidden"
            animate="visible"
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Background ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full ${overlayClasses[overlay]}`}
      />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight ${titleClassName}`}
          >
            {renderTitle()}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed font-medium ${subtitleClassName}`}
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-primary rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="w-3 h-3 bg-secondary rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </Container>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${80 + Math.random() * 20}%`,
            }}
          />
        ))}
      </div>

      {height === "full" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PageHero;
