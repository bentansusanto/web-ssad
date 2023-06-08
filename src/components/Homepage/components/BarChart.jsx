import { useState } from "react";
import { MediaQuery } from "../../../../config";

export const BarChart = () => {
  const isMobile = MediaQuery("(max-width: 600px)")
  const data = [
    { label: "Sleeping", length: 150, value: 30 },
    { label: "Stress", length: 220, value: 60 },
    { label: "Anxiety", length: 80, value: 20 },
    { label: "Depression", length: 45, value: 15 },
  ];
  const [popup, setPopup] = useState(null)

  const handleHoverPopup = (value) => {
    setPopup(value)
  }

  const handleLeaveMouse = () => {
    setPopup(null)
  }
  
  return (
    <div className="w-auto bg-[#fcf0e4] p-5 rounded-md">
      <div className="mb-12 space-y-2">
        <p className="text-[#b18271]">Daily traffic</p>
        <div className="flex items-end space-x-2">
          <p className="text-4xl font-bold text-[#633321]">2.579</p>
          <p className="text-[#b18271]">Visitors</p>
        </div>
      </div>
      <div className={`${isMobile? "space-x-6" : "space-x-12"} flex items-end`}>
        {
          data.map((val, idx) => (
            <div key={idx}>
                <div className="space-y-2">
                  <div className="relative">
                  <div onMouseEnter={() => handleHoverPopup(val.length)} onMouseLeave={handleLeaveMouse} className={` ${isMobile? "w-10" : "w-14"} bg-[#C87B5D] mx-auto rounded-md`} style={{height: `${val.length}px`}}/>
                    <div>
                      {
                        popup === val.length && idx === 0 &&(<div className="absolute z-30 top-0 rounded-md left-6 -mt-8 bg-gray-800 text-white p-3 text-xs transition-all ease-in-out duration-300 w-auto">
                        <p className="text-[13px] text-center pb-3">{val.label}</p>
                        <div className="space-x-1 flex">
                          <p className="text-xs">persentase:</p>
                          <p className="text-xs">{val.value}%</p>
                        </div>
                      </div>)
                      }
                      {
                        popup === val.length && idx !== 0 &&(<div className="absolute z-30 top-0 right-7 rounded-md -mt-8 bg-gray-800 text-white py-1 px-2 text-xs transition-all ease-in-out duration-300">
                        <p className="text-[13px] text-center pb-3">{val.label}</p>
                        <div className="space-x-1 flex">
                          <p className="text-xs">persentase:</p>
                          <p className="text-xs">{val.value}%</p>
                        </div>
                      </div>)
                      }
                    </div>
                  </div>
                  <p className="mx-auto text-[14px] text-center">{val.label}</p>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
