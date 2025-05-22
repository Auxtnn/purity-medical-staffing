"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Mock articles data
const articles = [
  {
    id: 1,
    title: "The Future of Healthcare Staffing: Trends to Watch in 2025",
    excerpt:
      "Explore the latest trends shaping healthcare staffing, from technology integration to changing workforce expectations.",
    category: "Industry Insights",
    readTime: "5 min read",
    publishDate: "May 15, 2025",
    image: "/images/4.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "How to Maintain Work-Life Balance as a Travel Nurse",
    excerpt:
      "Practical tips for travel nurses to stay connected with family while advancing their careers on the road.",
    category: "Career Development",
    readTime: "4 min read",
    publishDate: "May 10, 2025",
    image: "/images/1.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Essential Certifications for Advancing Your Nursing Career",
    excerpt:
      "A comprehensive guide to the most valuable certifications that can boost your nursing career prospects.",
    category: "Education",
    readTime: "7 min read",
    publishDate: "May 5, 2025",

    image: "/images/1.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Addressing Staffing Shortages: Solutions for Healthcare Facilities",
    excerpt:
      "Strategic approaches healthcare facilities can implement to address staffing challenges effectively.",
    category: "Facility Management",
    readTime: "6 min read",
    publishDate: "April 28, 2025",
    image: "/images/2.jpg",
    featured: false,
  },
];

const ArticlesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const featuredArticle = articles.find((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section ref={ref}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold text-lg mb-2 block">
          Latest Articles
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Healthcare Insights & Career Guidance
        </h2>
        <p className="text-gray text-lg">
          Stay informed with the latest trends, tips, and insights from the
          healthcare industry. Our articles cover everything from career
          development to industry best practices.
        </p>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="primary">Featured</Badge>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-3">
                <Badge variant="outline">{featuredArticle.category}</Badge>
                <div className="flex items-center text-gray text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>{featuredArticle.publishDate}</span>
                </div>
                <div className="flex items-center text-gray text-sm">
                  <Clock size={14} className="mr-1" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {featuredArticle.title}
              </h3>
              <p className="text-gray mb-6">{featuredArticle.excerpt}</p>

              <Link
                href={`/resources/articles/${featuredArticle.id}`}
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Read Full Article
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* Regular Articles Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {regularArticles.map((article, index) => (
          <motion.div key={article.id} variants={itemVariants}>
            <Link
              href={`/resources/articles/${article.id}`}
              className="block group"
            >
              <Card className="h-full overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="py-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" size="sm">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-gray text-xs">
                      <Clock size={12} className="mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray text-sm mb-4">{article.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray text-xs">
                      <Calendar size={12} className="mr-1" />
                      <span>{article.publishDate}</span>
                    </div>

                    <span className="text-primary text-sm font-medium flex items-center">
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-12">
        <p className="text-gray mb-6">
          Want to stay updated with our latest articles and insights?
        </p>
        <Link href="/contact">
          <motion.button
            className="btn btn-primary btn-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Subscribe to Our Newsletter
          </motion.button>
        </Link>
      </div>
    </Section>
  );
};

export default ArticlesSection;
