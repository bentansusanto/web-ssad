import { MediaQuery } from "../../../config";
import AboutSection from "./components/AboutSection";

import HeroSection from "./components/HeroSection";

const Homepage = () => {
  // For mobile device
  const isMobile = MediaQuery("(max-width: 600px)");
  return (
    <div className="overflow-x-hidden">
      <HeroSection isMobile={isMobile} />
      <AboutSection isMobile={isMobile}/>
    </div>
  );
};

export default Homepage;

