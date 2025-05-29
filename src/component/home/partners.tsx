"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Hospital,
  Building,
  Building2,
  Home,
  Shield,
  CheckCircle,
  Users,
} from "lucide-react";

const partners = [
  {
    icon: <Hospital size={32} className="text-primary" />,
    title: "Hospitals & Clinics",
    description:
      "From major medical centers to community clinics, we staff a wide range of healthcare settings.",
    features: [
      "Emergency Departments",
      "ICU & Critical Care",
      "Medical-Surgical Units",
    ],
    color: "from-blue-500/10 to-primary/10",
  },
  {
    icon: <Building size={32} className="text-primary" />,
    title: "Long-Term Care & Skilled Nursing",
    description:
      "Supporting continuity of care in facilities that serve vulnerable populations.",
    features: ["Memory Care", "Rehabilitation", "Post-Acute Care"],
    color: "from-green-500/10 to-primary/10",
  },
  {
    icon: <Building2 size={32} className="text-primary" />,
    title: "Rehab Centers & Assisted Living",
    description:
      "Providing skilled professionals for specialized care and support services.",
    features: ["Physical Therapy", "Occupational Health", "Independent Living"],
    color: "from-purple-500/10 to-primary/10",
  },
  {
    icon: <Home size={32} className="text-primary" />,
    title: "Home Health & Behavioral Health",
    description:
      "Delivering compassionate care in home settings and specialized units.",
    features: ["In-Home Care", "Mental Health", "Chronic Disease Management"],
    color: "from-orange-500/10 to-primary/10",
  },
];

const commitments = [
  {
    icon: <Shield size={20} className="text-primary" />,
    text: "Rigorous credentialing process",
  },
  {
    icon: <Users size={20} className="text-primary" />,
    text: "24/7 support and communication",
  },
  {
    icon: <CheckCircle size={20} className="text-primary" />,
    text: "Quality assurance guaranteed",
  },
];

const Partners = () => {
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
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

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
            <Building2 size={16} className="mr-2" />
            Trusted Healthcare Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            We Partner
            <span className="text-primary block md:inline md:ml-3">
              With Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Purity Medical Staffing, we are proud to partner with a diverse
            range of healthcare facilities, providing tailored staffing
            solutions that meet their unique needs and maintain the highest
            standards of patient care.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          style={{ opacity: showFallback ? 1 : undefined }} // Fallback style
        >
          {partners.map((partner, index) => (
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
              <div className="bg-white rounded-2xl px-4 py-6 h-full shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:border-primary/20">
                {/* Icon with gradient background */}
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {partner.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {partner.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {partner.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-700 mb-3">
                    Specializations:
                  </div>
                  {partner.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
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

        {/* Commitment Section */}
        <motion.div
          className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/10"
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
              Our Partnership Commitment
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every partnership is built on trust, reliability, and a shared
              commitment to delivering exceptional healthcare services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center group"
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
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  {commitment.icon}
                </div>
                <p className="text-gray-700 font-semibold text-lg">
                  {commitment.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <div className="text-center mt-12 pt-8 border-t border-primary/20">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed max-w-4xl mx-auto">
              "We don't just fill positions—we forge partnerships that
              strengthen the entire healthcare ecosystem, ensuring every
              facility can focus on what matters most: patient care."
            </blockquote>
            <div className="mt-6 flex items-center justify-center">
              <div className="w-16 h-0.5 bg-primary rounded-full"></div>
              <div className="mx-4 text-primary font-semibold">
                Partnership Team
              </div>
              <div className="w-16 h-0.5 bg-primary rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
