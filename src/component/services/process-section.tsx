"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import {
  CheckSquare,
  UserCheck,
  Calendar,
  FileText,
  Users,
  MessageSquare,
  ArrowRight,
  Clock,
  Shield,
} from "lucide-react";

const processSteps = [
  {
    icon: <CheckSquare size={32} className="text-primary" />,
    title: "Needs Assessment",
    description:
      "We begin by thoroughly understanding your facility's specific requirements, culture, and operational expectations.",
    features: [
      "Facility assessment",
      "Cultural alignment",
      "Requirement analysis",
    ],
    timeline: "1-2 days",
  },
  {
    icon: <UserCheck size={32} className="text-primary" />,
    title: "Professional Selection",
    description:
      "Our team carefully matches qualified professionals whose skills, experience, and preferences align perfectly with your needs.",
    features: [
      "Skill matching",
      "Experience verification",
      "Preference alignment",
    ],
    timeline: "2-3 days",
  },
  {
    icon: <FileText size={32} className="text-primary" />,
    title: "Credential Verification",
    description:
      "We verify all licenses, certifications, references, and conduct comprehensive background checks for complete compliance.",
    features: [
      "License verification",
      "Background checks",
      "Reference validation",
    ],
    timeline: "3-5 days",
  },
  {
    icon: <Calendar size={32} className="text-primary" />,
    title: "Scheduling & Coordination",
    description:
      "We handle all scheduling details and logistics to ensure seamless integration with your existing workflow and operations.",
    features: [
      "Schedule optimization",
      "Workflow integration",
      "Logistics management",
    ],
    timeline: "1 day",
  },
  {
    icon: <Users size={32} className="text-primary" />,
    title: "Onboarding Support",
    description:
      "We provide comprehensive orientation information and facility-specific guidelines to ensure professionals arrive fully prepared.",
    features: [
      "Orientation materials",
      "Facility guidelines",
      "Preparation support",
    ],
    timeline: "Ongoing",
  },
  {
    icon: <MessageSquare size={32} className="text-primary" />,
    title: "Ongoing Communication",
    description:
      "We maintain open, proactive communication throughout the assignment to address concerns and ensure complete satisfaction.",
    features: ["24/7 support", "Regular check-ins", "Issue resolution"],
    timeline: "Continuous",
  },
];

const benefits = [
  {
    icon: <Clock size={24} className="text-primary" />,
    title: "Rapid Deployment",
    description: "Quick turnaround times for urgent staffing needs",
  },
  {
    icon: <Shield size={24} className="text-primary" />,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all placements",
  },
  {
    icon: <Users size={24} className="text-primary" />,
    title: "Dedicated Support",
    description: "Personal account management for every client",
  },
];

const ProcessSection = () => {
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
    <section className="py-20 bg-primary-10 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2"></div>

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
            <FileText size={16} className="mr-2" />
            Streamlined Excellence Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Our Proven
            <span className="text-primary block md:inline md:ml-3">
              Staffing Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We've developed a comprehensive, streamlined process that ensures
            quality, reliability, and complete satisfaction for both healthcare
            facilities and professionals.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          style={{ opacity: showFallback ? 1 : undefined }} // Fallback style
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              style={{
                opacity: showFallback ? 1 : undefined,
                transform: showFallback
                  ? "translateY(0px) scale(1)"
                  : undefined,
              }} // Fallback style
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:border-primary/20">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Timeline */}
                  <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                    <Clock size={14} className="mr-1" />
                    {step.timeline}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {step.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Bottom accent with arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-16 transition-all duration-300"></div>
                  {index < processSteps.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="text-gray-300 group-hover:text-primary transition-colors duration-300"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 mb-16"
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
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Our Process Works
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our systematic approach ensures every placement is a success,
              creating value for facilities and opportunities for professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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
                  delay: (isMobile ? 0.4 : 0.7) + index * 0.1,
                }}
                style={{
                  opacity: showFallback ? 1 : undefined,
                  transform: showFallback ? "translateY(0px)" : undefined,
                }} // Fallback style
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
          animate={
            shouldAnimate
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: isMobile ? 15 : 20 }
          }
          transition={{
            duration: isMobile ? 0.6 : 0.8,
            delay: isMobile ? 0.5 : 0.8,
          }}
          style={{
            opacity: showFallback ? 1 : undefined,
            transform: showFallback ? "translateY(0px)" : undefined,
          }} // Fallback style
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Our Process?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Let us show you how our streamlined approach can solve your
              staffing challenges and provide the healthcare professionals you
              need, when you need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-gray-50 font-semibold flex-1 sm:flex-none"
              >
                Start Your Staffing Solution
              </Button>
              <Button
                href="/about"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 font-semibold flex-1 sm:flex-none"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
