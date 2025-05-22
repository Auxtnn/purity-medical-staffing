"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Target, Link, Star } from "lucide-react";

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          Our Purpose
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Mission, Vision & Values
        </h2>
        <p className="text-gray text-lg">
          At Purity Medical Staffing, we're guided by a clear purpose and
          unwavering commitment to our core principles.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <Card className="h-full p-8 border-t-4 border-primary">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Target size={30} className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray">
              Our mission is to bridge the gap between compassionate caregivers
              and the healthcare facilities that need them most. We are
              committed to delivering dependable, high-quality staffing
              solutions that support exceptional patient care—while empowering
              our caregivers with respect, opportunity, and purpose.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full p-8 border-t-4 border-accent">
            <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Link size={30} className="text-accent" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray">
              To be a leading force in healthcare staffing nationwide recognized
              for our commitment to excellence, integrity, and compassion. We
              envision a future where every facility is fully supported, every
              caregiver is valued, and every patient receives outstanding care.
            </p>
          </Card>
        </motion.div>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full max-w-2xl"
        >
          <Card className="h-full p-8 border-t-4 border-primary">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Star size={30} className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Our Values
            </h3>
            <ul className="text-gray space-y-3">
              <li className="font-medium">
                <span className="text-primary font-semibold">Compassion:</span>{" "}
                We believe in caring for people first—patients, caregivers, and
                partners alike.
              </li>
              <li className="font-medium">
                <span className="text-primary font-semibold">Integrity:</span>{" "}
                We operate with transparency, honesty, and respect in every
                relationship.
              </li>
              <li className="font-medium">
                <span className="text-primary font-semibold">Excellence:</span>{" "}
                We strive for the highest standards in recruitment, placement,
                and service.
              </li>
              <li className="font-medium">
                <span className="text-primary font-semibold">Reliability:</span>{" "}
                We're available when needed—delivering prompt, dependable
                staffing solutions.
              </li>
              <li className="font-medium">
                <span className="text-primary font-semibold">Empowerment:</span>{" "}
                We support the personal and professional growth of our
                caregivers.
              </li>
              <li className="font-medium">
                <span className="text-primary font-semibold">Community:</span>{" "}
                We're building a culture of trust, support, and shared success.
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default MissionSection;
