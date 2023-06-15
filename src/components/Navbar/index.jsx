import { MediaQuery } from "../../config";

const Navbar = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  return (
    <div>
      <div
        className={`${
          isMobile ? "px-5" : "px-20"
        } flex items-center justify-between py-4`}
      >
        <h1 className="text-[18px] font-bold text-[#85CDAC]">SSAD</h1>
        <div>
          <button className="bg-[#7ACEBC] px-5 py-2.5 rounded-md text-white">
            Take test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
