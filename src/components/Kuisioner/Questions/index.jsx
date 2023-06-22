import { MediaQuery } from "@/config";
import { kuisioners } from "@/data/data";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import BgTest from "../../../../public/assets/bg-test1.svg";
import styles from "../../../styles/Home.module.css";

const Questions = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  const router = useRouter();
  const { kuisioner } = router.query;
  const [currentQuestionTest, setCurrentQuestionTest] = useState(0);
  const [selectQuestion, setSelectQuestion] = useState(false);
  const [answerGeneral, setAnswerGeneral] = useState([]);

  const detailKuisioner = kuisioners.find((kuis) => kuis.id == kuisioner);
  const currentQuestion = detailKuisioner.general_test[currentQuestionTest]
  const lastQuestion = currentQuestionTest === detailKuisioner.general_test.length - 1
  const currentQuestionComplete = detailKuisioner.complete_test[currentQuestionTest]

  const handleGeneralTestAnswer = (answer) => {
    setAnswerGeneral(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionTest] = answer;
      return updatedAnswers;
    });
    setSelectQuestion(true)
  };

  const isNextDisabled = !answerGeneral[currentQuestionTest]
 

  const handleNextButton = () => {
      if (lastQuestion) {
        const isAnyNo = answerGeneral.includes('no');
        const areBothNo = answerGeneral.every(answer => answer === 'no');
  
        if (areBothNo) {
            router.push('/results')
        } else if(isAnyNo) {
          setCurrentQuestionTest(detailKuisioner.general_test.length);
        }
      }
    // }
    setCurrentQuestionTest(currentQuestionTest + 1);
    setSelectQuestion(false)
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionTest > 0) {
      setCurrentQuestionTest(currentQuestionTest - 1);
      setSelectQuestion(true)
    }
  };

  return (
    <>
      <div
        className={`${styles.bgQuestion} ${
          isMobile
            ? "w-full h-auto px-5 mb-5 bg-top py-5"
            : "w-[75vw] h-[70vh] mx-auto mb-20 mt-28 px-12 bg-left"
        } shadow-lg`}
      >
        <div className={`${isMobile ? "pt-10 pb-20" : "pt-10"}`}>
          <Image
            src={BgTest}
            alt="bg-test"
            className={`${isMobile ? "w-24" : "w-auto"}`}
          />
          {
            currentQuestionTest < detailKuisioner.general_test.length ? 
            // If general test
            (<div className={`${isMobile ? "space-y-5" : "flex space-x-4 mr-52"} mt-5`}>
              <div className="space-y-5">
                <h2 className={`text-2xl font-semibold`}>{currentQuestion.general_question}</h2>
                <div className="flex space-x-4 mt-5">
                <button onClick={handlePreviousQuestion} className={` ${ currentQuestionTest === 0? " hidden " : "bg-[#9AD1B8] text-white cursor-pointer"}  py-2.5 rounded-md px-5 transition-colors ease-out duration-500 `}>Back</button>
                <button onClick={handleNextButton} disabled={isNextDisabled} className={` ${selectQuestion&&answerGeneral[currentQuestionTest]? "bg-[#9AD1B8] text-white cursor-pointer" : "bg-gray-300 cursor-default text-gray-400"} text-gray-400  py-2.5 rounded-md px-5 transition-colors ease-out duration-500 `}>Next</button>
                </div>
              </div>
              <div className="space-y-3">
                {
                  currentQuestion.answer.map((val, idx) => (
                    <div key={idx} onClick={() => handleGeneralTestAnswer(val)} className={`${isMobile? "w-auto" :  "w-72"} ${selectQuestion&&answerGeneral[currentQuestionTest] === val ? "bg-[#9AD1B8]" : "bg-gray-100" }  py-3.5 px-5 w-72 flex items-center space-x-5 rounded-md transition-colors ease-out duration-500`}>
                        <div className={`${selectQuestion&&answerGeneral[currentQuestionTest] === val&&"border-none"} bg-white w-5 h-5 rounded-full border border-gray-400 p-[4px]`}>        
                         {
                            selectQuestion&&answerGeneral[currentQuestionTest] === val && (<div className="bg-[#9AD1B8] w-3 h-3 rounded-full transition-colors ease-out duration-500"/>)
                         }
                    </div>
                      <p>{val}</p>
                    </div>
                  ))
                }
              </div>
            </div>) : 
            // if complete   
            (<div className="felx space-x-4">
              <div className="space-y-3">
                <h2>{currentQuestionComplete.complete_question}</h2>       
              </div>
            </div>)
          }
        </div>
      </div>
    </>
  );
};

export default Questions;
