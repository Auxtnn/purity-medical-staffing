"use client";

import { useState, useEffect } from "react";
import SearchFilters from "./search-filters";
import JobList from "./job-list";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { MapPin, Briefcase, Clock } from "lucide-react";

// Job listing type definition
export type JobListing = {
  id: string;
  title: string;
  facility: string;
  location: string;
  state: string;
  city: string;
  type: string;
  schedule: string;
  specialty?: string;
  urgentNeed: boolean;
  postedDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary?: string;
  benefits?: string[];
};

// Filter state type
type FilterState = {
  keyword: string;
  state: string;
  city: string;
  role: string;
  type: string;
  specialty: string;
};

// Mock job data - in a real application, this would come from an API
const mockJobListings: JobListing[] = [
  {
    id: "job-1",
    title: "Registered Nurse - Emergency Department",
    facility: "Memorial Hospital",
    location: "Portland, OR",
    state: "OR",
    city: "Portland",
    type: "Full-time",
    schedule: "Day Shift",
    specialty: "Emergency",
    urgentNeed: true,
    postedDate: "May 18, 2025",
    salary: "$75,000 - $95,000",
    description:
      "We are seeking an experienced Registered Nurse to join our dynamic Emergency Department team. In this role, you will provide direct patient care in a fast-paced environment, working collaboratively with physicians and other healthcare professionals to deliver exceptional care to patients with acute and critical conditions.",
    requirements: [
      "Active Registered Nurse (RN) license in the state of Oregon",
      "BLS and ACLS certification required; PALS preferred",
      "Minimum of 2 years of Emergency Department experience",
      "Strong clinical assessment and critical thinking skills",
      "Excellent communication and interpersonal skills",
      "Ability to work in a fast-paced environment and handle high-stress situations",
      "Bachelor of Science in Nursing (BSN) preferred",
    ],
    responsibilities: [
      "Perform initial patient assessments and triage in the emergency department",
      "Administer medications and treatments as prescribed by physicians",
      "Monitor patient vital signs and report changes in condition",
      "Document patient care information in electronic medical records",
      "Collaborate with interdisciplinary healthcare team members",
      "Provide patient education regarding treatment plans and discharge instructions",
      "Respond to emergency situations according to established protocols",
    ],
    benefits: [
      "Comprehensive health insurance",
      "401(k) with company match",
      "Paid time off and holidays",
      "Continuing education support",
      "Professional development opportunities",
    ],
  },
  {
    id: "job-2",
    title: "Licensed Practical Nurse",
    facility: "Sunshine Assisted Living",
    location: "Seattle, WA",
    state: "WA",
    city: "Seattle",
    type: "Part-time",
    schedule: "Evening Shift",
    specialty: "Long-Term Care",
    urgentNeed: false,
    postedDate: "May 15, 2025",
    salary: "$28 - $35/hour",
    description:
      "Sunshine Assisted Living is seeking a compassionate Licensed Practical Nurse to join our care team. The ideal candidate will be dedicated to enhancing the quality of life for our residents through personalized care and attention. This position offers a supportive work environment and the opportunity to build meaningful relationships with residents and their families.",
    requirements: [
      "Active LPN license in the state of Washington",
      "Current CPR/BLS certification",
      "Minimum of 1 year experience in long-term care or assisted living",
      "Strong understanding of medication administration and management",
      "Excellent communication and interpersonal skills",
      "Ability to work independently and as part of a team",
      "Compassionate and patient-centered approach to care",
    ],
    responsibilities: [
      "Administer medications and treatments according to physician orders",
      "Perform routine nursing procedures and assessments",
      "Document resident care information accurately in electronic health records",
      "Monitor and report changes in residents' conditions",
      "Assist in developing and updating care plans",
      "Communicate effectively with residents, families, and other healthcare professionals",
      "Ensure compliance with state regulations and facility policies",
    ],
    benefits: [
      "Flexible scheduling",
      "Health insurance options",
      "Paid training",
      "Career advancement opportunities",
    ],
  },
  {
    id: "job-3",
    title: "Certified Nursing Assistant",
    facility: "Highland Care Center",
    location: "Boise, ID",
    state: "ID",
    city: "Boise",
    type: "Contract",
    schedule: "Weekends",
    specialty: "Long-Term Care",
    urgentNeed: true,
    postedDate: "May 14, 2025",
    salary: "$18 - $22/hour",
    description:
      "Highland Care Center is currently seeking dedicated Certified Nursing Assistants to join our weekend team. As a CNA, you will play a vital role in providing compassionate care and support to our residents. This position is perfect for those looking for flexible weekend hours while making a meaningful difference in the lives of others.",
    requirements: [
      "Current CNA certification in the state of Idaho",
      "High school diploma or equivalent",
      "CPR/BLS certification",
      "Physical ability to assist with resident transfers and positioning",
      "Excellent communication skills and a positive attitude",
      "Reliable transportation and ability to work weekends",
      "Previous experience in long-term care or skilled nursing preferred but not required",
    ],
    responsibilities: [
      "Assist residents with activities of daily living (bathing, dressing, grooming, etc.)",
      "Take and record vital signs as scheduled",
      "Provide mobility assistance and help with transfers",
      "Serve meals and assist with feeding as needed",
      "Respond promptly to call lights and resident requests",
      "Observe and report changes in resident condition to nursing staff",
      "Maintain a clean, safe, and comfortable environment for residents",
    ],
    benefits: [
      "Competitive weekend rates",
      "Flexible scheduling",
      "On-the-job training",
    ],
  },
  {
    id: "job-4",
    title: "Medication Aide",
    facility: "Golden Years Retirement Community",
    location: "Eugene, OR",
    state: "OR",
    city: "Eugene",
    type: "PRN",
    schedule: "Flexible",
    specialty: "Long-Term Care",
    urgentNeed: false,
    postedDate: "May 10, 2025",
    salary: "$20 - $25/hour",
    description:
      "Golden Years Retirement Community is seeking a reliable Medication Aide to join our team on a PRN (as needed) basis. The ideal candidate will have experience in medication administration in a senior living environment and a strong commitment to providing compassionate care to our residents. This position offers flexible scheduling and competitive pay.",
    requirements: [
      "Current Medication Aide certification in the state of Oregon",
      "CNA certification preferred",
      "CPR/BLS certification",
      "Minimum of 1 year experience in medication administration",
      "Knowledge of medication side effects and drug interactions",
      "Strong attention to detail and excellent documentation skills",
      "Ability to work flexible hours, including some weekends and holidays",
    ],
    responsibilities: [
      "Administer medications to residents according to prescribed orders",
      "Document medication administration accurately in electronic records",
      "Monitor residents for medication effectiveness and adverse reactions",
      "Maintain accurate medication inventory and manage medication supply",
      "Communicate with nurses and healthcare providers regarding resident needs",
      "Assist in developing and implementing resident care plans",
      "Ensure compliance with state regulations regarding medication administration",
    ],
    benefits: [
      "PRN flexibility",
      "Competitive hourly rates",
      "Professional development support",
    ],
  },
  {
    id: "job-5",
    title: "Registered Nurse - Medical-Surgical Unit",
    facility: "Northwest Regional Hospital",
    location: "Seattle, WA",
    state: "WA",
    city: "Seattle",
    type: "Full-time",
    schedule: "Night Shift",
    specialty: "Medical-Surgical",
    urgentNeed: true,
    postedDate: "May 9, 2025",
    salary: "$80,000 - $100,000",
    description:
      "Northwest Regional Hospital is seeking an experienced Registered Nurse to join our Medical-Surgical unit on the night shift. In this role, you will provide comprehensive nursing care to adult patients with a variety of medical conditions and surgical procedures. The ideal candidate will have strong clinical skills, excellent time management, and a commitment to patient-centered care.",
    requirements: [
      "Active Registered Nurse (RN) license in the state of Washington",
      "BLS certification required; ACLS preferred",
      "Minimum of 1 year of acute care experience",
      "Strong clinical assessment and critical thinking skills",
      "Experience with electronic medical records",
      "Excellent communication and interpersonal skills",
      "Bachelor of Science in Nursing (BSN) preferred",
    ],
    responsibilities: [
      "Perform comprehensive patient assessments and develop nursing care plans",
      "Administer medications and treatments according to physician orders",
      "Monitor patient status and report changes in condition",
      "Coordinate patient care activities with interdisciplinary team members",
      "Provide education to patients and families regarding condition and treatment plan",
      "Document care accurately in electronic medical records",
      "Support new graduates and participate in unit-based improvement initiatives",
    ],
    benefits: [
      "Night shift differential",
      "Comprehensive benefits package",
      "Tuition reimbursement",
      "Career ladder program",
    ],
  },
  {
    id: "job-6",
    title: "Travel Registered Nurse - ICU",
    facility: "Various Locations",
    location: "Multiple Cities, OR",
    state: "OR",
    city: "Multiple",
    type: "Travel",
    schedule: "12-Hour Shifts",
    specialty: "ICU/Critical Care",
    urgentNeed: true,
    postedDate: "May 5, 2025",
    salary: "$2,200 - $2,800/week",
    description:
      "We are currently seeking experienced ICU Registered Nurses for travel assignments at various hospitals throughout Oregon. These positions offer competitive pay, housing stipends, and the opportunity to gain diverse critical care experience in different healthcare settings. Assignments typically range from 8 to 13 weeks with potential for extension.",
    requirements: [
      "Active Registered Nurse (RN) license in the state of Oregon or compact license",
      "Minimum of 2 years recent ICU/Critical Care experience",
      "BLS, ACLS, and PALS certifications",
      "Experience with ventilators, vasoactive drips, and critical care equipment",
      "Strong clinical assessment and critical thinking skills",
      "Flexibility and adaptability to different hospital environments",
      "Bachelor of Science in Nursing (BSN) required",
    ],
    responsibilities: [
      "Provide direct patient care to critically ill patients",
      "Administer medications and treatments according to physician orders",
      "Monitor and interpret cardiac rhythms and hemodynamic parameters",
      "Respond to emergency situations and participate in resuscitation efforts",
      "Collaborate with interdisciplinary team members",
      "Document care accurately in electronic medical records",
      "Adapt quickly to different hospital protocols and systems",
    ],
    benefits: [
      "Weekly travel stipend",
      "Housing assistance",
      "Medical/dental insurance",
      "Completion bonuses",
    ],
  },
];

