import { Metadata } from "next";
import { PageHeader } from "@/component/layout/PageHeader";
import JobListingPage from "@/component/jobs/job-listing-page";
import HeroJob from "@/component/jobs/JobHero";

export const metadata: Metadata = {
  title: "Job Listings | Purity Medical Staffing",
  description:
    "Browse and apply for healthcare job opportunities with Purity Medical Staffing.",
};

export default function JobsPage() {
  return (
    <>
      <HeroJob />
      <JobListingPage />
    </>
  );
}
