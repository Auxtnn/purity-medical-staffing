import StorySection from "./story-section";
import MissionSection from "./mission-section";
import TeamSection from "./team-section";
import StatsSection from "./stats-section";
import AboutServices from "./AboutHero";

const AboutPage = () => {
  return (
    <>
      <AboutServices />
      <StorySection />
      <MissionSection />
      {/* <TeamSection /> */}
      <StatsSection />
    </>
  );
};

export default AboutPage;
