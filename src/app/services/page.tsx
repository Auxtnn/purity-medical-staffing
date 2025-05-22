// app/services/page.tsx
import { Metadata } from "next";
import { PageHeader } from "@/component/layout/PageHeader";
import HeroServices from "@/component/services/servicesHero";
import ServicesPage from "@/component/services/services-page";

export const metadata: Metadata = {
  title: "Our Services | Purity Medical Staffing",
  description:
    "Explore Purity Medical Staffing's comprehensive healthcare staffing solutions for facilities of all types and sizes.",
};

export default function Services() {
  return (
    <>
      <HeroServices />
      <ServicesPage />
    </>
  );
}
