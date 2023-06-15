import { listQuotes } from "@/data/listDataHome";
import Image from "next/image";
import { useState } from "react";
import BgQuotesMobile from "../../../../public/assets/bg-quotes-mobile.svg";
import BgQuotes from "../../../../public/assets/bg-quotes.svg";

const QuotesSection = ({ isMobile }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectIndex = (idx) => {
    console.log(idx)
    setActiveIndex(idx);
  };

  const dotList = listQuotes.map((list, idx) => (
    (
      <div key={list} onClick={() => handleSelectIndex(idx)}>
          <button
            className={`${
              activeIndex === idx ? " active bg-blue-500" : "bg-gray-300"
            } w-3 h-3 mx-1 rounded-full`}
              />
      </div>
    )
  ))

  return (
    <div className={`${isMobile? "mt-32 mb-20" : "mt-40 mb-20"}`}>
      <div className="relative">
        {isMobile ? (
          <Image
            src={BgQuotesMobile}
            alt="bg-quotes-mobile"
            className="shadow-lg mx-auto"
          />
        ) : (
          <Image src={BgQuotes} alt="bg-quotes" className="shadow-lg mx-auto" />
        )}

        <div
          className={`${
            isMobile ? " px-5 top-44 w-auto" : "left-[27rem] top-20 w-[40%]"
          } absolute text-center items-center inset-0 `}
        >
          {listQuotes.map((value, idx) => (
              <p key={idx}
              className={`${
                activeIndex !== idx&& "hidden"
              } text-[18px] transition-all ease-in duration-500`}>{value.quotes}</p>
            
          ))}
        </div>
        <div
          className={`${
            isMobile ? " px-5 bottom-5 left-24" : "left-[27rem] bottom-6 w-[40%]"
          } absolute flex justify-center text-center items-center `}
        >
          {dotList}
        </div>
      </div>
    </div>
  );
};

export default QuotesSection;
