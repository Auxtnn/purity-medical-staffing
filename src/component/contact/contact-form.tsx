"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { CheckCircle } from "lucide-react";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

        {isSubmitted ? (
          <div className="bg-success/10 border border-success text-success p-6 rounded-md text-center">
            <CheckCircle size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p>
              Your message has been sent successfully. We'll get back to you
              shortly.
            </p>
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
                  { value: "professional", label: "Healthcare Professional" },
                  { value: "urgent", label: "Urgent Staffing Need" },
                  { value: "other", label: "Other" },
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
      </Card>
    </motion.div>
  );
};

export default ContactForm;
