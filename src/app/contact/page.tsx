// app/contact/page.tsx
import { Metadata } from "next";
import { PageHeader } from "@/component/layout/PageHeader";
import ContactPage from "@/component/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact Us | Purity Medical Staffing",
  description:
    "Get in touch with Purity Medical Staffing. We're available 24/7 to answer your questions and discuss your staffing needs or career opportunities.",
};

export default function Contact() {
  return (
    <>
      
      <ContactPage />
    </>
  );
}
