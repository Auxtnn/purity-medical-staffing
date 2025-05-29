import Hero from "@/component/home/hero";
import CoreValues from "@/component/home/core-values";
import FeaturedJobs from "@/component/home/featured-jobs";
import Testimonials from "@/component/home/testimonials";
import Partners from "@/component/home/partners";
import ContactForm from "@/component/home/contact-form";
import ServicesOverview from "@/component/home/services-overview";
import ProfessionalsOverview from "@/component/home/professionals-overview";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <CoreValues />
      <ProfessionalsOverview />
      <FeaturedJobs />
      {/* <Testimonials /> */}
      <Partners />
      <ContactForm />
    </>
  );
}
