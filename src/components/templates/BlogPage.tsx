"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendar, FaUser, FaClock } from "react-icons/fa";
import PageHero from "../organisms/PageHero";
import { blogPosts } from "@/lib/constant";

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<
    (typeof blogPosts)[0] | null
  >(null);
  const [visitedPosts, setVisitedPosts] = useState<number[]>([]);

  const handlePostClick = (post: (typeof blogPosts)[0]) => {
    setSelectedPost(post);
    if (!visitedPosts.includes(post.id)) {
      setVisitedPosts((prev) => [...prev, post.id]);
    }
  };

  // Helper function to check if content is structured or HTML string
  const isStructuredContent = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
  ): content is {
    introduction: string;
    sections: Array<{
      title: string;
      content?: string;
      points?: string[];
      subsections?: Array<{
        title: string;
        content?: string;
        points?: string[];
      }>;
    }>;
    conclusion: string;
  } => {
    return content && typeof content === "object" && "introduction" in content;
  };

  return (
    <div className="min-h-screen bg-tertiary">
      <PageHero
        title="Procurement Blog"
        subtitle="Latest insights and best practices"
        backgroundImage="/procurement-1.webp"
        height="medium"
        overlay="dark"
      />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Left Sidebar - Latest Blog Links */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 lg:sticky lg:top-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Latest Articles
              </h3>
              <nav className="space-y-2 md:space-y-3">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className={`block w-full text-left cursor-pointer p-2 md:p-3 rounded-lg transition-colors hover:bg-gray-50 border-l-4 ${
                      selectedPost?.id === post.id
                        ? "border-primary bg-primary/5"
                        : "border-transparent"
                    } ${
                      visitedPosts.includes(post.id)
                        ? "text-purple-600 visited:text-purple-800"
                        : "text-blue-600 hover:text-blue-800"
                    }`}
                  >
                    <div className="text-sm font-medium line-clamp-2 mb-1">
                      {post.title}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <article className="lg:col-span-3 order-1 lg:order-2">
            {selectedPost ? (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-80">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <div className="mb-2">
                      <span className="bg-primary px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                        {selectedPost.category}
                      </span>
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 leading-tight">
                      {selectedPost.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-white/90 text-xs md:text-sm">
                      <div className="flex items-center gap-1 md:gap-2">
                        <FaUser size={12} />
                        <span>{selectedPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <FaCalendar size={12} />
                        <span>
                          {new Date(selectedPost.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <FaClock size={12} />
                        <span>{selectedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="max-w-none">
                    {/* Check if content is structured object or HTML string */}
                    {isStructuredContent(selectedPost.content) ? (
                      <>
                        {/* Introduction */}
                        {selectedPost.content.introduction && (
                          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                            {selectedPost.content.introduction}
                          </p>
                        )}

                        {/* Sections */}
                        {selectedPost.content.sections &&
                          selectedPost.content.sections.map(
                            (section, index) => (
                              <div key={index} className="mb-8">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
                                  {section.title}
                                </h2>

                                {section.content && (
                                  <p className="text-gray-700 leading-relaxed mb-4">
                                    {section.content}
                                  </p>
                                )}

                                {section.points &&
                                  section.points.length > 0 && (
                                    <ul className="space-y-2 mb-4">
                                      {section.points.map(
                                        (point, pointIndex) => (
                                          <li
                                            key={pointIndex}
                                            className="text-gray-700 leading-relaxed flex items-start"
                                          >
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {point}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}

                                {section.subsections &&
                                  section.subsections.length > 0 && (
                                    <div className="space-y-6">
                                      {section.subsections.map(
                                        (subsection, subIndex) => (
                                          <div key={subIndex} className="ml-4">
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">
                                              {subsection.title}
                                            </h3>

                                            {subsection.content && (
                                              <p className="text-gray-700 leading-relaxed mb-4">
                                                {subsection.content}
                                              </p>
                                            )}

                                            {subsection.points &&
                                              subsection.points.length > 0 && (
                                                <ul className="space-y-2 mb-4">
                                                  {subsection.points.map(
                                                    (point, pointIndex) => (
                                                      <li
                                                        key={pointIndex}
                                                        className="text-gray-700 leading-relaxed flex items-start"
                                                      >
                                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                                        {point}
                                                      </li>
                                                    )
                                                  )}
                                                </ul>
                                              )}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            )
                          )}

                        {/* Conclusion */}
                        {selectedPost.content.conclusion && (
                          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              Conclusion
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {selectedPost.content.conclusion}
                            </p>
                          </div>
                        )}
                      </>
                    ) : (
                      /* Fallback for old HTML content */
                      <div
                      />
                    )}
                  </div>

                  {/* Back to articles button for mobile */}
                  <div className="mt-8 lg:hidden">
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="w-full bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      ← Back to Articles
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <header className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-primary rounded"></div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                      Featured Articles
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                      Click on any article from the sidebar to read the full
                      content
                    </p>
                  </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {blogPosts.slice(0, 4).map((post) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden group"
                      onClick={() => handlePostClick(post)}
                    >
                      <div className="relative h-40 sm:h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-primary text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 md:p-6">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-3 md:mb-4 line-clamp-2 text-sm">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="flex items-center gap-1">
                              <FaUser size={10} />
                              <span className="hidden sm:inline">
                                {post.author.split(" ")[0]}
                              </span>
                              <span className="sm:hidden">
                                {post.author.split(" ")[0].slice(0, 6)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaClock size={10} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <span className="text-xs">
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* More Articles List */}
                <div className="mt-8 md:mt-12">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                    More Articles
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    {blogPosts.slice(4).map((post) => (
                      <div
                        key={post.id}
                        onClick={() => handlePostClick(post)}
                        className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 border-primary"
                      >
                        <div className="flex items-start gap-3 md:gap-4">
                          <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 hover:text-primary transition-colors text-sm md:text-base line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-1">
                              {post.excerpt}
                            </p>
                            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs text-gray-500">
                              <span className="truncate">{post.author}</span>
                              <span className="hidden sm:inline">•</span>
                              <span>
                                {new Date(post.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                    year: "2-digit",
                                  }
                                )}
                              </span>
                              <span className="hidden sm:inline">•</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simple CTA */}
                <div className="bg-primary rounded-lg p-6 md:p-8 text-white text-center mt-8 md:mt-12">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="mb-4 md:mb-6 opacity-90 text-sm md:text-base">
                    Transform your procurement processes with SimpliP2P
                  </p>
                  <div
                    onClick={() =>
                      window.open(
                        "https://app.simplip2p.com/book-a-demo",
                        "_blank"
                      )
                    }
                    className="bg-white text-primary px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block cursor-pointer text-sm md:text-base"
                  >
                    Book a Demo
                  </div>
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
