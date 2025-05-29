import BenefitsSection from "./benefits-section";
import SolutionsSection from "./solutions-section";
import QualitySection from "./quality-section";
import PartnerTypesSection from "./partner-types-section";
import ProcessSection from "./process-section";
import ContactSection from "./contact-section";
import FacilityHero from "./FacilityHero";

const FacilitiesPage = () => {
  return (
    <>
      <FacilityHero />
      <BenefitsSection />
      <SolutionsSection />
      <QualitySection />
      <PartnerTypesSection />
      <ProcessSection />
      {/* <ContactSection /> */}
    </>
  );
};

export default FacilitiesPage;
