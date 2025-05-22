"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import {
  Shield,
  FileCheck,
  UserCheck,
  Award,
  Clock,
  Phone,
} from "lucide-react";

const qualityFeatures = [
  {
    icon: <Shield size={36} className="text-primary" />,
    title: "Comprehensive Background Checks",
    description:
      "All professionals undergo thorough criminal background checks and reference verification.",
  },
  {
    icon: <FileCheck size={36} className="text-primary" />,
    title: "License & Certification Verification",
    description:
      "We verify all licenses, certifications, and credentials through primary sources.",
  },
  {
    icon: <UserCheck size={36} className="text-primary" />,
    title: "Skills Assessment",
    description:
      "Clinical competency evaluations ensure professionals meet your facility's standards.",
  },
  {
    icon: <Award size={36} className="text-primary" />,
    title: "Compliance Assurance",
    description:
      "Full compliance with Joint Commission, CMS, and all applicable regulations.",
  },
  {
    icon: <Clock size={36} className="text-primary" />,
    title: "Ongoing Monitoring",
    description:
      "Continuous monitoring of credentials and performance throughout assignments.",
  },
  {
    icon: <Phone size={36} className="text-primary" />,
    title: "24/7 Clinical Support",
    description:
      "Round-the-clock clinical support available for any concerns or questions.",
  },
];

const QualitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold text-lg mb-2 block">
          Quality Assurance
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Rigorous Standards You Can Trust
        </h2>
        <p className="text-gray text-lg">
          Our comprehensive credentialing and quality assurance processes ensure
          that every professional we place meets the highest standards of
          competency and professionalism.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {qualityFeatures.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full p-6 text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 bg-primary text-white rounded-xl p-8 md:p-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h3>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Experience the difference that quality staffing can make for your
          facility. Contact us today to discuss your staffing needs and learn
          how we can support your patient care goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/contact"
            className="btn btn-secondary py-3 px-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Get Started Today
          </motion.a>
          <motion.a
            href="tel:541-224-6807"
            className="btn btn-outline py-3 px-8 border-white text-white hover:bg-white hover:text-primary"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Call 541-224-6807
          </motion.a>
        </div>
      </div>
    </Section>
  );
};

export default QualitySection;
