import { Metadata } from "next";
import { PageHeader } from "@/component/layout/PageHeader";
import ResourcesPage from "@/component/resources/resources-page";

export const metadata: Metadata = {
  title: "Resources | Purity Medical Staffing",
  description:
    "Access helpful resources, articles, and frequently asked questions about healthcare staffing and career development.",
};

export default function Resources() {
  return (
    <>
      <ResourcesPage />
    </>
  );
}
