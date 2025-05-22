"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "../ui/button";
import {
  ArrowRight,
  UserPlus,
  Clock,
  CalendarClock,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: <UserPlus size={36} className="text-primary" />,
    title: "Per Diem & PRN Coverage",
    description: "Flexible staffing for short-term needs and coverage gaps.",
  },
  {
    icon: <Clock size={36} className="text-primary" />,
    title: "Short-Term & Long-Term Contracts",
    description:
      "Reliable professionals for extended assignments and projects.",
  },
  {
    icon: <CalendarClock size={36} className="text-primary" />,
    title: "Temp-to-Perm Staffing",
    description: "Find your perfect fit with trial-to-hire opportunities.",
  },
  {
    icon: <Truck size={36} className="text-primary" />,
    title: "Travel Assignments",
    description:
      "Experienced travelers for both local and out-of-state placements.",
  },
];

const ServicesOverview = () => {
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
    <section className="py-12 md:py-16 bg-white" ref={ref}>
      <div className="container  lg:w-11/12 px-4 mx-auto ">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-lg mb-2 block">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Reliable Staffing. Exceptional Care. Every Shift.
              </h2>
              <p className="text-gray text-lg mb-8">
                At Purity Medical Staffing, we understand the pressure
                healthcare facilities face in maintaining high-quality
                care—especially when staffing shortages arise. That's why we
                provide dependable, credentialed professionals who are ready to
                step in and deliver with compassion, skill, and professionalism.
              </p>

              <Link href="/services">
                <Button variant="primary" size="lg" className="font-medium">
                  Explore Our Services
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-gray-light p-6 rounded-lg h-full">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