const JobListingPage = () => {
  const [jobs, setJobs] = useState<JobListing[]>(mockJobListings);
  const [filteredJobs, setFilteredJobs] =
    useState<JobListing[]>(mockJobListings);
  const [filters, setFilters] = useState<FilterState>({
    keyword: "",
    state: "",
    city: "",
    role: "",
    type: "",
    specialty: "",
  });
  const [loading, setLoading] = useState(false);
  const [totalJobs] = useState(mockJobListings.length);

  // Handle filter changes
  const handleFilterChange = (filterName: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  // Handle search functionality
  const handleSearch = () => {
    setLoading(true);

    // Simulate API call with delay
    setTimeout(() => {
      let filtered = [...jobs];

      // Filter by keyword (search in title, facility, description)
      if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        filtered = filtered.filter(
          (job) =>
            job.title.toLowerCase().includes(keyword) ||
            job.facility.toLowerCase().includes(keyword) ||
            job.description.toLowerCase().includes(keyword)
        );
      }

      // Filter by state
      if (filters.state) {
        filtered = filtered.filter((job) => job.state === filters.state);
      }

      // Filter by city
      if (filters.city) {
        filtered = filtered.filter((job) =>
          job.city.toLowerCase().includes(filters.city.toLowerCase())
        );
      }

      // Filter by role (extracted from title)
      if (filters.role) {
        filtered = filtered.filter((job) =>
          job.title.toLowerCase().includes(filters.role.toLowerCase())
        );
      }

      // Filter by job type
      if (filters.type) {
        filtered = filtered.filter((job) => job.type === filters.type);
      }

      // Filter by specialty
      if (filters.specialty) {
        filtered = filtered.filter(
          (job) => job.specialty === filters.specialty
        );
      }

      setFilteredJobs(filtered);
      setLoading(false);
    }, 800);
  };

  // Reset filters
  const handleResetFilters = () => {
    setFilters({
      keyword: "",
      state: "",
      city: "",
      role: "",
      type: "",
      specialty: "",
    });
    setFilteredJobs(jobs);
  };

  // Initial search on component mount
  useEffect(() => {
    handleSearch();
  }, []);

  // Auto-search when filters change (with debounce)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [filters]);

  return (
    <>
      {/* Search Filters Section */}
      <Section bgColor="light">
        <SearchFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          onReset={handleResetFilters}
        />
      </Section>

      {/* Job Results Section */}
      <Section>
        {/* Results Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {loading
                  ? "Searching..."
                  : `${filteredJobs.length} ${
                      filteredJobs.length === 1 ? "Position" : "Positions"
                    } Available`}
              </h2>
              <p className="text-gray">
                {loading
                  ? "Finding the best opportunities for you..."
                  : filteredJobs.length === totalJobs
                  ? "Browse our current openings and find your perfect match. New positions are added daily."
                  : `Showing filtered results from ${totalJobs} total positions.`}
              </p>
            </div>

            {/* Quick Stats */}
            {!loading && (
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary/10 px-3 py-2 rounded-md">
                  <span className="text-sm font-medium text-primary">
                    {filteredJobs.filter((job) => job.urgentNeed).length} Urgent
                  </span>
                </div>
                <div className="bg-accent/10 px-3 py-2 rounded-md">
                  <span className="text-sm font-medium text-accent">
                    {filteredJobs.filter((job) => job.type === "Travel").length}{" "}
                    Travel
                  </span>
                </div>
                <div className="bg-gray-medium px-3 py-2 rounded-md">
                  <span className="text-sm font-medium text-gray-dark">
                    {
                      filteredJobs.filter((job) => job.type === "Full-time")
                        .length
                    }{" "}
                    Full-time
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Active Filters Display */}
          {Object.values(filters).some((filter) => filter !== "") &&
            !loading && (
              <div className="mt-4 p-4 bg-gray-light rounded-lg">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-gray-dark">
                    Active filters:
                  </span>
                  {Object.entries(filters).map(
                    ([key, value]) =>
                      value && (
                        <span
                          key={key}
                          className="inline-flex items-center px-2 py-1 bg-primary text-white text-xs rounded-full"
                        >
                          {key}: {value}
                          <button
                            onClick={() =>
                              handleFilterChange(key as keyof FilterState, "")
                            }
                            className="ml-1 hover:bg-primary-light rounded-full p-0.5"
                          >
                            ×
                          </button>
                        </span>
                      )
                  )}
                  <button
                    onClick={handleResetFilters}
                    className="text-xs text-primary hover:underline ml-2"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}
        </div>

        {/* Job Listings */}
        <JobList jobs={filteredJobs} loading={loading} />

        {/* No Results State */}
        {!loading && filteredJobs.length === 0 && (
          <Card className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">No Jobs Found</h3>
            <p className="text-gray mb-6">
              We couldn't find any jobs matching your search criteria. Try
              adjusting your filters or check back later for new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={handleResetFilters} className="btn btn-primary">
                Reset Filters
              </button>
              <button
                onClick={() => (window.location.href = "/contact")}
                className="btn btn-outline"
              >
                Contact Us for More Options
              </button>
            </div>
          </Card>
        )}

        {/* Load More / Pagination could go here in a real application */}
        {!loading && filteredJobs.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray mb-4">
              Showing all {filteredJobs.length} available positions
            </p>
            <p className="text-sm text-gray">
              New jobs are posted daily. Check back frequently or{" "}
              <a href="/contact" className="text-primary hover:underline">
                contact us
              </a>{" "}
              to be notified of new opportunities.
            </p>
          </div>
        )}
      </Section>
    </>
  );
};

export default JobListingPage;
