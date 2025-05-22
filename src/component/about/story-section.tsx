"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";

const StorySection = () => {
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
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Vision Born from Experience
          </h2>
          <div className="space-y-4 text-gray">
            <p>
              Purity Medical Staffing was founded on the belief that every
              patient and caregiver deserves love and care. We recognize that
              caregivers are the heart of our healthcare system — and they
              deserve to be supported, respected, and appreciated.
            </p>
            <p>
              Having worked on the frontlines of healthcare, our founders
              recognized a gap in the industry: the need for a staffing agency
              that truly prioritizes human connections, quality care, and mutual
              respect. They envisioned a company that would bridge this gap by
              building meaningful relationships with both healthcare facilities
              and professionals.
            </p>
            <p>
              From humble beginnings with just a small team serving local
              facilities, we've grown to become a trusted partner to healthcare
              organizations throughout the Pacific Northwest. Throughout our
              growth, we've remained committed to our founding principles:
              integrity, excellence, and compassion in everything we do.
            </p>
            <p>
              Today, Purity Medical Staffing continues to expand our services
              while maintaining the personalized approach that sets us apart.
              We're proud of our journey, but even more excited about the future
              as we continue to build healthier communities, one member at a
              time.
            </p>
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
              alt="Purity Medical Staffing team"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 md:-left-10 left-0 bg-primary text-white p-6 rounded-lg shadow-lg max-w-xs">
            <p>
              With a mission to transform healthcare staffing through
              compassion, integrity, and excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default StorySection;
