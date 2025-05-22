"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonial";

const facilityTestimonials = testimonials.filter(
  (t) => t.category === "facility"
);

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % facilityTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + facilityTestimonials.length) % facilityTestimonials.length
    );
  };

  return (
    <Section bgColor="light" ref={ref}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold text-lg mb-2 block">
          Client Feedback
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Facilities Say About Us
        </h2>
        <p className="text-gray text-lg">
          Don't just take our word for it. Hear from the healthcare facilities
          we partner with about their experience working with Purity Medical
          Staffing.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="absolute top-6 left-6 text-primary opacity-20">
          <Quote size={60} />
        </div>

        <Card className="p-8 md:p-12 relative">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src={facilityTestimonials[activeIndex].image}
                  alt={facilityTestimonials[activeIndex].author}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-xl italic mb-8">
                "{facilityTestimonials[activeIndex].quote}"
              </p>

              <div>
                <h4 className="text-lg font-semibold">
                  {facilityTestimonials[activeIndex].author}
                </h4>
                <p className="text-primary">
                  {facilityTestimonials[activeIndex].title}
                </p>
                <p className="text-gray">
                  {facilityTestimonials[activeIndex].facility}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {facilityTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary w-6" : "bg-gray-medium"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-light hover:bg-gray-medium transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-light hover:bg-gray-medium transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};

export default TestimonialsSection;
