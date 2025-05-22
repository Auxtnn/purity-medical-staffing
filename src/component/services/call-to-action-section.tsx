// components/services/call-to-action-section.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { PhoneCall, Mail, ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <Section>
      <div className="bg-primary text-white rounded-xl p-8 md:p-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Quality Staffing?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Let Purity Medical Staffing be your trusted staffing partner—so you
            can focus on what matters most: delivering exceptional patient care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="font-medium border-white text-white  hover:text-primary"
            >
              <Mail size={18} className="mr-2" />
              Contact Us Today
            </Button>

            <Button
              href="tel:541-224-6807"
              variant="outline"
              size="lg"
              className="border-white text-white  hover:text-primary font-medium"
            >
              <PhoneCall size={18} className="mr-2" />
              Call 541-224-6807
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">
                For Healthcare Facilities
              </h3>
              <p className="text-white/80 mb-4">
                Need immediate staffing support or want to discuss your
                facility's ongoing needs?
              </p>
              <Link href="/for-facilities">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-white  hover:text-primary "
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">
                For Healthcare Professionals
              </h3>
              <p className="text-white/80 mb-4">
                Ready to advance your career with flexible opportunities and
                competitive compensation?
              </p>
              <Link href="/for-professionals">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-white  hover:text-primary "
                >
                  Explore Opportunities
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default CallToActionSection;
