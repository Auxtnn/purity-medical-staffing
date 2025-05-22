"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Shield, Award, Clock, Users, Zap } from "lucide-react";

import { Card } from "../ui/card";

const coreValues = [
  {
    icon: <Heart size={40} className="text-primary" />,
    title: "Compassion",
    description:
      "We believe in caring for people first—patients, caregivers, and partners alike.",
  },
  {
    icon: <Shield size={40} className="text-primary" />,
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and respect in every relationship.",
  },
  {
    icon: <Award size={40} className="text-primary" />,
    title: "Excellence",
    description:
      "We strive for the highest standards in recruitment, placement, and service.",
  },
  {
    icon: <Clock size={40} className="text-primary" />,
    title: "Reliability",
    description:
      "We're available when you need us—delivering prompt, dependable staffing solutions.",
  },
  {
    icon: <Zap size={40} className="text-primary" />,
    title: "Empowerment",
    description:
      "We support the personal and professional growth of our caregivers through opportunities, recognition, and respect.",
  },
  {
    icon: <Users size={40} className="text-primary" />,
    title: "Community",
    description:
      "We're more than a staffing agency—we're building a culture of trust, support, and shared success.",
  },
];

const CoreValues = () => {
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
    <section className="py-12 md:py-16 bg-gray-light" ref={ref}>
      <div className="container  lg:w-11/12 px-4 mx-auto ">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Core Values
          </h2>
          <p className="text-gray text-lg">
            At Purity Medical Staffing, these values guide everything we do.
            They're the foundation of our commitment to both healthcare
            facilities and professionals.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {coreValues.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
