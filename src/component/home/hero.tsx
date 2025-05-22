// components/home/hero.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Users, Award, Shield, Heart } from "lucide-react";

const Hero = () => {
  // Floating animation for decorative elements
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const floatingElements = document.querySelectorAll(".floating-element");

      floatingElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
        (element as HTMLElement).style.transform = `translateY(${
          scrollY * speed * -1
        }px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Users size={20} className="text-primary" />,
      text: "1,250+ Healthcare Professionals",
    },
    {
      icon: <Award size={20} className="text-primary" />,
      text: "98% Satisfaction Rate",
    },
    {
      icon: <Shield size={20} className="text-primary" />,
      text: "Fully Vetted & Certified",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="floating-element absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
        <div className="floating-element absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl"></div>

        {/* Geometric Shapes */}
        <div className="floating-element absolute top-1/4 right-1/4 w-4 h-4 bg-primary/20 rotate-45"></div>
        <div className="floating-element absolute top-1/3 left-1/4 w-6 h-6 bg-accent/20 rounded-full"></div>
        <div className="floating-element absolute bottom-1/3 right-1/3 w-3 h-3 bg-primary/30 rotate-45"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #0EA5E9 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:w-11/12 px-4 mx-auto items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <Heart size={16} className="text-primary mr-2" />
                <span className="text-primary font-medium text-sm">
                  Trusted Healthcare Staffing Partner
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Healthier
                </span>{" "}
                Communities
              </h1>
              <div className="mt-4">
                <span className="text-2xl md:text-3xl text-text-light font-light">
                  One Member at a Time
                </span>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-text-light leading-relaxed max-w-xl"
            >
              Your partner in providing quality care. We connect exceptional
              healthcare professionals with facilities that need them most,
              ensuring continuity of care and excellence in patient outcomes.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 relative z-30"
            >
              <Button
                href="/jobs"
                size="lg"
                variant="primary"
                className="font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Find Healthcare Jobs
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                href="/for-facilities"
                size="lg"
                variant="outline"
                className="font-medium"
              >
                Hire Professionals
              </Button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-light px-4 py-2 rounded-full border border-gray-medium/50"
                >
                  {feature.icon}
                  <span className="ml-2 text-sm font-medium text-text">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/1.jpg"
                  alt="Healthcare professionals providing excellent care"
                  fill
                  priority
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-medium/20"
              >
                <div className="text-2xl font-bold text-primary">175+</div>
                <div className="text-sm text-text-light">
                  Partner Facilities
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-medium/20"
              >
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-text-light">Support Available</div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="50%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#F8FAFC" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,69.3C672,64,768,64,864,69.3C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
