"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { UserPlus, Clock, Repeat, Plane, Users } from "lucide-react";

const solutions = [
  {
    icon: <UserPlus size={40} className="text-white" />,
    title: "Per Diem Coverage",
    description:
      "Fill immediate gaps with qualified professionals available on short notice",
    features: [
      "Same-day placement possible",
      "No long-term commitment",
      "Flexible scheduling",
    ],
  },
  {
    icon: <Clock size={40} className="text-white" />,
    title: "Short & Long-Term Contracts",
    description:
      "Consistent staffing for extended periods and special projects",
    features: [
      "Coverage from weeks to months",
      "Guaranteed availability",
      "Cost-effective solutions",
    ],
  },
  {
    icon: <Repeat size={40} className="text-white" />,
    title: "Temp-to-Perm Placements",
    description:
      "Try before you hire with our temp-to-permanent staffing option",
    features: [
      "Reduced hiring risk",
      "Extended evaluation period",
      "Seamless transition",
    ],
  },
  {
    icon: <Plane size={40} className="text-white" />,
    title: "Travel Nursing",
    description:
      "Access experienced travel professionals for specialized needs",
    features: [
      "Local and regional assignments",
      "Fully credentialed professionals",
      "Housing assistance available",
    ],
  },
  {
    icon: <Users size={40} className="text-white" />,
    title: "Emergency Staffing",
    description: "Rapid response for urgent situations and unexpected absences",
    features: [
      "24/7 availability",
      "Pre-screened professionals",
      "Crisis management support",
    ],
  },
];

const SolutionsSection = () => {
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
          Flexible Options
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Staffing Solutions for Every Need
        </h2>
        <p className="text-gray text-lg">
          Whether you need immediate coverage or long-term support, we offer
          flexible staffing solutions tailored to your facility's unique
          requirements and patient care standards.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {solutions.slice(0, 3).map((solution, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full p-8 border-l-4 border-primary">
              <div className="bg-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray mb-4">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {solutions.slice(3).map((solution, index) => (
          <motion.div key={index + 3} variants={itemVariants}>
            <Card className="h-full p-8 border-l-4 border-accent">
              <div className="bg-accent p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray mb-4">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="h-1.5 w-1.5 bg-accent rounded-full mr-2"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default SolutionsSection;
