"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Phone, Mail, Clock } from "lucide-react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        inquiryType: "general",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="pb-6 pt-6 md:pb-12 bg-gray-light">
      <div className="container lg:w-11/12 px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-gray text-lg mb-8">
                We're here to answer your questions and discuss how we can
                support your staffing needs or career goals. Reach out today to
                start a conversation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray">541-224-6807</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray">info@puritymedicalstaffing.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">24/7 Availability</h3>
                    <p className="text-gray">
                      We're here for you around the clock — because healthcare
                      never sleeps.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6">How Can We Help?</h3>

              {isSubmitted ? (
                <div className="bg-success/10 border border-success text-success p-4 rounded-md">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We've received your inquiry and will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      fullWidth
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      fullWidth
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Input
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      fullWidth
                    />
                    <Select
                      label="Inquiry Type"
                      name="inquiryType"
                      value={formState.inquiryType}
                      onChange={handleSelectChange("inquiryType")}
                      options={[
                        { value: "general", label: "General Inquiry" },
                        { value: "facility", label: "Facility Staffing" },
                        {
                          value: "professional",
                          label: "Healthcare Professional",
                        },
                        { value: "urgent", label: "Urgent Staffing Need" },
                      ]}
                      fullWidth
                    />
                  </div>

                  <Textarea
                    label="Message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your needs or questions..."
                    fullWidth
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="mt-6 w-full"
                    isLoading={isSubmitting}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
