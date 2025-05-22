"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";
import { Users, Building, Award, Clock } from "lucide-react";

// Mock stats data
const statsData = [
  {
    icon: <Users size={36} className="text-white" />,
    value: 1250,
    label: "Healthcare Professionals",
    description: "Qualified and verified caregivers ready to serve",
  },
  {
    icon: <Building size={36} className="text-white" />,
    value: 175,
    label: "Partner Facilities",
    description: "Healthcare organizations that trust our staffing solutions",
  },
  {
    icon: <Award size={36} className="text-white" />,
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "From both our facilities and healthcare professionals",
  },
  {
    icon: <Clock size={36} className="text-white" />,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Our team is always here when you need us",
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [counters, setCounters] = useState(statsData.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const interval = 2000; // Total animation time in milliseconds
      const steps = 50; // Number of steps to reach the final value
      const stepTime = interval / steps;

      statsData.forEach((stat, index) => {
        const increment = stat.value / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          if (currentStep < steps) {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = Math.round(increment * (currentStep + 1));
              return newCounters;
            });
            currentStep++;
          } else {
            clearInterval(timer);
          }
        }, stepTime);

        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  return (
    <Section bgColor="primary" ref={ref}>
      <div className="text-center text-white max-w-3xl mx-auto mb-16">
        <span className="font-semibold text-lg mb-2 block opacity-90">
          By the Numbers
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Impact in Healthcare
        </h2>
        <p className="opacity-90 text-lg">
          As we continue to grow, so does our ability to make a difference in
          the communities we serve. Here's a snapshot of our reach and impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center h-full"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col justify-between min-h-[280px]">
              <div className="flex flex-col items-center">
                <div className="bg-primary-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                  <span className="tabular-nums">{counters[index]}</span>
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              </div>
              <p className="text-white/80 text-sm mt-auto">
                {stat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Join Our Growing Community
          </h3>
          <p className="text-white/90 mb-6">
            Whether you're a healthcare facility looking for staffing solutions
            or a healthcare professional seeking new opportunities, we invite
            you to become part of the Purity Medical Staffing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/for-facilities"
              className="btn btn-outline py-3 px-8 border-white text-white hover:bg-white hover:text-primary"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              For Healthcare Facilities
            </motion.a>
            <motion.a
              href="/for-professionals"
              className="btn btn-outline py-3 px-8 border-white text-white hover:bg-white hover:text-primary"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              For Healthcare Professionals
            </motion.a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StatsSection;
