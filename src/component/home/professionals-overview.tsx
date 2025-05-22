"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "../ui/button";
import { Check, ArrowRight } from "lucide-react";

const professionalTypes = [
  {
    title: "Registered Nurses (RNs)",
    description:
      "Our team of Registered Nurses is highly skilled and experienced in providing top-notch patient care.",
    image: "/images/3.jpg",
  },
  {
    title: "Licensed Practical Nurses (LPNs)",
    description:
      "LPNs play a crucial role in patient care, and we offer licensed and dedicated LPNs for various healthcare settings.",
    image: "/images/3.jpg",
  },
  {
    title: "Certified Nursing Assistants (CNAs)",
    description:
      "CNAs are essential members of the healthcare team, providing direct patient care and support.",
    image: "/images/3.jpg",
  },
  {
    title: "Medication Aides",
    description:
      "Medication Aides play a vital role in medication management and administration.",
    image: "/images/3.jpg",
  },
];

const ProfessionalsOverview = () => {
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
    <section className="py-12 md:py-16 bg-white text-gray-900" ref={ref}>
      <div className="container lg:w-11/12 px-4 mx-auto ">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            What We Offer
          </h2>
          <p className="text-gray-600 text-lg">
            We connect qualified healthcare professionals with facilities that
            need their expertise, creating perfect matches that benefit both
            parties.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {professionalTypes.map((type, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-4 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {type.title}
                  </h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              When we say we care, we really do.
            </h3>
            <p className="text-gray-600">
              We go beyond staffing — we build lasting relationships with both
              our caregivers and clients.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button
              size="lg"
              href="/for-professionals"
              variant="primary"
              className=""
            >
              For Healthcare Professionals
              <ArrowRight size={16} className="ml-2" />
            </Button>

            <Link href="/for-facilities">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary py-4 hover:text-white"
              >
                For Healthcare Facilities
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalsOverview;
