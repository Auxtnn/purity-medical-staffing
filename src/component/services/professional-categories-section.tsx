"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { CheckCircle } from "lucide-react";

const professionalCategories = [
  {
    title: "Registered Nurses (RNs)",
    description:
      "Our RNs bring expertise across specialties including Medical-Surgical, ICU, Emergency, Pediatrics, Labor & Delivery, and more.",
    skills: [
      "Comprehensive patient assessments",
      "Medication administration",
      "Treatment implementation",
      "Care coordination",
      "Patient education",
    ],
    image: "/images/1.jpg",
  },
  {
    title: "Licensed Practical Nurses (LPNs)",
    description:
      "Our LPNs provide skilled nursing care in various settings including long-term care, skilled nursing, and outpatient clinics.",
    skills: [
      "Medication administration",
      "Routine care procedures",
      "Vital signs monitoring",
      "Patient assessments",
      "Documentation",
    ],
    image: "/images/1.jpg",
  },
  {
    title: "Certified Nursing Assistants (CNAs)",
    description:
      "Our CNAs deliver compassionate direct patient care, supporting both patients and nursing staff across healthcare settings.",
    skills: [
      "Activities of daily living assistance",
      "Vital signs monitoring",
      "Mobility assistance",
      "Comfort measures",
      "Basic care procedures",
    ],
    image: "/images/1.jpg",
  },
  {
    title: "Medication Aides",
    description:
      "Our Medication Aides specialize in accurate medication administration in assisted living and long-term care environments.",
    skills: [
      "Medication administration",
      "Medication inventory management",
      "Side effect monitoring",
      "Documentation",
      "Resident education",
    ],
    image: "/images/1.jpg",
  },
];

const ProfessionalCategoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Section ref={ref}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold text-lg mb-2 block">
          Healthcare Experts
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Healthcare Professionals We Provide
        </h2>
        <p className="text-gray text-lg">
          We carefully screen, credential, and place qualified healthcare
          professionals across various disciplines to meet your specific
          staffing needs.
        </p>
      </div>

      <div className="space-y-16">
        {professionalCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-8 items-center`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
              <p className="text-gray mb-6">{category.description}</p>

              <h4 className="font-medium mb-3">
                Key Skills & Responsibilities:
              </h4>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-1 mr-2 flex-shrink-0"
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ProfessionalCategoriesSection;
