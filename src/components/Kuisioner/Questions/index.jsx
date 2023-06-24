import { MediaQuery } from "@/config";
import { kuisioners } from "@/data/data";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import BgTest from "../../../../public/assets/bg-test1.svg";
import styles from "../../../styles/Home.module.css";
import CompleteQuestion from "./components/CompleteQuestion";
import GeneralQuestion from "./components/GeneralQuestion";

const Questions = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  const router = useRouter();
  const { kuisioner } = router.query;
  const [currentQuestionTest, setCurrentQuestionTest] = useState(0);
  const [selectQuestion, setSelectQuestion] = useState(false);
  const [answerGeneral, setAnswerGeneral] = useState([]);
  const [answerComplete, setAnswerComplete] = useState([]);
  const [currentCompleteTest, setCurrentCompleteTest] = useState(0) 

  const detailKuisioner = kuisioners.find((kuis) => kuis.id == kuisioner);

  if(!detailKuisioner){
    return null
  }

  const currentQuestion = detailKuisioner.general_test[currentQuestionTest]
  const lastQuestion = currentQuestionTest === detailKuisioner.general_test.length - 1
  const currentQuestionComplete = detailKuisioner.complete_test[currentCompleteTest]
  const lastQuestionComplete = currentCompleteTest === detailKuisioner.complete_test.length - 1

  // Handle General answer
  const handleGeneralTestAnswer = (answer) => {
    setAnswerGeneral(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionTest] = answer;
      return updatedAnswers;
    });
    setSelectQuestion(true)
  };

  const isNextDisabled = !answerGeneral[currentQuestionTest]
  const isNextCompleteDisabled = !answerComplete[currentCompleteTest]
 
  // Handle NextButton General Question
  const handleNextButton = () => {
      if (lastQuestion) {
        const isAnyNo = answerGeneral.includes('no');
        const areBothNo = answerGeneral.every(answer => answer === 'no');
        const hasil = "normal"
        if (areBothNo) {
            router.push(`/results?kuisName=${detailKuisioner.name_test}&&hasil=${hasil}`)
        } else if(isAnyNo) {
          setCurrentQuestionTest(detailKuisioner.general_test.length);
        }
      }
    // }
    setCurrentQuestionTest(currentQuestionTest + 1);
    setSelectQuestion(false)
  };
  
  // Handle Previous General Question
  const handlePreviousQuestion = () => {
    if (currentQuestionTest > 0) {
      setCurrentQuestionTest(currentQuestionTest - 1);
      setSelectQuestion(true)
    }
  };

  // Handle Previous General Question
  const handlePreviousCompleteQuestion = () => {
    if (currentCompleteTest > 0) {
      setCurrentCompleteTest(currentCompleteTest - 1);
      setSelectQuestion(true)
    }
  };

const handleCompleteTestAnswer = (answer) => {
  setAnswerComplete(prevAnswers => {
    const updatedAnswers = [...prevAnswers];
    updatedAnswers[currentCompleteTest] = answer;
    return updatedAnswers;
  });
  setSelectQuestion(true)
};

// Handle Calculate Weight of Answer
const calculateResults = () => {
    let totalWeight = 0;
    if(detailKuisioner.name_test === "Sleeping Disorders Assesment" || detailKuisioner.name_test === "Anxiety Assesment" || detailKuisioner.name_test === "Depression Assesment"){
      let sumWeight = 0;
      // let countQuestions = 0;
      for (let i = 0; i < answerComplete.length; i++) {
        const answer = answerComplete[i];
        const options = detailKuisioner.complete_test[i].complete_option;
        const selectedOption = options.find(option => option.answer === answer);
        if (selectedOption) {
          sumWeight += selectedOption.weight;
        }
      }
      totalWeight = sumWeight / 3;
    }else if(detailKuisioner.name_test === "Stress Assesment"){
      for (let i = 0; i < answerComplete.length; i++) {
        const answer = answerComplete[i];
        const options = detailKuisioner.complete_test[i].complete_option;
        const selectedOption = options.find(option => option.answer === answer);
        if (selectedOption) {
          totalWeight += selectedOption.weight;  
        }
      }
    }
    return Math.round(totalWeight);
}

   // Handle NextButton Complete Question
  const handleNextCompleteButton = () => {
    if(lastQuestionComplete){
      const result = calculateResults()
      router.push(`/results?kuisName=${detailKuisioner.name_test}&&result=${result}`)
    }else{
      setCurrentCompleteTest((prevIdx) => prevIdx + 1)
      setSelectQuestion(false)
    }
  }

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
            (<GeneralQuestion isMobile={isMobile} currentQuestion={currentQuestion} handlePreviousQuestion={handlePreviousQuestion} currentQuestionTest={currentQuestionTest} handleNextButton={handleNextButton} isNextDisabled={isNextDisabled} selectQuestion={selectQuestion} answerGeneral={answerGeneral} handleGeneralTestAnswer={handleGeneralTestAnswer}/>) : 
            // if complete test  
            (<CompleteQuestion isMobile={isMobile} handlePreviousCompleteQuestion={handlePreviousCompleteQuestion} handleNextCompleteButton={handleNextCompleteButton} isNextCompleteDisabled={isNextCompleteDisabled} currentQuestionComplete={currentQuestionComplete} selectQuestion={selectQuestion} answerComplete={answerComplete} currentCompleteTest={currentCompleteTest} handleCompleteTestAnswer={handleCompleteTestAnswer}/>)
          }
        </div>
      </div>
    </>
  );
};

export default Questions;
