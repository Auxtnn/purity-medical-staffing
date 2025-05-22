// app/about/page.tsx
import { Metadata } from "next";
import AboutPage from "@/component/about/about-page";
import AboutServices from "@/component/about/AboutHero";

export const metadata: Metadata = {
  title: "About Us | Purity Medical Staffing",
  description:
    "Learn about Purity Medical Staffing's mission, values, and commitment to connecting healthcare professionals with facilities that need them.",
};

export default function About() {
  return (
    <>
      <AboutPage />
    </>
  );
}
