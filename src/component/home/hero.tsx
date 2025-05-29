// components/home/hero.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Users,
  Award,
  Shield,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";

const Hero = () => {
  // Floating animation for decorative elements
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const floatingElements = document.querySelectorAll(".floating-element");

      floatingElements.forEach((element, index) => {
        const speed = 0.2 + index * 0.05;
        (element as HTMLElement).style.transform = `translateY(${
          scrollY * speed * -1
        }px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trustIndicators = [
    {
      icon: <Shield size={20} className="text-white" />,
      text: "Fully Licensed & Insured",
    },
    {
      icon: <Award size={20} className="text-white" />,
      text: "JCAHO Compliant",
    },
    {
      icon: <Users size={20} className="text-white" />,
      text: "24/7 Support Available",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/flower.jpg"
          alt="Serene healthcare environment"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Multi-layered Gradient Overlay - Darker for better text visibility */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-accent/5"></div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="floating-element absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content - Centralized */}
      <div className="relative py-28 z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto space-y-8"
          >
            {/* Premium Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                <Heart size={18} className="text-white mr-3" />
                <span className="text-white font-semibold text-sm tracking-wide">
                  Trusted Healthcare Staffing Partner
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Building <span className="text-white">Healthier</span>{" "}
                Communities
              </h1>
              <div className="relative">
                <p className="text-2xl md:text-3xl text-white/90 font-light">
                  One member at a time
                </p>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Your partner in providing quality care. We connect exceptional
                healthcare professionals with facilities that need them most,
                ensuring continuity of care and excellence in patient outcomes.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Button
                  href="/jobs"
                  size="lg"
                  variant="primary"
                  className="font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                >
                  Find Healthcare Jobs
                </Button>
                <Button
                  href="/for-facilities"
                  size="lg"
                  variant="outline"
                  className="font-semibold border-2 border-white text-white  hover:text-primary transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  Hire Professionals
                </Button>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap justify-center gap-4 pt-8">
                {trustIndicators.map((indicator, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg"
                  >
                    {indicator.icon}
                    <span className="text-white font-medium text-sm ml-2">
                      {indicator.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sophisticated Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="sophisticatedGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
              <stop offset="50%" stopColor="rgba(255,255,255,1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.95)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#sophisticatedGradient)"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
