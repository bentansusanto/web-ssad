import React from 'react'

const CompleteQuestion = ({isMobile, handlePreviousCompleteQuestion, handleNextCompleteButton, handleCompleteTestAnswer, isNextCompleteDisabled, currentQuestionComplete, selectQuestion, answerComplete, currentCompleteTest, }) => {
  return (
    <div className={`${isMobile ? "space-y-5" : "flex space-x-4 mr-52"} mt-5`}>
              <div className="space-y-5">
                <h2 className={`text-2xl font-semibold`}>{currentQuestionComplete.complete_question}</h2>
                <div className="flex space-x-4 mt-5">
                <button onClick={handlePreviousCompleteQuestion} className={` ${ currentCompleteTest === 0? " hidden " : "bg-[#7ACEBC] text-white cursor-pointer"}  py-2.5 rounded-md px-5 transition-colors ease-out duration-500 `}>Back</button>
                <button onClick={handleNextCompleteButton} disabled={isNextCompleteDisabled} className={` ${selectQuestion&&answerComplete[currentCompleteTest]? "bg-[#7ACEBC] text-white cursor-pointer" : "bg-gray-300 cursor-default text-gray-400"} text-gray-400  py-2.5 rounded-md px-5 transition-colors ease-out duration-500 `}>Next</button>
                </div>
              </div>
              <div className="space-y-3">
                {
                  currentQuestionComplete.complete_option.map((val, index) => (
                    <div key={index} onClick={() => handleCompleteTestAnswer(val.answer)} className={`${isMobile? "w-auto" :  "w-72"} ${selectQuestion&&answerComplete[currentCompleteTest] === val.answer ? "bg-[#7ACEBC]" : "bg-gray-100" }  py-3.5 px-5 w-72 flex items-center space-x-5 rounded-md transition-colors ease-out duration-500`}>
                        <div className={`${selectQuestion&&answerComplete[currentCompleteTest] === val.answer&&"border-none"} bg-white w-5 h-5 rounded-full border border-gray-400 p-[4px]`}>        
                         {
                            selectQuestion&&answerComplete[currentCompleteTest] === val.answer && (<div className="bg-[#7ACEBC] w-3 h-3 rounded-full transition-colors ease-out duration-500"/>)
                         }
                    </div>
                      <p className={` ${selectQuestion&&answerComplete[currentCompleteTest] === val.answer&&"text-white"}`}>{val.answer}</p>
                    </div>
                  ))
                }
              </div>
            </div>
  )
}

export default CompleteQuestion