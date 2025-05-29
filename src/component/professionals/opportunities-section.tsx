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
import { Stethoscope, Heart, Brain, Baby } from "lucide-react";

const opportunities = [
  {
    icon: <Stethoscope size={40} className="text-white" />,
    title: "Registered Nurses (RNs)",
    specialties: [
      "Emergency Medicine",
      "ICU/Critical Care",
      "Medical-Surgical",
      "Operating Room",
      "Labor & Delivery",
      "Pediatrics",
    ],
    description:
      "Lead patient care initiatives across diverse healthcare settings with opportunities for specialty growth.",
    inDemand: true,
  },
  {
    icon: <Heart size={40} className="text-white" />,
    title: "Licensed Practical Nurses (LPNs)",
    specialties: [
      "Long-Term Care",
      "Assisted Living",
      "Rehabilitation",
      "Home Health",
      "Clinic Settings",
    ],
    description:
      "Provide essential nursing care in supportive environments focused on patient comfort and recovery.",
    inDemand: false,
  },
  {
    icon: <Brain size={40} className="text-white" />,
    title: "Certified Nursing Assistants (CNAs)",
    specialties: [
      "Memory Care",
      "Skilled Nursing",
      "Hospital Settings",
      "Rehabilitation",
      "Hospice Care",
    ],
    description:
      "Make a direct impact on patient lives through compassionate, hands-on care and support.",
    inDemand: true,
  },
  {
    icon: <Baby size={40} className="text-white" />,
    title: "Medication Aides",
    specialties: [
      "Assisted Living",
      "Memory Care",
      "Long-Term Care",
      "Retirement Communities",
    ],
    description:
      "Ensure medication safety and compliance while building meaningful relationships with residents.",
    inDemand: false,
  },
];

const OpportunitiesSection = () => {
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
    <Section bgColor="light" ref={ref}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold text-lg mb-2 block">
          Career Opportunities
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Find Your Perfect Match
        </h2>
        <p className="text-gray text-lg">
          Whether you're looking for flexibility, career advancement, or the
          opportunity to make a difference, we have positions that align with
          your professional goals and personal values.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {opportunities.map((opportunity, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full p-8 border-l-4 border-primary">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary p-3 rounded-full">
                  {opportunity.icon}
                </div>
                {opportunity.inDemand && (
                  <Badge variant="success">High Demand</Badge>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {opportunity.title}
              </h3>
              <p className="text-gray mb-4">{opportunity.description}</p>

              <div>
                <h4 className="font-medium mb-3">Available Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {opportunity.specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <div className="bg-primary text-white rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Explore Opportunities?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Browse our current job openings and find positions that match your
            skills, preferences, and career goals. New opportunities are added
            daily.
          </p>
          <motion.a
            href="/jobs"
            className="btn btn-secondary px-8 py-3"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Browse Job Opportunities
          </motion.a>
        </div>
      </div>
    </Section>
  );
};

export default OpportunitiesSection;
