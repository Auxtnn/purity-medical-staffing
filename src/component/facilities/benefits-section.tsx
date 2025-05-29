"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  CheckCircle,
  Clock,
  Shield,
  Award,
  Users,
  Zap,
  ArrowRight,
  Heart,
} from "lucide-react";

const benefits = [
  {
    icon: <Clock size={32} className="text-primary" />,
    title: "Rapid Response Times",
    description:
      "Quick placement within 24-48 hours for most positions, ensuring your facility never misses a beat",
    features: [
      "Emergency coverage",
      "Same-day solutions",
      "Flexible scheduling",
    ],
  },
  {
    icon: <Shield size={32} className="text-primary" />,
    title: "Thoroughly Vetted Professionals",
    description:
      "Comprehensive background checks, credential verification, and rigorous screening processes",
    features: [
      "Background screening",
      "License verification",
      "Reference validation",
    ],
  },
  {
    icon: <Award size={32} className="text-primary" />,
    title: "Quality Assurance",
    description:
      "Only experienced, qualified professionals who meet our exceptionally high standards",
    features: [
      "Skill assessment",
      "Experience validation",
      "Performance tracking",
    ],
  },
  {
    icon: <Users size={32} className="text-primary" />,
    title: "24/7 Support",
    description:
      "Round-the-clock support for urgent needs, ongoing assistance, and emergency situations",
    features: ["24/7 hotline", "Dedicated support", "Emergency response"],
  },
  {
    icon: <Zap size={32} className="text-primary" />,
    title: "Seamless Integration",
    description:
      "Professionals arrive prepared, oriented, and ready to contribute from their very first day",
    features: ["Pre-orientation", "Facility preparation", "Smooth transitions"],
  },
  {
    icon: <Heart size={32} className="text-primary" />,
    title: "Patient-Centered Care",
    description:
      "Every professional shares our commitment to compassionate, high-quality patient care",
    features: [
      "Care excellence",
      "Compassionate service",
      "Patient safety focus",
    ],
  },
];

const trustIndicators = [
  "Fully Licensed & Insured",
  "JCAHO Compliant Staffing",
  "Comprehensive Background Checks",
  "24/7 Emergency Support",
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto lg:w-11/12 px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              <Award size={16} className="mr-2" />
              Partnership Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Partnership Benefits for
              <span className="text-primary block">Your Facility</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              When you partner with Purity Medical Staffing, you gain access to
              a network of qualified healthcare professionals and a
              comprehensive support system designed to make staffing seamless
              and stress-free.
            </p>

            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {benefit.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs bg-primary/5 text-primary px-3 py-1 rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {benefits.slice(3, 6).map((benefit, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-1 group"
              >
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {benefit.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs bg-primary/5 text-primary px-3 py-1 rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Your Trust is Our Foundation
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We've built our entire operation around reliability, compliance,
              and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              >
                <CheckCircle
                  size={18}
                  className="text-primary mr-3 flex-shrink-0"
                />
                <span className="text-gray-700 font-medium text-sm text-center group-hover:text-primary transition-colors duration-300">
                  {indicator}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
