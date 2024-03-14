import AboutCard from "../components/AboutCard";
import Contact from "../components/Contact";
import HomeCard from "../components/HomeCard";
import PortfolioCard from "../components/PortfolioCard";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";

const Home = () => {
  return (
    <div className=" w-[80vw] border-2 border-hidden border-gray-900 mx-auto">
      <PortfolioCard />
      <HomeCard/>
      <AboutCard/>
      <SkillsSection/>
      <ProjectSection/>
      <Contact/>
    </div>
  );
};

export default Home;
