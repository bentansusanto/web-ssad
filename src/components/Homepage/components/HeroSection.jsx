import Image from "next/image";
import BgHero from "../../../../public/assets/bg-hero.svg";

const HeroSection = ({ isMobile }) => {
  return (
    <>
      <div
        className={`${
          isMobile ? "block" : "flex"
        } flex-row-reverse justify-between mt-20`}
      >
        <Image src={BgHero} alt="bg-hero" className="md:w-auto" />
        <div className={`${isMobile ? "px-5 mt-5" : "pl-20"}`}>
          <h1
            className={`${isMobile ? "text-[2rem]" : "text-[3rem]"} pb-5 font-bold`}
          >
            Restful Sleep. Inner Peace. Happy Life.
          </h1>
          <p className={` ${isMobile ? "w-auto" : "w-[80%]"}`}>
            Take our Questionnaire Test now to determine the severity level of
            your condition.
          </p>
          <button className="bg-[#798B68] px-5 py-2.5 rounded-sm text-white mt-6">
            Take test
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
