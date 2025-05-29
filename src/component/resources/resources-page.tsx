import ArticlesSection from "./articles-section";
import FaqSection from "./faq-section";
import GuidesSection from "./guides-section";
import HeroResources from "./ResourcesHero";

const ResourcesPage = () => {
  return (
    <>
      <HeroResources />
      <ArticlesSection />
      <FaqSection />
      {/* <GuidesSection /> */}
    </>
  );
};

export default ResourcesPage;
