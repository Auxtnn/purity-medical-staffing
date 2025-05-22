"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";
import Link from "next/link";

const Faq = () => {
  const [activeTab, setActiveTab] = useState<
    "general" | "facilities" | "professionals"
  >("general");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filteredFaqs = faqs.filter((faq) => faq.category === activeTab);

  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Section bgColor="light" ref={ref}>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray text-lg">
          Find answers to common questions about our services, process, and
          more. If you don't see your question here, please don't hesitate to
          contact us directly.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-8"
      >
        <div className="inline-flex bg-white p-1 rounded-md shadow-sm">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "general" ? "bg-primary text-white" : "text-gray"
            } font-medium transition-colors`}
            onClick={() => setActiveTab("general")}
          >
            General
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "facilities" ? "bg-primary text-white" : "text-gray"
            } font-medium transition-colors`}
            onClick={() => setActiveTab("facilities")}
          >
            For Facilities
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "professionals"
                ? "bg-primary text-white"
                : "text-gray"
            } font-medium transition-colors`}
            onClick={() => setActiveTab("professionals")}
          >
            For Professionals
          </button>
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-6 text-left"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 ml-2 transition-transform ${
                        expandedItems.includes(faq.id)
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-gray-medium">
                          <p className="text-gray">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray mb-6">
          Still have questions? Our team is here to help.
        </p>
        <Link
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Contact Us
        </Link>
      </div>
    </Section>
  );
};

export default Faq;
