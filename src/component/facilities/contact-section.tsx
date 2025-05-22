"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Phone, Mail, Clock, AlertCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Let's Discuss Your Staffing Needs
          </h2>
          <p className="text-gray text-lg mb-8">
            Ready to experience the difference that quality staffing can make?
            Our team is here to answer your questions and discuss how we can
            support your facility's unique needs.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary p-3 rounded-full mr-4">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                <p className="text-gray">541-224-6807</p>
                <p className="text-sm text-primary">
                  Available 24/7 for urgent needs
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary p-3 rounded-full mr-4">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                <p className="text-gray">info@puritymedicalstaffing.com</p>
                <p className="text-sm text-primary">
                  We respond within 4 hours
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary p-3 rounded-full mr-4">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                <p className="text-gray">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-sm text-primary">
                  Emergency support available 24/7
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-accent/10 border-accent">
            <div className="flex items-start mb-4">
              <AlertCircle size={24} className="text-accent mr-3 mt-1" />
              <h3 className="text-xl font-semibold text-accent">
                Urgent Staffing Emergency?
              </h3>
            </div>
            <p className="text-gray mb-6">
              We understand that staffing emergencies can happen at any time.
              Our rapid response team is available 24/7 to address critical
              staffing needs and ensure your facility maintains safe patient
              ratios.
            </p>
            <div className="space-y-4">
              <Link href="tel:541-224-6807">
                <Button variant="secondary" size="lg" fullWidth>
                  <Phone size={18} className="mr-2" />
                  Call Emergency Line: 541-224-6807
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <Mail size={18} className="mr-2" />
                  Send Urgent Request
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray mt-4 text-center">
              Average response time: 15 minutes for urgent requests
            </p>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactSection;
