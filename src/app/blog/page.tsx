import React from "react";
import type { Metadata } from "next";
import BlogPage from "@/components/templates/BlogPage";

export const metadata: Metadata = {
  title: "SimpliP2P | Procurement Blog",
  description:
    "Stay updated with the latest trends, insights, and best practices in procurement and supply chain management.",
  keywords:
    "procurement blog, supply chain, purchasing, vendor management, Nigeria procurement",
};

const page = () => {
  return <BlogPage />;
};

export default page;
