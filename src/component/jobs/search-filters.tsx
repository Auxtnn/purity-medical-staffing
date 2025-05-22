// components/jobs/search-filters.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Search, X } from "lucide-react";

// Mock data for select options
const stateOptions = [
  { value: "", label: "All States" },
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "OR", label: "Oregon" },
  { value: "WA", label: "Washington" },
  // Add more states as needed
];

const cityOptions = [
  { value: "", label: "All Cities" },
  { value: "Portland", label: "Portland" },
  { value: "Seattle", label: "Seattle" },
  { value: "Boise", label: "Boise" },
  { value: "Eugene", label: "Eugene" },
  { value: "San Francisco", label: "San Francisco" },
  // Add more cities as needed
];

const roleOptions = [
  { value: "", label: "All Roles" },
  { value: "RN", label: "Registered Nurse (RN)" },
  { value: "LPN", label: "Licensed Practical Nurse (LPN)" },
  { value: "CNA", label: "Certified Nursing Assistant (CNA)" },
  { value: "Medication Aide", label: "Medication Aide" },
  // Add more roles as needed
];

const typeOptions = [
  { value: "", label: "All Job Types" },
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Contract", label: "Contract" },
  { value: "PRN", label: "PRN" },
  { value: "Travel", label: "Travel" },
  // Add more types as needed
];

const specialtyOptions = [
  { value: "", label: "All Specialties" },
  { value: "Emergency", label: "Emergency" },
  { value: "ICU", label: "ICU/Critical Care" },
  { value: "Medical-Surgical", label: "Medical-Surgical" },
  { value: "Pediatrics", label: "Pediatrics" },
  { value: "Long-Term Care", label: "Long-Term Care" },
  // Add more specialties as needed
];

type FilterState = {
  keyword: string;
  state: string;
  city: string;
  role: string;
  type: string;
  specialty: string;
};

type SearchFiltersProps = {
  filters: FilterState;
  onFilterChange: (filterName: keyof FilterState, value: string) => void;
  onSearch: () => void;
};

const SearchFilters = ({
  filters,
  onFilterChange,
  onSearch,
}: SearchFiltersProps) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange(name as keyof FilterState, value);
  };

  const handleSelectChange = (name: keyof FilterState) => (value: string) => {
    onFilterChange(name, value);
  };

  const handleResetFilters = () => {
    onFilterChange("keyword", "");
    onFilterChange("state", "");
    onFilterChange("city", "");
    onFilterChange("role", "");
    onFilterChange("type", "");
    onFilterChange("specialty", "");

    // Trigger search after state update
    setTimeout(onSearch, 0);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="relative">
            <Input
              placeholder="Search jobs by keyword..."
              name="keyword"
              value={filters.keyword}
              onChange={handleInputChange}
              className="pl-10"
              fullWidth
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray">
              <Search size={18} />
            </div>
          </div>
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Select
            options={stateOptions}
            value={filters.state}
            onChange={handleSelectChange("state")}
            placeholder="Select State"
            fullWidth
          />

          <Select
            options={cityOptions}
            value={filters.city}
            onChange={handleSelectChange("city")}
            placeholder="Select City"
            fullWidth
          />

          <Select
            options={roleOptions}
            value={filters.role}
            onChange={handleSelectChange("role")}
            placeholder="Select Role"
            fullWidth
          />

          <Select
            options={typeOptions}
            value={filters.type}
            onChange={handleSelectChange("type")}
            placeholder="Select Job Type"
            fullWidth
          />

          <Select
            options={specialtyOptions}
            value={filters.specialty}
            onChange={handleSelectChange("specialty")}
            placeholder="Select Specialty"
            fullWidth
          />
        </div>

        {/* Mobile Filters Toggle */}
        <div className="md:hidden">
          <Button
            type="button"
            variant="outline"
            fullWidth
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="mb-4"
          >
            {showMobileFilters ? "Hide Filters" : "Show Filters"}
          </Button>

          {showMobileFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 mb-4"
            >
              <Select
                options={stateOptions}
                value={filters.state}
                onChange={handleSelectChange("state")}
                placeholder="Select State"
                fullWidth
              />

              <Select
                options={cityOptions}
                value={filters.city}
                onChange={handleSelectChange("city")}
                placeholder="Select City"
                fullWidth
              />

              <Select
                options={roleOptions}
                value={filters.role}
                onChange={handleSelectChange("role")}
                placeholder="Select Role"
                fullWidth
              />

              <Select
                options={typeOptions}
                value={filters.type}
                onChange={handleSelectChange("type")}
                placeholder="Select Job Type"
                fullWidth
              />

              <Select
                options={specialtyOptions}
                value={filters.specialty}
                onChange={handleSelectChange("specialty")}
                placeholder="Select Specialty"
                fullWidth
              />
            </motion.div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button type="submit" variant="primary" fullWidth>
            Search Jobs
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={handleResetFilters}
            fullWidth
            className="flex items-center justify-center"
          >
            <X size={16} className="mr-2" />
            Reset Filters
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;
