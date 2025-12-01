import Hero from "../components/home/Hero";
import MissionVision from "../components/home/MissionVision";
import FocusAreas from "../components/home/FocusAreas";
import ImpactStats from "../components/home/ImpactStats";
import FeaturedStories from "../components/home/FeaturedStories";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <MissionVision />
      <ImpactStats />
      <FocusAreas />
      <FeaturedStories />
     
      <CTASection />
    </div>
  );
}