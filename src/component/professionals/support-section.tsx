"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";
import {
  CheckCircle,
  Phone,
  FileText,
  GraduationCap,
  Users,
  Clock,
} from "lucide-react";

const supportFeatures = [
  {
    icon: <Phone size={24} className="text-primary" />,
    title: "24/7 Clinical Support",
    description:
      "Our experienced clinical team is available around the clock to answer questions and provide guidance.",
  },
  {
    icon: <FileText size={24} className="text-primary" />,
    title: "Credentialing Assistance",
    description:
      "We help streamline the credentialing process and ensure your licenses and certifications stay current.",
  },
  {
    icon: <GraduationCap size={24} className="text-primary" />,
    title: "Continuing Education",
    description:
      "Access to online training modules, certification courses, and professional development resources.",
  },
  {
    icon: <Users size={24} className="text-primary" />,
    title: "Dedicated Coordinators",
    description:
      "Your personal staffing coordinator knows your preferences and works to find the perfect assignments.",
  },
  {
    icon: <Clock size={24} className="text-primary" />,
    title: "Flexible Scheduling",
    description:
      "Work when and where you want with assignments that fit your lifestyle and career goals.",
  },
];

const SupportSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section ref={ref}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold text-lg mb-2 block">
          Comprehensive Support
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We're Here for You Every Step of the Way
        </h2>
        <p className="text-gray text-lg">
          From your first assignment to long-term career planning, our dedicated
          support team ensures you have everything you need to succeed and
          thrive in your healthcare career.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            {supportFeatures.map((feature, index) => (
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
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary text-white rounded-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-6">What Sets Us Apart</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle
                size={20}
                className="text-accent mt-1 mr-3 flex-shrink-0"
              />
              <p>
                Personalized job matching based on your skills and preferences
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle
                size={20}
                className="text-accent mt-1 mr-3 flex-shrink-0"
              />
              <p>Weekly pay with direct deposit for your convenience</p>
            </div>
            <div className="flex items-start">
              <CheckCircle
                size={20}
                className="text-accent mt-1 mr-3 flex-shrink-0"
              />
              <p>Health insurance options for eligible long-term assignments</p>
            </div>
            <div className="flex items-start">
              <CheckCircle
                size={20}
                className="text-accent mt-1 mr-3 flex-shrink-0"
              />
              <p>Professional liability insurance coverage</p>
            </div>
            <div className="flex items-start">
              <CheckCircle
                size={20}
                className="text-accent mt-1 mr-3 flex-shrink-0"
              />
              <p>Recognition and rewards for outstanding performance</p>
            </div>
            <div className="flex items-start">
              <CheckCircle
                size={20}
                className="text-accent mt-1 mr-3 flex-shrink-0"
              />
              <p>
                Referral bonuses for bringing in other quality professionals
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/90 italic">
              "We exist to serve both our clients and our care providers with
              integrity, responsiveness, and unwavering dedication—because when
              caregivers are valued, patients thrive."
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default SupportSection;
