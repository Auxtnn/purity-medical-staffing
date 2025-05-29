"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "../ui/button";
import {
  ArrowRight,
  UserPlus,
  Clock,
  CalendarClock,
  Truck,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: <UserPlus size={28} className="text-primary" />,
    title: "Per Diem & PRN Coverage",
    description:
      "Flexible staffing solutions for immediate coverage gaps and short-term needs.",
    features: [
      "Immediate availability",
      "Vetted professionals",
      "24/7 support",
    ],
  },
  {
    icon: <Clock size={28} className="text-primary" />,
    title: "Short-Term & Long-Term Contracts",
    description:
      "Reliable healthcare professionals for extended assignments and specialized projects.",
    features: [
      "Contract flexibility",
      "Skilled specialists",
      "Ongoing support",
    ],
  },
  {
    icon: <CalendarClock size={28} className="text-primary" />,
    title: "Temp-to-Perm Staffing",
    description:
      "Strategic trial-to-hire opportunities to find the perfect long-term fit.",
    features: [
      "Risk-free trials",
      "Cultural fit assessment",
      "Seamless transitions",
    ],
  },
  {
    icon: <Truck size={28} className="text-primary" />,
    title: "Travel Assignments",
    description:
      "Experienced travel professionals for local and nationwide placements.",
    features: [
      "Licensed travelers",
      "Housing assistance",
      "Competitive packages",
    ],
  },
];

const stats = [
  { number: "500+", label: "Healthcare Professionals" },
  { number: "98%", label: "Client Satisfaction Rate" },
  { number: "24/7", label: "Support Available" },
  { number: "50+", label: "Partner Facilities" },
];

const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container lg:w-11/12 px-4 mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <CheckCircle size={16} className="mr-2" />
            Comprehensive Healthcare Staffing Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Excellence in Every
            <span className="text-primary block">Placement</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between exceptional healthcare talent and
            facilities that need them most, ensuring continuity of care and
            operational excellence across every shift.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statsVariants}
              className="text-center h-full"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full group flex flex-col">
                <div className="flex items-start space-x-4 mb-6 flex-grow">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <CheckCircle
                        size={14}
                        className="text-primary mr-2 flex-shrink-0"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Staffing Strategy?
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Partner with Purity Medical Staffing and experience the difference
              that quality, reliability, and personalized service can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-50 font-semibold px-8"
                >
                  Explore All Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8"
                >
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
