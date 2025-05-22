import { Metadata } from "next";
import { PageHeader } from "@/component/layout/PageHeader";
import FacilitiesPage from "@/component/facilities/facilities-page";

export const metadata: Metadata = {
  title: "For Healthcare Facilities | Purity Medical Staffing",
  description:
    "Discover how Purity Medical Staffing can provide your healthcare facility with qualified professionals when you need them most.",
};

export default function ForFacilities() {
  return (
    <>
      <FacilitiesPage />
    </>
  );
}
