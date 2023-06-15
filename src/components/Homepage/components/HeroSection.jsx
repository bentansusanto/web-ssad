import Image from "next/image";
import BgHero from "../../../../public/assets/bg-hero.svg";

const HeroSection = ({ isMobile }) => {
  return (
    <>
      <div
        className={`${
          isMobile ? "block" : "flex px-20 space-x-20"
        } flex-row-reverse mt-20`}
      >
        <Image src={BgHero} alt="bg-hero" className="md:w-auto" />
        <div className={`${isMobile ? "px-5 mt-5" : "mt-20"}`}>
          <h1
            className={`${isMobile ? "text-[2rem]" : "text-[3rem]"} pb-5 font-bold`}
          >
            Restful Sleep. Inner Peace. Happy Life.
          </h1>
          <p className={` ${isMobile ? "w-auto" : "w-[80%]"}`}>
            Take our Questionnaire Test now to determine the severity level of
            your condition.
          </p>
          <button className="bg-[#7ACEBC] px-5 py-2.5 rounded-md mt-8 text-white">
            Take test
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
