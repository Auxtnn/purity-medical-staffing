"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";
import {
  Users,
  Building,
  Award,
  Clock,
  Shield,
  Heart,
  CheckCircle,
  Star,
} from "lucide-react";
import { Button } from "../ui/button";

// Updated stats data without figures
const statsData = [
  {
    icon: <Users size={32} className="text-primary" />,
    title: "Healthcare Professionals",
    description:
      "Qualified and verified caregivers ready to serve your facility with excellence and compassion",
    features: ["Rigorous screening", "Continuous training", "24/7 support"],
  },
  {
    icon: <Building size={32} className="text-primary" />,
    title: "Partner Facilities",
    description:
      "Healthcare organizations that trust our comprehensive staffing solutions nationwide",
    features: ["Hospitals & clinics", "Long-term care", "Specialized units"],
  },
  {
    icon: <Award size={32} className="text-primary" />,
    title: "Quality Assurance",
    description:
      "Exceptional satisfaction rates from both facilities and healthcare professionals",
    features: [
      "Quality guarantee",
      "Performance tracking",
      "Continuous improvement",
    ],
  },
  {
    icon: <Clock size={32} className="text-primary" />,
    title: "Always Available",
    description:
      "Our dedicated support team is here when you need us most, around the clock",
    features: ["Emergency coverage", "Real-time support", "Rapid response"],
  },
];

const achievements = [
  {
    icon: <Shield size={24} className="text-primary" />,
    title: "Fully Licensed & Insured",
    description: "Complete compliance and protection for all partnerships",
  },
  {
    icon: <Heart size={24} className="text-primary" />,
    title: "Compassionate Care Focus",
    description: "Every placement prioritizes patient care excellence",
  },
  {
    icon: <CheckCircle size={24} className="text-primary" />,
    title: "Proven Track Record",
    description: "Consistent delivery of reliable staffing solutions",
  },
  {
    icon: <Star size={24} className="text-primary" />,
    title: "Industry Recognition",
    description: "Trusted by healthcare leaders across the nation",
  },
];

const StatsSection = () => {
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
        staggerChildren: isMobile ? 0.1 : 0.15, // Faster on mobile
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
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          style={{ opacity: showFallback ? 1 : undefined }} // Fallback style
        >
          <div className="inline-flex items-center px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <Award size={16} className="mr-2" />
            Excellence in Healthcare Staffing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Our Impact in
            <span className="text-primary block md:inline md:ml-3">
              Healthcare
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            As we continue to grow, so does our ability to make a meaningful
            difference in the communities we serve. Here's what sets us apart in
            healthcare staffing.
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          style={{ opacity: showFallback ? 1 : undefined }} // Fallback style
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              style={{
                opacity: showFallback ? 1 : undefined,
                transform: showFallback
                  ? "translateY(0px) scale(1)"
                  : undefined,
              }} // Fallback style
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:border-primary/20">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {stat.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {stat.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {stat.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Bottom accent */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 mb-16"
          initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
          animate={
            shouldAnimate
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: isMobile ? 15 : 20 }
          }
          transition={{
            duration: isMobile ? 0.6 : 0.8,
            delay: isMobile ? 0.2 : 0.4,
          }}
          style={{
            opacity: showFallback ? 1 : undefined,
            transform: showFallback ? "translateY(0px)" : undefined,
          }} // Fallback style
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Healthcare Leaders Choose Us
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence goes beyond staffing – we build
              lasting partnerships that strengthen the entire healthcare
              ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
                animate={
                  shouldAnimate
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: isMobile ? 15 : 20 }
                }
                transition={{
                  duration: isMobile ? 0.4 : 0.6,
                  delay: (isMobile ? 0.3 : 0.6) + index * 0.1,
                }}
                style={{
                  opacity: showFallback ? 1 : undefined,
                  transform: showFallback ? "translateY(0px)" : undefined,
                }} // Fallback style
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
