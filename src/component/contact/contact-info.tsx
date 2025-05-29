"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray text-lg mb-8">
          We're here to answer your questions and discuss how we can support
          your staffing needs or career goals. Reach out today to start a
          conversation.
        </p>

        <div className="space-y-6 mb-8">
          <div className="flex items-start">
            <div className="bg-primary p-3 rounded-full shadow-sm mr-4">
              <Phone size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Call Us</h3>
              <p className="text-gray">541-224-6807</p>
              <Badge variant="success" size="sm" className="mt-2">
                Available 24/7
              </Badge>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-primary p-3 rounded-full shadow-sm mr-4">
              <Mail size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email Us</h3>
              <p className="text-gray">info@puritymedicalstaffing.com</p>
              <p className="text-sm text-gray mt-1">
                We typically respond within 1 business day
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-primary p-3 rounded-full shadow-sm mr-4">
              <MapPin size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Our Office</h3>
              <p className="text-gray">5441 S Macadam Ave </p>
              <p className="text-gray">Ste N Portland OR 97239, USA.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-primary p-3 rounded-full shadow-sm mr-4">
              <Clock size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
              <p className="text-gray">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-gray font-medium mt-2">
                Support Available 24/7
              </p>
            </div>
          </div>
        </div>

        <Card className="p-6 bg-accent/10 border-accent">
          <h3 className="text-lg font-semibold mb-2 text-accent">
            Urgent Staffing Needs?
          </h3>
          <p className="mb-4">
            We understand that staffing emergencies can arise at any time. Our
            dedicated rapid response team is available 24/7 to address urgent
            staffing requirements.
          </p>
          <div className="flex items-center">
            <Phone size={18} className="text-accent mr-2" />
            <span className="font-medium">
              Call our priority line: 541-224-6807
            </span>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
