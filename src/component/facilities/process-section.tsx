// components/facilities/process-section.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import {
  MessageSquare,
  Search,
  FileCheck,
  Calendar,
  Users,
  HeadphonesIcon,
} from "lucide-react";

const processSteps = [
  {
    icon: <MessageSquare size={40} className="text-white" />,
    title: "Initial Consultation",
    description:
      "We discuss your specific needs, facility culture, and requirements.",
  },
  {
    icon: <Search size={40} className="text-white" />,
    title: "Professional Matching",
    description:
      "Our team identifies qualified professionals who fit your criteria.",
  },
  {
    icon: <FileCheck size={40} className="text-white" />,
    title: "Credential Review",
    description:
      "Comprehensive verification of licenses, certifications, and background.",
  },
  {
    icon: <Calendar size={40} className="text-white" />,
    title: "Placement Coordination",
    description: "Seamless scheduling and onboarding to minimize disruption.",
  },
  {
    icon: <Users size={40} className="text-white" />,
    title: "Assignment Support",
    description: "Ongoing communication and support throughout the assignment.",
  },
  {
    icon: <HeadphonesIcon size={40} className="text-white" />,
    title: "24/7 Availability",
    description: "Round-the-clock support for any urgent needs or concerns.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section bgColor="primary" ref={ref}>
      <div className="text-center text-white max-w-3xl mx-auto mb-16">
        <span className="font-semibold text-lg mb-2 block opacity-90">
          Our Process
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          How We Partner with You
        </h2>
        <p className="opacity-90 text-lg">
          Our streamlined process ensures quick, effective placement of
          qualified professionals while maintaining the highest standards of
          quality and compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 text-center"
          >
            <div className="bg-primary-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              {step.icon}
            </div>
            <div className="text-4xl font-bold text-accent mb-2">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-white/80">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ProcessSection;
