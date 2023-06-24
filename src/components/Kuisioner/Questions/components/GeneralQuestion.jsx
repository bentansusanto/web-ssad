import React from 'react'

const GeneralQuestion = ({isMobile, currentQuestion, handlePreviousQuestion, currentQuestionTest, handleNextButton, isNextDisabled, selectQuestion, answerGeneral, handleGeneralTestAnswer}) => {
  return (
    <div className={`${isMobile ? "space-y-5" : "flex space-x-4 mr-52"} mt-5`}>
              <div className="space-y-5">
                <h2 className={`text-2xl font-semibold`}>{currentQuestion.general_question}</h2>
                <div className="flex space-x-4 mt-5">
                <button onClick={handlePreviousQuestion} className={` ${ currentQuestionTest === 0? "hidden" : "bg-[#7ACEBC] text-white cursor-pointer"}  py-2.5 rounded-md px-5 transition-colors ease-out duration-500`}>Back</button>
                <button onClick={handleNextButton} disabled={isNextDisabled} className={` ${selectQuestion&&answerGeneral[currentQuestionTest]? "bg-[#7ACEBC] text-white cursor-pointer" : "bg-gray-300 cursor-default text-gray-400"} text-gray-400  py-2.5 rounded-md px-5 transition-colors ease-out duration-500 `}>Next</button>
                </div>
              </div>
              <div className="space-y-3">
                {
                  currentQuestion.answer.map((val, idx) => (
                    <div key={idx} onClick={() => handleGeneralTestAnswer(val)} className={`${isMobile? "w-auto" :  "w-72"} ${selectQuestion&&answerGeneral[currentQuestionTest] === val ? "bg-[#7ACEBC]" : "bg-gray-100" }  py-3.5 px-5 w-72 flex items-center space-x-5 rounded-md transition-colors ease-out duration-500`}>
                        <div className={`${selectQuestion&&answerGeneral[currentQuestionTest] === val&&"border-none"} bg-white w-5 h-5 rounded-full border border-gray-400 p-[4px]`}>        
                         {
                            selectQuestion&&answerGeneral[currentQuestionTest] === val && (<div className="bg-[#7ACEBC] w-3 h-3 rounded-full transition-colors ease-out duration-500"/>)
                         }
                    </div>
                      <p className={` ${selectQuestion&&answerGeneral[currentQuestionTest] === val&&"text-white"}`}>{val}</p>
                    </div>
                  ))
                }
              </div>
            </div>
  )
}

export default GeneralQuestion