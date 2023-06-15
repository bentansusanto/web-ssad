import Image from "next/image";
import { useState } from "react";
import Checklist from '../../../../public/assets/Checklist.svg'
import { listTips } from "../../../data/listTips";
import BgTips from "../../../../public/assets/bg-tips.svg";

const TipsSection = ({ isMobile }) => {
  const [loading, setLoading] = useState(false);
  const data = listTips;
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowMore = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setCurrentPage(prevPage => prevPage + 1);
      }, 500)
    
  };

  // Looping listTips For Desktop
  const listTipsDesktop = listTips.map((val, idx) => (
    <div key={idx} className="flex items-start space-x-2">
      <Image src={Checklist} alt="checklist" className="w-4 mt-1"/>
      <div>
        <p className="font-semibold">{val.title}</p>
        <p className="">{val.content}</p>
      </div>
    </div>
  ));

  const renderListTips = data.slice(0, currentPage*2)

  // Looping listTips For Mobile
  const listTipsMobile = renderListTips.map((val, idx) => (
      <div key={idx} className="flex items-start space-x-2">
        <Image src={Checklist} alt="checklist" className="w-4 mt-0.5"/>
        <div>
          <p className="font-semibold text-md">{val.title}</p>
          <p className="">{val.content}</p>
        </div>
      </div>
    ));

  return (
    <>
      <div
        className={`${
          isMobile
            ? "block flex-row-reverse mx-5 mt-28"
            : "flex mt-52 space-x-44 mx-32"
        }`}
      >
        <Image src={BgTips} alt="bg-tips" />
        <div className={`${isMobile && "mt-10"}`}>
          <h1
            className={`${
              isMobile ? "text-[1.3rem]" : "text-[2rem] w-[90%]"
            } pb-5 font-bold`}
          >
            Percentage of individuals with sleeping disorders, stress, anxiety,
            and depression.
          </h1>
          <div className="space-y-4">
            { isMobile? listTipsMobile : listTipsDesktop}
            {loading&&(<p>Loading...</p>)}
          </div>
          <div className="text-center">
            { !loading && isMobile && renderListTips.length < data.length && (
              <button
                onClick={handleShowMore}
                className="bg-[#7ACEBC] px-5 py-2.5 rounded-md text-white mt-6"
              >
                Show more
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TipsSection;
