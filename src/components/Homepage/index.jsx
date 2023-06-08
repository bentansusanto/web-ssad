import { MediaQuery } from "../../../config";
import AboutSection from "./components/AboutSection";

import HeroSection from "./components/HeroSection";
import PersentaseSection from "./components/PersentaseSection";
import TipsSection from "./components/TipsSection";

const Homepage = () => {
  // For mobile device
  const isMobile = MediaQuery("(max-width: 600px)");
  return (
    <div className="overflow-x-hidden">
      <HeroSection isMobile={isMobile} />
      <AboutSection isMobile={isMobile}/>
      <PersentaseSection isMobile={isMobile}/>
      <TipsSection isMobile={isMobile}/>
    </div>
  );
};

export default Homepage;

