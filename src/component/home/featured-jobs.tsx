"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight, Building2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";

// Mock data for featured jobs (in a real app, this would come from an API)
const featuredJobs = [
  {
    id: "job-1",
    title: "Registered Nurse - Emergency Department",
    facility: "Memorial Hospital",
    location: "Portland, OR",
    type: "Full-time",
    schedule: "Day Shift",
    urgentNeed: true,
    salary: "$75,000 - $85,000",
    benefits: ["Health Insurance", "401k Match", "PTO"],
  },
  {
    id: "job-2",
    title: "Licensed Practical Nurse",
    facility: "Sunshine Assisted Living",
    location: "Seattle, WA",
    type: "Part-time",
    schedule: "Evening Shift",
    urgentNeed: false,
    salary: "$28 - $32/hour",
    benefits: ["Flexible Schedule", "Training", "Bonuses"],
  },
  {
    id: "job-3",
    title: "Certified Nursing Assistant",
    facility: "Highland Care Center",
    location: "Boise, ID",
    type: "Contract",
    schedule: "Weekends",
    urgentNeed: true,
    salary: "$22 - $26/hour",
    benefits: ["Weekend Premium", "Mileage", "Support"],
  },
];

const FeaturedJobs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-primary/10 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container lg:w-11/12 px-4 mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="inline-flex items-center px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <Briefcase size={16} className="mr-2" />
            Opportunities That Match Your Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Featured Job
            <span className="text-primary block md:inline md:ml-3">
              Opportunities
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Discover premium healthcare positions with top-rated facilities
            across the country. Every opportunity is vetted for quality,
            compensation, and growth potential.
          </p>

          <Link href="/jobs">
            <Button variant="outline" size="lg" className="font-semibold">
              View All Opportunities
            </Button>
          </Link>
        </motion.div>

        {/* Jobs Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredJobs.map((job, index) => (
            <motion.div key={job.id} variants={itemVariants}>
              <Link href={`/jobs/${job.id}`} className="block h-full group">
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/95 backdrop-blur-sm">
                  {/* Header with Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      {job.urgentNeed && (
                        <Badge
                          variant="error"
                          size="sm"
                          className="mb-3 bg-red-500/10 text-red-600 border-red-200"
                        >
                          <Clock size={12} className="mr-1" />
                          Urgent Need
                        </Badge>
                      )}
                      <h3 className="text-lg font-bold line-clamp-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {job.title}
                      </h3>
                    </div>
                  </div>

                  {/* Facility */}
                  <p className="text-primary font-semibold text-base mb-4">
                    {job.facility}
                  </p>

                  {/* Job Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                        <MapPin size={14} className="text-gray-500" />
                      </div>
                      <span className="font-medium">{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                        <Briefcase size={14} className="text-gray-500" />
                      </div>
                      <span className="font-medium">{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                        <Clock size={14} className="text-gray-500" />
                      </div>
                      <span className="font-medium">{job.schedule}</span>
                    </div>
                  </div>

                  {/* Salary */}
                  <div className="bg-primary/5 rounded-lg p-3 mb-4">
                    <div className="text-lg font-bold text-primary">
                      {job.salary}
                    </div>
                    <div className="text-xs text-gray-600">
                      Competitive compensation
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-gray-700 mb-2">
                      Key Benefits:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {job.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                      {job.benefits.length > 2 && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          +{job.benefits.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-sm font-semibold group-hover:text-primary-dark transition-colors duration-300">
                        View Details
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-primary group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Don't See Your Perfect Match?
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Our team works with you to find opportunities that align with your
              career goals, schedule, and compensation expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-gray-50 font-semibold"
                href="/contact"
              >
                Get Personalized Matches
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 font-semibold"
                href="/jobs"
              >
                Browse All Jobs
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
