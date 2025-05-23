import AboutMe from "./AboutMe";
import EducationSection from "./EducationSection";
import PortfolioPage from "./PortfolioPage";
import Projects from "./ProjectCard";
import Skills from "./Skills";

const Home = () => {

    return (
        <div className="min-h-full bg-amber-50">
            <PortfolioPage />
            <AboutMe />
            <Projects />
            <Skills />
            <EducationSection />
            
        </div>
    );
};

export default Home;

