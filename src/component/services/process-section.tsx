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
  CheckSquare,
  UserCheck,
  Calendar,
  FileText,
  Users,
  MessageSquare,
} from "lucide-react";

const processSteps = [
  {
    icon: <CheckSquare size={40} className="text-white" />,
    title: "Needs Assessment",
    description:
      "We begin by thoroughly understanding your facility's specific requirements, culture, and expectations.",
  },
  {
    icon: <UserCheck size={40} className="text-white" />,
    title: "Professional Selection",
    description:
      "Our team carefully matches qualified professionals whose skills, experience, and preferences align with your needs.",
  },
  {
    icon: <FileText size={40} className="text-white" />,
    title: "Credential Verification",
    description:
      "We verify licenses, certifications, references, and conduct comprehensive background checks.",
  },
  {
    icon: <Calendar size={40} className="text-white" />,
    title: "Scheduling & Coordination",
    description:
      "We handle all scheduling details to ensure seamless integration with your existing workflow.",
  },
  {
    icon: <Users size={40} className="text-white" />,
    title: "Onboarding Support",
    description:
      "We provide orientation information and facility-specific guidelines to ensure professionals arrive prepared.",
  },
  {
    icon: <MessageSquare size={40} className="text-white" />,
    title: "Ongoing Communication",
    description:
      "We maintain open communication throughout the assignment to address any concerns and ensure satisfaction.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section bgColor="primary" ref={ref}>
      <div className="text-center text-white max-w-3xl mx-auto mb-16">
        <span className="font-semibold text-lg mb-2 block opacity-90">
          How We Work
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Staffing Process
        </h2>
        <p className="opacity-90 text-lg">
          We've developed a streamlined process that ensures quality,
          reliability, and satisfaction for both healthcare facilities and
          professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8"
          >
            <div className="bg-primary-light p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">
              <span className="text-accent mr-2">{index + 1}.</span>{" "}
              {step.title}
            </h3>
            <p className="text-white/80">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ProcessSection;
