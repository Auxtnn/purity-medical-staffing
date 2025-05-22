"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Fully vetted, licensed, and background-checked professionals",
  "Strict compliance with state and federal regulations",
  "Fast turnaround for urgent staffing needs",
  "Seamless onboarding and shift coordination",
  "24/7 support from our dedicated staffing coordinators",
  "Consistent quality and reliability",
];

const OverviewSection = () => {
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
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quality Healthcare Staffing Solutions
          </h2>
          <p className="text-gray text-lg mb-8">
            At Purity Medical Staffing, we understand the pressure healthcare
            facilities face in maintaining high-quality care—especially when
            staffing shortages arise. That's why we provide dependable,
            credentialed professionals who are ready to step in and deliver with
            compassion, skill, and professionalism.
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                }
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-start"
              >
                <CheckCircle
                  size={20}
                  className="text-primary mt-1 mr-2 flex-shrink-0"
                />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>

          <p className="text-gray italic border-l-4 border-primary pl-4">
            "We exist to serve both our clients and our care providers with
            integrity, responsiveness, and unwavering dedication—because when
            caregivers are valued, patients thrive."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/4.jpg"
              alt="Healthcare professional providing care"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 md:-right-6 right-0 bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <p className="font-medium">
              Fill rate for shifts requested by our partner facilities
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default OverviewSection;
