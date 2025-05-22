"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";

const FaqSection = () => {
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
        <span className="text-primary font-semibold text-lg mb-2 block">
          Support Center
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray text-lg">
          Find answers to common questions about our services, processes, and
          more. Can't find what you're looking for? Contact us directly.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-8"
      >
        <div className="inline-flex bg-white p-1 rounded-lg shadow-sm">
          <button
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              activeTab === "general"
                ? "bg-primary text-white"
                : "text-gray hover:text-primary"
            }`}
            onClick={() => setActiveTab("general")}
          >
            General
          </button>
          <button
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              activeTab === "facilities"
                ? "bg-primary text-white"
                : "text-gray hover:text-primary"
            }`}
            onClick={() => setActiveTab("facilities")}
          >
            For Facilities
          </button>
          <button
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              activeTab === "professionals"
                ? "bg-primary text-white"
                : "text-gray hover:text-primary"
            }`}
            onClick={() => setActiveTab("professionals")}
          >
            For Professionals
          </button>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
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
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-medium"
                >
                  <button
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-light transition-colors"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <h3 className="text-lg font-semibold pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 transition-transform text-primary ${
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
                          <p className="text-gray leading-relaxed">
                            {faq.answer}
                          </p>
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
    </Section>
  );
};

export default FaqSection;
