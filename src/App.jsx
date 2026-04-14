import BioCard from "./components/BioCard";
import FeaturedProject from "./components/FeaturedProject";
import ConnectCard from "./components/ConnectCard";
import ProjectArchive from "./components/ProjectArchive";
import Footer from "./components/Footer";
import FunFacts from "./components/FunFacts";
import ExperienceCard from "./components/ExperienceCard";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f4f5] text-zinc-900 p-4 md:p-8 font-sans selection:bg-orange-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
        <BioCard />
        <FeaturedProject />
        <FunFacts />
        <ConnectCard />
        <ProjectArchive />
        <ExperienceCard />
      </div>
      <Footer />
    </div>
  );
}