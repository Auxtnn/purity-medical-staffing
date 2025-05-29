"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Shield, Award, Clock, Users, Zap, Star } from "lucide-react";

import { Card } from "../ui/card";

const coreValues = [
  {
    icon: <Heart size={32} className="text-primary" />,
    title: "Compassion First",
    description:
      "We lead with empathy—honoring the dignity of every patient and fostering relationships built on trust, compassion, and genuine care.",
    highlight: "Empathy-Driven Care",
  },
  {
    icon: <Shield size={32} className="text-primary" />,
    title: "Integrity Always",
    description:
      "We operate with full transparency, respect, and honesty—earning the trust of our partners and caregivers. We strive to exceed expectations in every placement, every time—because healthcare demands our best.",
    highlight: "Transparent Excellence",
  },
  {
    icon: <Clock size={32} className="text-primary" />,
    title: "Dependability That Delivers",
    description:
      "We are available around the clock to provide prompt, consistent support—because in healthcare, every moment matters, and every shift counts.",
    highlight: "24/7 Reliability",
  },
  {
    icon: <Zap size={32} className="text-primary" />,
    title: "Empowering Caregivers",
    description:
      "We uplift our professionals through recognition, growth opportunities, and a supportive environment.",
    highlight: "Professional Growth",
  },
  {
    icon: <Users size={32} className="text-primary" />,
    title: "Community-Centered Culture",
    description:
      "We're more than a staffing agency—we're cultivating a connected, purpose-driven community built on trust, collaboration, and mutual respect.",
    highlight: "United Purpose",
  },
];

const CoreValues = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // More lenient intersection observer options for mobile
  const isInView = useInView(ref, {
    once: true,
    amount: isMobile ? 0.1 : 0.2, // Lower threshold for mobile
    margin: isMobile ? "-10% 0px -10% 0px" : "0px", // Earlier trigger on mobile
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.12, // Faster on mobile
        delayChildren: isMobile ? 0.1 : 0.2, // Less delay on mobile
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 20 : 30, // Less movement on mobile
      scale: isMobile ? 0.98 : 0.95, // Less scale change on mobile
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.5 : 0.7, // Faster on mobile
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.6 : 0.8, ease: "easeOut" },
    },
  };

  // Fallback: show content without animation if not in view after timeout
  const [showFallback, setShowFallback] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isInView) {
        setShowFallback(true);
      }
    }, 2000); // Show content after 2 seconds regardless

    return () => clearTimeout(timer);
  }, [isInView]);

  const shouldAnimate = isInView || showFallback;

  return (
    <section className="py-20 bg-primary/10 relative overflow-hidden" ref={ref}>
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary/15 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/25 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary/20 rounded-full"></div>
      </div>

      <div className="container lg:w-11/12 px-4 mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          style={{ opacity: showFallback ? 1 : undefined }} // Fallback style
        >
          <div className="inline-flex items-center px-5 py-2 bg-white/80 backdrop-blur-sm text-primary rounded-full text-sm font-semibold mb-6 shadow-sm">
            <Star size={16} className="mr-2" />
            What Drives Us Forward
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Our Core
            <span className="text-primary block md:inline md:ml-3">Values</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At Purity Medical Staffing, these foundational principles guide
            every decision, every placement, and every relationship we build in
            the healthcare community.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          style={{ opacity: showFallback ? 1 : undefined }} // Fallback style
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                opacity: showFallback ? 1 : undefined,
                transform: showFallback
                  ? "translateY(0px) scale(1)"
                  : undefined,
              }} // Fallback style
            >
              <Card className="h-full p-8 hover:shadow-xl transition-all duration-500 flex flex-col group bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white hover:-translate-y-2 hover:shadow-2xl">
                {/* Icon and Highlight */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    {value.icon}
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full">
                    {value.highlight}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1 text-base">
                    {value.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote/Statement */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
          animate={
            shouldAnimate
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: isMobile ? 15 : 20 }
          }
          transition={{
            duration: isMobile ? 0.6 : 0.8,
            delay: isMobile ? 0.3 : 0.5,
          }}
          style={{
            opacity: showFallback ? 1 : undefined,
            transform: showFallback ? "translateY(0px)" : undefined,
          }} // Fallback style
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto border border-white/50">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed">
              "To be the trusted bridge between healthcare facilities and
              dedicated caregivers—delivering responsive, compassionate, and
              reliable staffing solutions that put people first."
            </blockquote>
            <div className="mt-6 flex items-center justify-center">
              <div className="w-16 h-0.5 bg-primary rounded-full"></div>
              <div className="mx-4 text-primary font-semibold">Our Mission</div>
              <div className="w-16 h-0.5 bg-primary rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
