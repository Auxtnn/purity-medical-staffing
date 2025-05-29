// components/facilities/process-section.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  MessageSquare,
  Search,
  FileCheck,
  Calendar,
  Users,
  HeadphonesIcon,
  ArrowRight,
  Clock,
  CheckCircle,
  Shield,
  Star,
} from "lucide-react";

const processSteps = [
  {
    icon: <MessageSquare size={32} className="text-primary" />,
    title: "Initial Consultation",
    description:
      "We discuss your specific needs, facility culture, and requirements to create a tailored staffing strategy.",
    features: ["Needs assessment", "Cultural evaluation", "Budget planning"],
    timeline: "Same day",
    gradient: "from-blue-500/10 to-primary/10",
  },
  {
    icon: <Search size={32} className="text-primary" />,
    title: "Professional Matching",
    description:
      "Our team identifies and screens qualified professionals who perfectly fit your criteria and standards.",
    features: [
      "Skills matching",
      "Experience verification",
      "Availability check",
    ],
    timeline: "24-48 hours",
    gradient: "from-green-500/10 to-primary/10",
  },
  {
    icon: <FileCheck size={32} className="text-primary" />,
    title: "Credential Review",
    description:
      "Comprehensive verification of licenses, certifications, references, and thorough background checks.",
    features: [
      "License verification",
      "Background screening",
      "Reference validation",
    ],
    timeline: "2-3 days",
    gradient: "from-purple-500/10 to-primary/10",
  },
  {
    icon: <Calendar size={32} className="text-primary" />,
    title: "Placement Coordination",
    description:
      "Seamless scheduling and onboarding coordination to minimize disruption to your operations.",
    features: [
      "Schedule coordination",
      "Onboarding support",
      "Documentation prep",
    ],
    timeline: "1-2 days",
    gradient: "from-orange-500/10 to-primary/10",
  },
  {
    icon: <Users size={32} className="text-primary" />,
    title: "Assignment Support",
    description:
      "Ongoing communication, performance monitoring, and support throughout the entire assignment.",
    features: ["Performance tracking", "Regular check-ins", "Issue resolution"],
    timeline: "Ongoing",
    gradient: "from-teal-500/10 to-primary/10",
  },
  {
    icon: <HeadphonesIcon size={32} className="text-primary" />,
    title: "24/7 Availability",
    description:
      "Round-the-clock support for any urgent needs, concerns, or emergency staffing requirements.",
    features: ["Emergency coverage", "24/7 hotline", "Rapid response"],
    timeline: "Always",
    gradient: "from-red-500/10 to-primary/10",
  },
];

const guarantees = [
  {
    icon: <Shield size={24} className="text-primary" />,
    title: "Quality Guarantee",
    description: "100% satisfaction or we'll find a replacement at no cost",
  },
  {
    icon: <Clock size={24} className="text-primary" />,
    title: "Rapid Response",
    description: "Emergency staffing solutions available within hours",
  },
  {
    icon: <Star size={24} className="text-primary" />,
    title: "Premium Standards",
    description: "Only the highest-qualified professionals in our network",
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
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
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
            <Users size={16} className="mr-2" />
            Seamless Partnership Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            How We Partner
            <span className="text-primary block md:inline md:ml-3">
              with You
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our streamlined, comprehensive process ensures quick and effective
            placement of qualified professionals while maintaining the highest
            standards of quality and compliance.
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
              <div
                className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-1`}
              >
                <div className="bg-white rounded-xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon and Timeline */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Timeline
                      </div>
                      <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        <Clock size={12} className="mr-1" />
                        {step.timeline}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Key Activities:
                    </div>
                    {step.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle
                          size={14}
                          className="text-primary mr-3 flex-shrink-0"
                        />
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantees Section */}
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
              Our Partnership Guarantees
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We stand behind our process with concrete guarantees that give you
              confidence in every staffing decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
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
                  {guarantee.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {guarantee.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
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
              Let's discuss your staffing needs and show you how our proven
              process can solve your challenges quickly and effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-gray-50 font-semibold flex-1 sm:flex-none"
              >
                Start Your Partnership
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 font-semibold flex-1 sm:flex-none"
              >
                View Our Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
