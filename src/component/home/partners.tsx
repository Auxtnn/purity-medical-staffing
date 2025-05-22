"use client";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";
import { Hospital, Building, Building2, Home } from "lucide-react";

const partners = [
  {
    icon: <Hospital size={48} className="text-primary" />,
    title: "Hospitals & Clinics",
    description:
      "From major medical centers to community clinics, we staff a wide range of healthcare settings.",
  },
  {
    icon: <Building size={48} className="text-primary" />,
    title: "Long-Term Care & Skilled Nursing",
    description:
      "Supporting continuity of care in facilities that serve vulnerable populations.",
  },
  {
    icon: <Building2 size={48} className="text-primary" />,
    title: "Rehab Centers & Assisted Living",
    description:
      "Providing skilled professionals for specialized care and support services.",
  },
  {
    icon: <Home size={48} className="text-primary" />,
    title: "Home Health & Behavioral Health",
    description:
      "Delivering compassionate care in home settings and specialized units.",
  },
];

const Partners = () => {
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
    <section className="py-12 md:py-16" ref={ref}>
      <div className="container lg:w-11/12 px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Partner With
          </h2>
          <p className="text-gray text-lg">
            At Purity Medical Staffing, we are proud to partner with a diverse
            range of healthcare facilities to provide staffing solutions that
            meet their unique needs.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="flex justify-center mb-4">{partner.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{partner.title}</h3>
              <p className="text-gray">{partner.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
