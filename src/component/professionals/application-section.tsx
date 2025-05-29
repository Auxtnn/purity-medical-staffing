"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { ArrowRight, FileText, Phone, Mail } from "lucide-react";

const ApplicationSection = () => {
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
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join our community of valued healthcare professionals and discover
            opportunities that align with your career goals and lifestyle
            preferences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/jobs">
              <Button variant="secondary" size="lg" className="font-medium">
                Browse Jobs & Apply
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white  hover:text-primary font-medium"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Quick Application</h3>
              <p className="text-white/80 text-sm">
                Our streamlined application process gets you working faster.
                Most applications are reviewed within 24 hours.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">
                Personalized Matching
              </h3>
              <p className="text-white/80 text-sm">
                We take the time to understand your preferences and match you
                with positions that fit your career goals.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Ongoing Support</h3>
              <p className="text-white/80 text-sm">
                From credentialing to career development, our team supports you
                throughout your entire journey with us.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/80">
              Questions about getting started? Call us at{" "}
              <Link
                href="tel:541-224-6807"
                className="text-accent font-medium hover:underline"
              >
                541-224-6807
              </Link>{" "}
              or email{" "}
              <Link
                href="mailto:info@puritymedicalstaffing.com"
                className="text-accent font-medium hover:underline"
              >
                info@puritymedicalstaffing.com
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ApplicationSection;
