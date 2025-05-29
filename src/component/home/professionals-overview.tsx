"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "../ui/button";
import {
  Check,
  ArrowRight,
  Stethoscope,
  Users2,
  Heart,
  Award,
} from "lucide-react";

const professionalTypes = [
  {
    title: "Registered Nurses (RNs)",
    description:
      "Highly skilled and experienced professionals providing exceptional patient care across all specialties.",
    image: "/images/5.jpg",
    icon: <Stethoscope size={24} className="text-primary" />,
    credentials: ["BSN/ADN Required", "Current License", "ACLS/BLS Certified"],
  },
  {
    title: "Licensed Practical Nurses (LPNs)",
    description:
      "Dedicated professionals who play crucial roles in patient care across diverse healthcare settings.",
    image: "/images/3.jpg",
    icon: <Heart size={24} className="text-primary" />,
    credentials: [
      "State Licensed",
      "Medication Certified",
      "Clinical Experience",
    ],
  },
  {
    title: "Certified Nursing Assistants (CNAs)",
    description:
      "Essential healthcare team members providing compassionate direct patient care and support.",
    image: "/images/6.jpg",
    icon: <Users2 size={24} className="text-primary" />,
    credentials: ["CNA Certification", "Background Check", "Skills Assessment"],
  },
  {
    title: "Medication Aides",
    description:
      "Specialized professionals ensuring safe and accurate medication management and administration.",
    image: "/images/8.jpg",
    icon: <Award size={24} className="text-primary" />,
    credentials: [
      "Medication Certified",
      "Training Complete",
      "Competency Verified",
    ],
  },
];

const features = [
  "Rigorous screening process",
  "Continuous professional development",
  "24/7 support and communication",
  "Competitive compensation packages",
];

const ProfessionalsOverview = () => {
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
    <section
      className="py-20 bg-white text-gray-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container lg:w-11/12 px-4 mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          style={{ opacity: showFallback ? 1 : undefined }} // Fallback style
        >
          <div className="inline-flex items-center px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <Users2 size={16} className="mr-2" />
            Healthcare Excellence Through Expert Staffing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            What We
            <span className="text-primary block md:inline md:ml-3">
              Deliver
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We connect qualified healthcare professionals with facilities that
            need their expertise, creating strategic partnerships that elevate
            patient care and operational excellence.
          </p>
        </motion.div>

        {/* Professional Types Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          style={{ opacity: showFallback ? 1 : undefined }} // Fallback style
        >
          {professionalTypes.map((type, index) => (
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
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden h-full shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
                {/* Image with overlay */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {type.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {type.description}
                  </p>

                  {/* Credentials */}
                  <div className="space-y-2">
                    {type.credentials.map((credential, credIndex) => (
                      <div
                        key={credIndex}
                        className="flex items-center text-xs text-gray-500"
                      >
                        <Check
                          size={12}
                          className="text-primary mr-2 flex-shrink-0"
                        />
                        {credential}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="px-6 pb-6">
                  <div className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:from-accent group-hover:to-primary transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 mb-16 border border-gray-100"
          initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
          animate={
            shouldAnimate
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: isMobile ? 15 : 20 }
          }
          transition={{
            duration: isMobile ? 0.6 : 0.8,
            delay: isMobile ? 0.2 : 0.3,
          }}
          style={{
            opacity: showFallback ? 1 : undefined,
            transform: showFallback ? "translateY(0px)" : undefined,
          }} // Fallback style
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Why Choose Our Professionals?
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Every healthcare professional in our network undergoes
                comprehensive vetting and continuous development to ensure they
                meet the highest standards of care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/5 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600 font-medium mb-4">
                  Client Satisfaction Rate
                </div>
                <div className="text-sm text-gray-500">
                  Based on feedback from our partner healthcare facilities
                </div>
              </div>
            </div>
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
            delay: isMobile ? 0.3 : 0.5,
          }}
          style={{
            opacity: showFallback ? 1 : undefined,
            transform: showFallback ? "translateY(0px)" : undefined,
          }} // Fallback style
        >
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              When we say we care, we really do.
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              We go beyond staffing — we build lasting partnerships with both
              our healthcare professionals and client facilities, fostering
              growth and excellence at every level.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <Button
              size="lg"
              href="/for-professionals"
              variant="primary"
              className="flex-1 sm:flex-none"
            >
              For Healthcare Professionals
            </Button>

            <Button
              size="lg"
              href="/for-facilities"
              variant="outline"
              className="flex-1 sm:flex-none"
            >
              For Healthcare Facilities
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Check size={16} className="text-primary mr-2" />
                Fully Licensed & Insured
              </div>
              <div className="flex items-center">
                <Check size={16} className="text-primary mr-2" />
                JCAHO Compliant
              </div>
              <div className="flex items-center">
                <Check size={16} className="text-primary mr-2" />
                24/7 Support Available
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalsOverview;
