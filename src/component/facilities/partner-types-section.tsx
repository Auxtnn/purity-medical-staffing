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
import { Hospital, Building, Building2, Home } from "lucide-react";

const partnerTypes = [
  {
    icon: <Hospital size={48} className="text-primary" />,
    title: "Hospitals & Clinics",
    description:
      "From major medical centers to community clinics, we provide skilled professionals across all departments and specialties.",
    specialties: [
      "Emergency Medicine",
      "ICU/Critical Care",
      "Medical-Surgical",
      "Operating Room",
      "Labor & Delivery",
    ],
  },
  {
    icon: <Building size={48} className="text-primary" />,
    title: "Long-Term Care & Skilled Nursing",
    description:
      "Supporting continuity of care in facilities that serve our most vulnerable populations with compassionate professionals.",
    specialties: [
      "Long-Term Care",
      "Memory Care",
      "Rehabilitation",
      "Wound Care",
      "Medication Management",
    ],
  },
  {
    icon: <Building2 size={48} className="text-primary" />,
    title: "Rehabilitation Centers",
    description:
      "Specialized professionals who understand the unique needs of patients working toward recovery and independence.",
    specialties: [
      "Physical Therapy Support",
      "Occupational Therapy",
      "Speech Therapy",
      "Post-Acute Care",
      "Discharge Planning",
    ],
  },
  {
    icon: <Home size={48} className="text-primary" />,
    title: "Home Health & Behavioral Health",
    description:
      "Delivering compassionate care in home settings and specialized behavioral health units with experienced professionals.",
    specialties: [
      "Home Health",
      "Hospice Care",
      "Behavioral Health",
      "Mental Health",
      "Substance Abuse Treatment",
    ],
  },
];

const PartnerTypesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Section bgColor="light" ref={ref}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold text-lg mb-2 block">
          Healthcare Settings
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Facilities We Proudly Serve
        </h2>
        <p className="text-gray text-lg">
          We partner with a diverse range of healthcare facilities, providing
          specialized staffing solutions that meet the unique needs of each care
          environment.
        </p>
      </div>

      <div className="space-y-12">
        {partnerTypes.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-8 items-center`}
          >
            <div className="w-full lg:w-1/3 text-center">
              <div className="mb-6">{partner.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{partner.title}</h3>
            </div>

            <div className="w-full lg:w-2/3">
              <p className="text-gray text-lg mb-6">{partner.description}</p>

              <div>
                <h4 className="font-semibold mb-3">Specialties We Support:</h4>
                <div className="flex flex-wrap gap-2">
                  {partner.specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default PartnerTypesSection;
