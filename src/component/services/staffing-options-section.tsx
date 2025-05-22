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
import { UserPlus, Clock, CalendarClock, Truck, UserCheck } from "lucide-react";

const staffingOptions = [
  {
    icon: <UserPlus size={36} className="text-primary" />,
    title: "Per Diem & PRN Coverage",
    description:
      "Need coverage for a single shift or short notice absences? Our per diem and PRN professionals are flexible, experienced, and ready to step in with minimal notice to ensure seamless care delivery.",
  },
  {
    icon: <Clock size={36} className="text-primary" />,
    title: "Short-Term Contracts",
    description:
      "Perfect for covering leaves of absence, seasonal census increases, or short-term projects. Our short-term contracts provide consistent staffing for periods typically ranging from a few weeks to three months.",
  },
  {
    icon: <CalendarClock size={36} className="text-primary" />,
    title: "Long-Term Contracts",
    description:
      "Ideal for extended coverage needs like maternity leaves, facility expansions, or ongoing census increases. Our long-term contracts offer stability and continuity of care for assignments lasting three months or longer.",
  },
  {
    icon: <Truck size={36} className="text-primary" />,
    title: "Travel Assignments",
    description:
      "Our experienced travel professionals are available for both local and out-of-state placements. We handle all logistics, from housing arrangements to licensing requirements, so you receive qualified staff ready to contribute from day one.",
  },
  {
    icon: <UserCheck size={36} className="text-primary" />,
    title: "Temp-to-Perm Staffing",
    description:
      "Not sure if a candidate is the right long-term fit? Our temp-to-perm option lets you work with professionals before making a permanent hiring decision, reducing recruitment risks and costs.",
  },
];

const StaffingOptionsSection = () => {
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
          Flexible Solutions
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Staffing Options to Meet Your Needs
        </h2>
        <p className="text-gray text-lg">
          We offer a range of staffing options to accommodate varying
          requirements, providing the flexibility and reliability you need to
          maintain optimal care delivery.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {staffingOptions.map((option, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full p-8">
              <div className="mb-6">{option.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
              <p className="text-gray">{option.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <p className="text-gray text-lg max-w-3xl mx-auto">
          Not sure which option is right for your facility? Our staffing
          specialists can help you determine the most effective approach based
          on your specific needs and circumstances.
        </p>
      </div>
    </Section>
  );
};

export default StaffingOptionsSection;
