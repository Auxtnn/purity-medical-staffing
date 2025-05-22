"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { CheckCircle } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

type ApplicationFormProps = {
  jobId: string;
  jobTitle: string;
};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  professionalRole: string;
  licenseNumber: string;
  licenseState: string;
  experience: string;
  startDate: string;
  resumeUploaded: boolean;
  coverLetterUploaded: boolean;
  certifications: string;
  referenceSource: string;
  agreesToTerms: boolean;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  professionalRole: "",
  licenseNumber: "",
  licenseState: "",
  experience: "",
  startDate: "",
  resumeUploaded: false,
  coverLetterUploaded: false,
  certifications: "",
  referenceSource: "",
  agreesToTerms: false,
};

const ApplicationForm = ({ jobId, jobTitle }: ApplicationFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormState((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({ ...prev, [name]: e.target.checked }));
    };

  const handleFileUpload =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setFormState((prev) => ({ ...prev, [`${name}Uploaded`]: true }));
      }
    };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // In a real application, you would send the form data to an API
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-success/10 rounded-full p-4">
              <CheckCircle size={48} className="text-success" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Application Submitted Successfully!
          </h2>
          <p className="text-gray mb-8">
            Thank you for applying for the <strong>{jobTitle}</strong> position.
            We've received your application and will review it shortly. Our team
            will contact you regarding the next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" href="/jobs">
              Browse More Jobs
            </Button>
            <Button variant="outline" href="/">
              Return to Homepage
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Apply for {jobTitle}</h2>

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between">
          <div
            className={`text-center ${
              currentStep >= 1 ? "text-primary" : "text-gray"
            }`}
          >
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                currentStep >= 1
                  ? "bg-primary text-white"
                  : "bg-gray-medium text-gray"
              }`}
            >
              1
            </div>
            <span className="text-sm">Personal Info</span>
          </div>
          <div
            className={`text-center ${
              currentStep >= 2 ? "text-primary" : "text-gray"
            }`}
          >
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                currentStep >= 2
                  ? "bg-primary text-white"
                  : "bg-gray-medium text-gray"
              }`}
            >
              2
            </div>
            <span className="text-sm">Professional Info</span>
          </div>
          <div
            className={`text-center ${
              currentStep >= 3 ? "text-primary" : "text-gray"
            }`}
          >
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                currentStep >= 3
                  ? "bg-primary text-white"
                  : "bg-gray-medium text-gray"
              }`}
            >
              3
            </div>
            <span className="text-sm">Documents</span>
          </div>
        </div>
        <div className="relative mt-4 h-2 bg-gray-medium rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
          ></div>
        </div>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <Input
                  label="Last Name"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </div>

              <Input
                label="Street Address"
                name="address"
                value={formState.address}
                onChange={handleChange}
                required
                fullWidth
              />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-2 md:col-span-2">
                  <Input
                    label="City"
                    name="city"
                    value={formState.city}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                </div>

                <div>
                  <Select
                    label="State"
                    name="state"
                    value={formState.state}
                    onChange={handleSelectChange("state")}
                    options={[
                      { value: "", label: "Select" },
                      { value: "AL", label: "Alabama" },
                      { value: "AK", label: "Alaska" },
                      { value: "AZ", label: "Arizona" },
                      { value: "OR", label: "Oregon" },
                      { value: "WA", label: "Washington" },
                      // Add all states as needed
                    ]}
                    required
                    fullWidth
                  />
                </div>

                <div>
                  <Input
                    label="ZIP Code"
                    name="zip"
                    value={formState.zip}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <Button type="button" onClick={nextStep} variant="primary">
                  Next Step
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Professional Information */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6">
                Professional Information
              </h3>

              <Select
                label="Professional Role"
                name="professionalRole"
                value={formState.professionalRole}
                onChange={handleSelectChange("professionalRole")}
                options={[
                  { value: "", label: "Select Role" },
                  { value: "RN", label: "Registered Nurse (RN)" },
                  { value: "LPN", label: "Licensed Practical Nurse (LPN)" },
                  { value: "CNA", label: "Certified Nursing Assistant (CNA)" },
                  { value: "Medication Aide", label: "Medication Aide" },
                  // Add more as needed
                ]}
                required
                fullWidth
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="License/Certification Number"
                  name="licenseNumber"
                  value={formState.licenseNumber}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <Select
                  label="License/Certification State"
                  name="licenseState"
                  value={formState.licenseState}
                  onChange={handleSelectChange("licenseState")}
                  options={[
                    { value: "", label: "Select State" },
                    { value: "AL", label: "Alabama" },
                    { value: "AK", label: "Alaska" },
                    { value: "AZ", label: "Arizona" },
                    { value: "OR", label: "Oregon" },
                    { value: "WA", label: "Washington" },
                    // Add all states as needed
                  ]}
                  required
                  fullWidth
                />
              </div>

              <Select
                label="Years of Experience"
                name="experience"
                value={formState.experience}
                onChange={handleSelectChange("experience")}
                options={[
                  { value: "", label: "Select Experience" },
                  { value: "less-than-1", label: "Less than 1 year" },
                  { value: "1-2", label: "1-2 years" },
                  { value: "3-5", label: "3-5 years" },
                  { value: "6-10", label: "6-10 years" },
                  { value: "10+", label: "More than 10 years" },
                ]}
                required
                fullWidth
              />

              <Input
                type="date"
                label="Earliest Start Date"
                name="startDate"
                value={formState.startDate}
                onChange={handleChange}
                required
                fullWidth
              />

              <Textarea
                label="Additional Certifications/Specialties"
                name="certifications"
                value={formState.certifications}
                onChange={handleChange}
                placeholder="List any additional certifications, specialties, or skills relevant to this position."
                fullWidth
              />

              <div className="flex justify-between mt-8">
                <Button type="button" onClick={prevStep} variant="outline">
                  Previous Step
                </Button>
                <Button type="button" onClick={nextStep} variant="primary">
                  Next Step
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Documents & Final Step */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6">
                Documents & Submission
              </h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-dark mb-2">
                  Resume/CV (Required)
                </label>
                <div className="flex items-center">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileUpload("resume")}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    required={!formState.resumeUploaded}
                  />
                  <label
                    htmlFor="resume"
                    className={`cursor-pointer px-4 py-2 border rounded-l-md ${
                      formState.resumeUploaded
                        ? "border-success text-success"
                        : "border-gray-medium text-gray"
                    }`}
                  >
                    {formState.resumeUploaded ? "File Selected" : "Choose File"}
                  </label>
                  <span className="px-4 py-2 border-t border-r border-b rounded-r-md border-gray-medium text-gray bg-gray-light">
                    {formState.resumeUploaded
                      ? "✓ Uploaded"
                      : "No file chosen (.pdf, .doc, .docx)"}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-dark mb-2">
                  Cover Letter (Optional)
                </label>
                <div className="flex items-center">
                  <input
                    type="file"
                    id="coverLetter"
                    name="coverLetter"
                    onChange={handleFileUpload("coverLetter")}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="coverLetter"
                    className={`cursor-pointer px-4 py-2 border rounded-l-md ${
                      formState.coverLetterUploaded
                        ? "border-success text-success"
                        : "border-gray-medium text-gray"
                    }`}
                  >
                    {formState.coverLetterUploaded
                      ? "File Selected"
                      : "Choose File"}
                  </label>
                  <span className="px-4 py-2 border-t border-r border-b rounded-r-md border-gray-medium text-gray bg-gray-light">
                    {formState.coverLetterUploaded
                      ? "✓ Uploaded"
                      : "No file chosen (.pdf, .doc, .docx)"}
                  </span>
                </div>
              </div>

              <Select
                label="How did you hear about us?"
                name="referenceSource"
                value={formState.referenceSource}
                onChange={handleSelectChange("referenceSource")}
                options={[
                  { value: "", label: "Select Option" },
                  { value: "job-board", label: "Job Board" },
                  { value: "website", label: "Company Website" },
                  { value: "social-media", label: "Social Media" },
                  { value: "referral", label: "Employee Referral" },
                  { value: "search", label: "Search Engine" },
                  { value: "other", label: "Other" },
                ]}
                fullWidth
              />

              <div className="mt-6">
                <Checkbox
                  id="agreesToTerms"
                  name="agreesToTerms"
                  label="I certify that all information provided is true and complete to the best of my knowledge. I understand that false information or significant omissions may disqualify me from further consideration for employment and may be justification for dismissal if discovered at a later date."
                  checked={formState.agreesToTerms}
                  onChange={handleCheckboxChange("agreesToTerms")}
                  required
                />
              </div>

              <div className="flex justify-between mt-8">
                <Button type="button" onClick={prevStep} variant="outline">
                  Previous Step
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isSubmitting}
                  disabled={
                    !formState.agreesToTerms || !formState.resumeUploaded
                  }
                >
                  Submit Application
                </Button>
              </div>
            </motion.div>
          )}
        </form>
      </Card>
    </div>
  );
};

export default ApplicationForm;
