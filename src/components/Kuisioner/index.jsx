import { MediaQuery } from "@/config";
import Image from "next/image";
import { useState } from "react";
import BgTest from '../../../public/assets/bg-test1.svg';
import { kuisioners } from "@/data/data";
import styles from '../../styles/Home.module.css';
import { useRouter } from "next/router";
import Link from "next/link";

const Kuisioner = () => {
    const isMobile = MediaQuery("(max-width: 600px)")
    const [selectQuisioner,setSelectQuisioner] = useState('')
    const [selectData, setSelectData] = useState(false)
    const router = useRouter()
    
    const handleSelect = (id) => {
      setSelectQuisioner(id)
      setSelectData(true)
    }

    const redirectQuestion = () => {
      if(selectQuisioner){
        router.push(`/question?kuisioner=${selectQuisioner}`)
      }
    }

  return (
    <>
      <div className={` ${styles.bgKuisioner} ${isMobile? "w-screen h-auto px-5 mb-5 bg-top py-5" : "w-[75vw] h-[70vh] mx-auto mb-20 mt-28 px-12 bg-left"}  shadow-lg `}>
          <div className="pt-10">
            <Image src={BgTest} alt="bg-test" className={`${isMobile? "w-24" : "w-auto"}`}/>
          </div>
          <div className={`${isMobile? "mt-5 space-y-5" : "flex items-start space-x-10 mr-44 mt-10"} `}>
            <div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">Explore tests for sleep disorders, stress, anxiety, and depression.</h4>
                <p className="text-gray-400 text-sm">By choosing and taking relevant tests, you can gain a better understanding of your condition and take steps towards improvement and better mental well-being.</p>
              </div>
                <div className="flex space-x-4 mt-5">
                  <button className="border-2 border-[#9AD1B8] rounded-md text-[#81BEA2] hover:bg-[#9AD1B8] transition-colors  ease-linear duration-300 hover:text-white py-2.5 px-5">
                    <Link href={'/'}>Homepage</Link>
                  </button>
                  <button onClick={redirectQuestion} disabled={!selectQuisioner} className={`${selectData ? "bg-[#9AD1B8] text-white cursor-pointer" : "bg-gray-300 cursor-default text-gray-400"}  py-2.5 rounded-md px-5 `}>Next</button>
                </div>
            </div>
            {/* Option */}
            <div className="space-y-4">
              {
                kuisioners.map(kuis => (
                  <div key={kuis.id} onClick={() => handleSelect(kuis.id)}  className={` ${isMobile ? "w-auto" : "w-72"} ${selectData&&selectQuisioner == kuis.id? "bg-[#9AD1B8]" : "bg-gray-100"} py-3.5 px-5 w-72 flex items-center space-x-5 rounded-md transition-colors ease-out duration-500`}>
                    <div  className={`${selectData&&selectQuisioner == kuis.id&&"border-none"} bg-white w-5 h-5 rounded-full border border-gray-400 p-[4px]`}>
                      {
                        selectData&&selectQuisioner == kuis.id && (<div className="bg-[#9AD1B8] w-3 h-3 rounded-full transition-colors ease-out duration-500"/>)
                      }
                    </div>
                    <p>{kuis.name_test}</p>
                  </div>
                ))
              }
            </div>
          </div>
      </div>
    </>
  );
};

export default Kuisioner;



