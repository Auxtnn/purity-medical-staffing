import BenefitsSection from "./benefits-section";
import OpportunitiesSection from "./opportunities-section";
import SupportSection from "./support-section";

import ApplicationSection from "./application-section";
import ProfessionalHero from "./ProfessionalHero";

const ProfessionalsPage = () => {
  return (
    <>
      <ProfessionalHero />
      <BenefitsSection />
      <OpportunitiesSection />
      <SupportSection />
      {/* <TestimonialsSection /> */}
      <ApplicationSection />
    </>
  );
};

export default ProfessionalsPage;
