"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import Link from "next/link";
import { Card } from "../ui/card";
import { Download, FileText, Users, GraduationCap, Shield } from "lucide-react";

// Mock guides data
const guides = [
  {
    id: 1,
    title: "Healthcare Professional's Guide to Career Development",
    description:
      "A comprehensive roadmap for advancing your healthcare career with practical tips and strategies.",
    icon: <GraduationCap size={40} className="text-primary" />,
    downloadUrl: "#",
    category: "Career Development",
  },
  {
    id: 2,
    title: "Facility Manager's Staffing Solutions Handbook",
    description:
      "Essential strategies for healthcare facilities to optimize staffing and maintain quality care.",
    icon: <Users size={40} className="text-primary" />,
    downloadUrl: "#",
    category: "Facility Management",
  },
  {
    id: 3,
    title: "Compliance and Credentialing Checklist",
    description:
      "A detailed checklist to ensure all regulatory requirements are met for healthcare staffing.",
    icon: <Shield size={40} className="text-primary" />,
    downloadUrl: "#",
    category: "Compliance",
  },
  {
    id: 4,
    title: "Travel Nursing: A Complete Getting Started Guide",
    description:
      "Everything you need to know about starting a successful career in travel nursing.",
    icon: <FileText size={40} className="text-primary" />,
    downloadUrl: "#",
    category: "Travel Nursing",
  },
];

const GuidesSection = () => {
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
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold text-lg mb-2 block">
          Free Downloads
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Comprehensive Guides & Resources
        </h2>
        <p className="text-gray text-lg">
          Download our free guides packed with expert insights, practical tips,
          and actionable strategies to help you succeed in healthcare.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {guides.map((guide, index) => (
          <motion.div key={guide.id} variants={itemVariants}>
            <Card className="h-full p-8 border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-gray-light p-3 rounded-full">
                  {guide.icon}
                </div>
                <span className="text-xs text-gray bg-gray-light px-2 py-1 rounded">
                  {guide.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3">{guide.title}</h3>
              <p className="text-gray mb-6">{guide.description}</p>

              <Button variant="outline" fullWidth className="group">
                <Download
                  size={16}
                  className="mr-2 group-hover:translate-y-1 transition-transform"
                />
                Download Free Guide
              </Button>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 bg-primary text-white rounded-xl p-8 md:p-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Need More Personalized Guidance?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our experienced team is here to provide personalized advice and
            support for your specific situation. Whether you're a healthcare
            facility or professional, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">Contact Our Team</Link>
            <Link
              href="tel:541-224-6807"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Call 541-224-6807
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default GuidesSection;
