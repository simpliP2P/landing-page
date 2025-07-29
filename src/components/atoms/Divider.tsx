"use client";

import { motion } from "framer-motion";

interface DividerProps {
  width?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "white";
  delay?: number;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  width = "md",
  color = "primary",
  delay = 0.1,
  className = "",
}) => {
  const widthClasses = {
    sm: "w-8 md:w-12",
    md: "w-16 md:w-24",
    lg: "w-24 md:w-32",
    xl: "w-32 md:w-40",
  };

  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    white: "bg-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={`${widthClasses[width]} h-1 ${colorClasses[color]} mx-auto ${className}`}
    />
  );
};

export default Divider;
