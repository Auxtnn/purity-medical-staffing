"use client";

import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import {
  MapPin,
  Briefcase,
  Clock,
  Calendar,
  FileText,
  CheckCircle,
  DollarSign,
  Clipboard,
} from "lucide-react";
import ApplicationForm from "./application-form";
import { jobListings } from "@/data/jobs";
import type { JobListing } from "./job-listing-page";

type JobDetailPageProps = {
  jobId: string;
};

const JobDetailPage = ({ jobId }: JobDetailPageProps) => {
  const [job, setJob] = useState<JobListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch job details
    const fetchJob = () => {
      setLoading(true);
      setTimeout(() => {
        const foundJob = jobListings.find((j) => j.id === jobId);
        setJob(foundJob || null);
        setLoading(false);
      }, 500);
    };

    fetchJob();
  }, [jobId]);

  const toggleApplicationForm = () => {
    setShowApplicationForm(!showApplicationForm);

    // Scroll to application form when opened
    if (!showApplicationForm) {
      setTimeout(() => {
        const formElement = document.getElementById("application-form");
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  if (loading) {
    return (
      <Section>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-medium rounded w-3/4 mb-4"></div>
          <div className="h-5 bg-gray-medium rounded w-1/2 mb-6"></div>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="h-5 bg-gray-medium rounded w-1/4"></div>
            <div className="h-5 bg-gray-medium rounded w-1/5"></div>
            <div className="h-5 bg-gray-medium rounded w-1/6"></div>
          </div>
          <div className="h-5 bg-gray-medium rounded w-full mb-3"></div>
          <div className="h-5 bg-gray-medium rounded w-full mb-3"></div>
          <div className="h-5 bg-gray-medium rounded w-4/5 mb-8"></div>

          <div className="h-6 bg-gray-medium rounded w-1/4 mb-4"></div>
          <div className="h-5 bg-gray-medium rounded w-full mb-3"></div>
          <div className="h-5 bg-gray-medium rounded w-full mb-3"></div>
          <div className="h-5 bg-gray-medium rounded w-3/4 mb-3"></div>
        </div>
      </Section>
    );
  }

  if (!job) {
    return (
      <Section>
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Job Not Found</h2>
          <p className="text-gray mb-6">
            We couldn't find the job you're looking for. It may have been filled
            or removed.
          </p>
          <Button variant="primary" href="/jobs">
            Browse All Jobs
          </Button>
        </Card>
      </Section>
    );
  }

  return (
    <>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-start gap-2 mb-2">
                <h1 className="text-3xl font-bold">{job.title}</h1>
                {job.urgentNeed && <Badge variant="error">Urgent Need</Badge>}
              </div>
              <p className="text-primary text-xl font-medium">{job.facility}</p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              <div className="flex items-center text-gray">
                <MapPin size={18} className="mr-2 flex-shrink-0" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray">
                <Briefcase size={18} className="mr-2 flex-shrink-0" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center text-gray">
                <Clock size={18} className="mr-2 flex-shrink-0" />
                <span>{job.schedule}</span>
              </div>
              <div className="flex items-center text-gray">
                <Calendar size={18} className="mr-2 flex-shrink-0" />
                <span>Posted: {job.postedDate}</span>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <FileText size={22} className="mr-2 text-primary" />
                Job Description
              </h2>
              <p className="text-gray mb-6">{job.description}</p>

              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Clipboard size={20} className="mr-2 text-primary" />
                Responsibilities
              </h3>
              <ul className="space-y-2 mb-6">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      size={18}
                      className="text-primary mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Clipboard size={20} className="mr-2 text-primary" />
                Requirements
              </h3>
              <ul className="space-y-2 mb-6">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      size={18}
                      className="text-primary mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                onClick={toggleApplicationForm}
                className="w-full sm:w-auto"
              >
                {showApplicationForm ? "Hide Application Form" : "Apply Now"}
              </Button>
            </div>
          </div>

          <div>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Job Summary</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray mb-1">Position</p>
                  <p className="font-medium">{job.title}</p>
                </div>
                <div>
                  <p className="text-sm text-gray mb-1">Facility</p>
                  <p className="font-medium">{job.facility}</p>
                </div>
                <div>
                  <p className="text-sm text-gray mb-1">Location</p>
                  <p className="font-medium">{job.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray mb-1">Job Type</p>
                  <p className="font-medium">{job.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray mb-1">Schedule</p>
                  <p className="font-medium">{job.schedule}</p>
                </div>
                {job.specialty && (
                  <div>
                    <p className="text-sm text-gray mb-1">Specialty</p>
                    <p className="font-medium">{job.specialty}</p>
                  </div>
                )}
              </div>

              <Button
                variant="primary"
                size="lg"
                onClick={toggleApplicationForm}
                className="w-full"
              >
                Apply Now
              </Button>

              <p className="text-center text-gray text-sm mt-4">
                Quick application process. Apply in minutes!
              </p>
            </Card>

            <Card className="p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <DollarSign size={20} className="mr-2 text-primary" />
                Why Choose Us
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-primary mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span>Competitive compensation packages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-primary mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-primary mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span>Professional growth opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-primary mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span>Supportive team environment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-primary mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span>24/7 on-call support</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {showApplicationForm && (
        <Section bgColor="light" id="application-form">
          <ApplicationForm jobId={job.id} jobTitle={job.title} />
        </Section>
      )}
    </>
  );
};

export default JobDetailPage;
