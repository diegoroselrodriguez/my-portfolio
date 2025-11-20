 // src/App.tsx
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionDivider from "./components/SectionDivider";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import RiffAndCodeSection from "./components/RiffAndCodeSection";
import Footer from "./components/Footer";
import EducationSection from "./components/EducationSection";

function App() {
  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <Hero />
        <SectionDivider />

        <ExperienceSection />
        <SectionDivider />

        <ProjectsSection />
        <SectionDivider />

        <SkillsSection />
        <SectionDivider />

        <RiffAndCodeSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
