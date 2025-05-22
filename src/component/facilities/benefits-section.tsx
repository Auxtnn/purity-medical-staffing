"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { CheckCircle, Clock, Shield, Award, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: <Clock size={24} className="text-primary" />,
    title: "Rapid Response Times",
    description: "Quick placement within 24-48 hours for most positions",
  },
  {
    icon: <Shield size={24} className="text-primary" />,
    title: "Thoroughly Vetted Professionals",
    description: "Comprehensive background checks and credential verification",
  },
  {
    icon: <Award size={24} className="text-primary" />,
    title: "Quality Assurance",
    description:
      "Only experienced, qualified professionals who meet our high standards",
  },
  {
    icon: <Users size={24} className="text-primary" />,
    title: "24/7 Support",
    description:
      "Round-the-clock support for urgent needs and ongoing assistance",
  },
  {
    icon: <Zap size={24} className="text-primary" />,
    title: "Seamless Integration",
    description:
      "Professionals arrive prepared and ready to contribute from day one",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-lg mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partnership Benefits for Your Facility
          </h2>
          <p className="text-gray text-lg mb-8">
            When you partner with Purity Medical Staffing, you gain access to a
            network of qualified healthcare professionals and a support system
            designed to make staffing seamless and stress-free.
          </p>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                }
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-start"
              >
                <div className="bg-gray-light p-2 rounded-full mr-4 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/2.jpg"
              alt="Healthcare facility"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-0 md:-left-6 bg-accent text-white p-6 rounded-lg shadow-lg max-w-xs">
            <div className="text-3xl font-bold mb-2">175+</div>
            <p className="font-medium">
              Partner facilities trust our staffing solutions
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default BenefitsSection;
