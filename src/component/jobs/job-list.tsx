import Link from "next/link";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { MapPin, Briefcase, Clock, Calendar, ArrowRight } from "lucide-react";
import type { JobListing } from "./job-listing-page";

type JobListProps = {
  jobs: JobListing[];
  loading: boolean;
};

const JobList = ({ jobs, loading }: JobListProps) => {
  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-6 bg-gray-medium rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-medium rounded w-1/2 mb-3"></div>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="h-4 bg-gray-medium rounded w-1/4"></div>
              <div className="h-4 bg-gray-medium rounded w-1/5"></div>
              <div className="h-4 bg-gray-medium rounded w-1/6"></div>
            </div>
            <div className="h-4 bg-gray-medium rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-medium rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-medium rounded w-3/4"></div>
          </Card>
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <Card className="p-8 text-center">
        <h3 className="text-xl font-semibold mb-3">No Jobs Found</h3>
        <p className="text-gray mb-6">
          We couldn't find any jobs matching your search criteria. Try adjusting
          your filters or check back later for new opportunities.
        </p>
        <Button variant="primary" onClick={() => window.location.reload()}>
          Reset Filters
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <Link key={job.id} href={`/jobs/${job.id}`} className="block group">
          <Card className="p-6 border border-gray-medium group-hover:border-primary group-hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  {job.urgentNeed && (
                    <Badge variant="error" size="sm">
                      Urgent
                    </Badge>
                  )}
                </div>
                <p className="text-primary font-medium">{job.facility}</p>
              </div>

              <div className="mt-3 md:mt-0 flex items-center text-sm">
                <Calendar size={14} className="mr-1 text-gray" />
                <span className="text-gray">Posted: {job.postedDate}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-gray text-sm">
                <MapPin size={16} className="mr-1.5 flex-shrink-0" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray text-sm">
                <Briefcase size={16} className="mr-1.5 flex-shrink-0" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center text-gray text-sm">
                <Clock size={16} className="mr-1.5 flex-shrink-0" />
                <span>{job.schedule}</span>
              </div>
            </div>

            <p className="text-gray line-clamp-3 mb-4">{job.description}</p>

            <div className="flex justify-between items-center">
              <span className="text-primary text-sm font-medium flex items-center">
                View Details
                <ArrowRight size={14} className="ml-1" />
              </span>

              <Button variant="outline" size="sm">
                Apply Now
              </Button>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default JobList;
