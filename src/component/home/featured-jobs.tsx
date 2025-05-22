"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
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
  },
  {
    id: "job-2",
    title: "Licensed Practical Nurse",
    facility: "Sunshine Assisted Living",
    location: "Seattle, WA",
    type: "Part-time",
    schedule: "Evening Shift",
    urgentNeed: false,
  },
  {
    id: "job-3",
    title: "Certified Nursing Assistant",
    facility: "Highland Care Center",
    location: "Boise, ID",
    type: "Contract",
    schedule: "Weekends",
    urgentNeed: true,
  },
  {
    id: "job-4",
    title: "Medication Aide",
    facility: "Golden Years Retirement Community",
    location: "Eugene, OR",
    type: "PRN",
    schedule: "Flexible",
    urgentNeed: false,
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-12 md:py-16" ref={ref}>
      <div className="container lg:w-11/12 px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Job Opportunities
            </h2>
            <p className="text-gray text-lg max-w-2xl">
              Discover our latest opportunities for healthcare professionals
              across the country.
            </p>
          </div>
          <Link href="/jobs">
            <Button variant="outline" className="whitespace-nowrap">
              View All Jobs
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredJobs.map((job, index) => (
            <motion.div key={job.id} variants={itemVariants}>
              <Link href={`/jobs/${job.id}`} className="block h-full">
                <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-medium hover:border-primary">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold line-clamp-2 pr-4">
                      {job.title}
                    </h3>
                    {job.urgentNeed && (
                      <Badge variant="error" size="sm">
                        Urgent
                      </Badge>
                    )}
                  </div>

                  <p className="text-primary font-medium mb-4">
                    {job.facility}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray text-sm">
                      <MapPin size={16} className="mr-2 flex-shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray text-sm">
                      <Briefcase size={16} className="mr-2 flex-shrink-0" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray text-sm">
                      <Clock size={16} className="mr-2 flex-shrink-0" />
                      <span>{job.schedule}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-medium">
                    <span className="text-primary text-sm font-medium flex items-center">
                      View Details
                      <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
