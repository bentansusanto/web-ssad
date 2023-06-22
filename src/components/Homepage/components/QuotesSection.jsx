import { listQuotes } from "@/data/listDataHome";
import { useState } from "react";
import styles from '../../../styles/Home.module.css'

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
            } w-2 h-2 mx-1 rounded-full`}
              />
      </div>
    )
  ))

  return (
    <div className={`${isMobile? "mt-32 mb-20" : "mt-40 mb-20"}`}>
      <div className={`${styles.bgQuotes} ${isMobile? "mx-auto px-3 pt-12 space-y-20 " : "mx-52"} relative bg-no-repeat w-auto h-96 shadow-lg `}>
        <div
          className={`${
            isMobile ? " px-5 mt-10" : ""
          }  text-center items-center`}
        >
          {listQuotes.map((value, idx) => (
              <p key={idx}
              className={`${
                activeIndex !== idx&& "hidden"
              } ${isMobile? "text-lg" : "w-[55%] py-32 text-xl"} text-[18px]transition-all ease-in duration-500 mx-auto`}>{value.quotes}</p>
          ))}
        </div>
        <div
          className={`${
            isMobile ? " bottom-10 mx-[40%]" : "bottom-10 mx-[47%]"
          }  flex absolute bottom-5`}
        >
          {dotList}
        </div>
      </div>
    </div>
  );
};

export default QuotesSection;
