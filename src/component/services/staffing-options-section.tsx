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
import {
  UserPlus,
  Clock,
  CalendarClock,
  Truck,
  UserCheck,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

const staffingOptions = [
  {
    icon: <UserPlus size={32} className="text-primary" />,
    title: "Per Diem & PRN Coverage",
    description:
      "Need coverage for a single shift or short notice absences? Our per diem and PRN professionals are flexible, experienced, and ready to step in with minimal notice to ensure seamless care delivery.",
    benefits: [
      "Same-day availability",
      "No long-term commitment",
      "Flexible scheduling",
    ],
    duration: "Single shifts",
    gradient: "from-blue-500/10 to-primary/10",
    popular: false,
  },
  {
    icon: <Clock size={32} className="text-primary" />,
    title: "Short-Term Contracts",
    description:
      "Perfect for covering leaves of absence, seasonal census increases, or short-term projects. Our short-term contracts provide consistent staffing for periods typically ranging from a few weeks to three months.",
    benefits: ["Consistent coverage", "Cost-effective", "Quick deployment"],
    duration: "Few weeks to 3 months",
    gradient: "from-green-500/10 to-primary/10",
    popular: false,
  },
  {
    icon: <CalendarClock size={32} className="text-primary" />,
    title: "Long-Term Contracts",
    description:
      "Ideal for extended coverage needs like maternity leaves, facility expansions, or ongoing census increases. Our long-term contracts offer stability and continuity of care for assignments lasting three months or longer.",
    benefits: [
      "Continuity of care",
      "Stable staffing",
      "Relationship building",
    ],
    duration: "3+ months",
    gradient: "from-purple-500/10 to-primary/10",
    popular: true,
  },
  {
    icon: <Truck size={32} className="text-primary" />,
    title: "Travel Assignments",
    description:
      "Our experienced travel professionals are available for both local and out-of-state placements. We handle all logistics, from housing arrangements to licensing requirements, so you receive qualified staff ready to contribute from day one.",
    benefits: [
      "Full logistics support",
      "Licensed professionals",
      "Housing assistance",
    ],
    duration: "13+ weeks",
    gradient: "from-orange-500/10 to-primary/10",
    popular: false,
  },
  {
    icon: <UserCheck size={32} className="text-primary" />,
    title: "Temp-to-Perm Staffing",
    description:
      "Not sure if a candidate is the right long-term fit? Our temp-to-perm option lets you work with professionals before making a permanent hiring decision, reducing recruitment risks and costs.",
    benefits: [
      "Risk-free trial period",
      "Cultural fit assessment",
      "Reduced hiring costs",
    ],
    duration: "Trial + permanent",
    gradient: "from-teal-500/10 to-primary/10",
    popular: false,
  },
  {
    icon: <Users size={32} className="text-primary" />,
    title: "Emergency Staffing",
    description:
      "Critical staffing shortage? Our emergency response team provides immediate coverage for unexpected situations, ensuring patient safety and operational continuity during crisis situations.",
    benefits: [
      "24/7 emergency response",
      "Immediate deployment",
      "Crisis management",
    ],
    duration: "Immediate coverage",
    gradient: "from-red-500/10 to-primary/10",
    popular: false,
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
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="inline-flex items-center px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <Users size={16} className="mr-2" />
            Flexible Staffing Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Staffing Options to Meet
            <span className="text-primary block md:inline md:ml-3">
              Your Needs
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We offer a comprehensive range of staffing options to accommodate
            varying requirements, providing the flexibility and reliability you
            need to maintain optimal care delivery.
          </p>
        </motion.div>

        {/* Staffing Options Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {staffingOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Popular Badge */}
              {option.popular && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
                    <Star size={12} className="mr-1" fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`bg-gradient-to-br ${option.gradient} rounded-2xl p-1 group hover:scale-105 transition-transform duration-300`}
              >
                <div className="bg-white rounded-xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100">
                  {/* Icon and Duration */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                      {option.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Duration
                      </div>
                      <div className="text-sm font-bold text-primary">
                        {option.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Key Benefits:
                    </div>
                    {option.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle
                          size={14}
                          className="text-primary mr-3 flex-shrink-0"
                        />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-sm font-semibold group-hover:text-primary-dark transition-colors duration-300">
                        Learn More
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-primary group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Not Sure Which Option is Right for You?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our staffing specialists can help you determine the most effective
              approach based on your specific needs, budget, and circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="font-semibold flex-1 sm:flex-none"
              >
                Speak with a Specialist
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StaffingOptionsSection;
