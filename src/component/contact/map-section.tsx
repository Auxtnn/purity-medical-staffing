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

const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section ref={ref} className="pb-0">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
        <p className="text-gray">
          Our office is conveniently located in downtown Portland. Feel free to
          visit us during business hours.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="h-96 bg-gray-medium rounded-xl overflow-hidden"
      >
        {/* Replace with actual Google Maps embed */}
        <div className="w-full h-full flex items-center justify-center bg-gray-light">
          <p className="text-gray">Google Maps Embed will be placed here</p>
        </div>
      </motion.div>
    </Section>
  );
};

export default MapSection;
