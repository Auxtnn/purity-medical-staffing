"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { Section } from "../ui/section";
import { Card } from "../ui/card";
import {
  DollarSign,
  Clock,
  Heart,
  GraduationCap,
  Shield,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: <DollarSign size={36} className="text-primary" />,
    title: "Competitive Compensation",
    description:
      "Top-tier pay rates with weekly payroll and comprehensive benefits packages for eligible positions.",
  },
  {
    icon: <Clock size={36} className="text-primary" />,
    title: "Flexible Scheduling",
    description:
      "Work when you want with per diem, part-time, full-time, and travel opportunities to fit your lifestyle.",
  },
  {
    icon: <Heart size={36} className="text-primary" />,
    title: "Meaningful Work",
    description:
      "Make a real difference in patients' lives while working in top-rated healthcare facilities.",
  },
  {
    icon: <GraduationCap size={36} className="text-primary" />,
    title: "Career Development",
    description:
      "Access to continuing education, training opportunities, and career advancement support.",
  },
  {
    icon: <Shield size={36} className="text-primary" />,
    title: "Comprehensive Support",
    description:
      "24/7 clinical support, dedicated coordinators, and assistance with credentialing and licensing.",
  },
  {
    icon: <Users size={36} className="text-primary" />,
    title: "Community",
    description:
      "Join a network of healthcare professionals who are valued, respected, and supported.",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-lg mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Benefits That Make a Difference
          </h2>
          <p className="text-gray text-lg mb-8">
            At Purity Medical Staffing, we believe that when caregivers are
            valued and supported, they provide the best possible care. That's
            why we go beyond traditional staffing to offer comprehensive
            benefits and support that enhance both your career and your quality
            of life.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Our Promise to You</h3>
            <p className="text-gray italic">
              "We support the personal and professional growth of our caregivers
              through opportunities, recognition, and respect."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/1.jpg"
              alt="Happy healthcare professional"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {benefits.map((benefit, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray">{benefit.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default BenefitsSection;
