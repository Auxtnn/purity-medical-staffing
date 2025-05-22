"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { QuoteIcon } from "lucide-react";

// Mock testimonial data (in a real app, this would come from an API)
const testimonials = [
  {
    id: 1,
    quote:
      "Purity Medical Staffing has been an invaluable partner. Their professionals consistently deliver exceptional care, and their responsiveness to our urgent needs has been outstanding.",
    author: "Sarah Johnson",
    title: "Director of Nursing",
    facility: "Memorial Hospital",
    image: "/images/2.jpg",
  },
  {
    id: 2,
    quote:
      "Working with Purity has transformed my career. Their team truly understands my goals and preferences, finding me positions that align perfectly with my skills and schedule needs.",
    author: "Michael Rodriguez",
    title: "Registered Nurse",
    facility: "Multiple Facilities",
    image: "/images/2.jpg",
  },
  {
    id: 3,
    quote:
      "The quality of professionals that Purity provides is consistently excellent. They've become our first call whenever we need staffing support.",
    author: "Rebecca Chen",
    title: "HR Director",
    facility: "Sunshine Assisted Living",
    image: "/images/2.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-13 md:py-16 bg-primary text-white" ref={ref}>
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What People Say About Us
          </h2>
          <p className="text-white/80 text-lg">
            Don't just take our word for it. Hear from the healthcare facilities
            and professionals we work with.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Large Quote Icon */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-20">
              <QuoteIcon size={80} />
            </div>

            {/* Testimonial Carousel */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
              <div className="text-2xl md:text-3xl font-light italic mb-8">
                "{testimonials[activeIndex].quote}"
              </div>

              <div className="flex items-center">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-white/80">
                    {testimonials[activeIndex].title}
                  </p>
                  <p className="text-white/80">
                    {testimonials[activeIndex].facility}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-white w-6" : "bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
