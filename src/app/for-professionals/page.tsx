import { Metadata } from "next";
import { PageHeader } from "@/component/layout/PageHeader";
import ProfessionalsPage from "@/component/professionals/professionals-page";

export const metadata: Metadata = {
  title: "For Healthcare Professionals | Purity Medical Staffing",
  description:
    "Advance your healthcare career with flexible opportunities, competitive compensation, and comprehensive support from Purity Medical Staffing.",
};

export default function ForProfessionals() {
  return (
    <>
      <ProfessionalsPage />
    </>
  );
}
