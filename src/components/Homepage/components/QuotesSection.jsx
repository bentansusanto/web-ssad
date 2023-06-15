import React from 'react'
import Image from 'next/image'
import BgQuotes from '../../../../public/assets/bg-quotes.svg';
import BgQuotesMobile from '../../../../public/assets/bg-quotes-mobile.svg';

const QuotesSection = ({isMobile}) => {
  return (
    <div className='mt-40 mb-20'>
      <div className='relative'>
        {
          isMobile? (<Image src={BgQuotesMobile} alt='bg-quotes-mobile' className='shadow-lg mx-auto '/>) : (<Image src={BgQuotes} alt='bg-quotes' className='shadow-lg mx-auto'/>)
        }
          
          <div className={`${isMobile ? " px-5 top-44 w-auto" : "left-[26rem] top-20 w-[40%]"} absolute inset-1 text-center items-center `}>
            <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque numquam rerum fugiat sit et possimus nemo ipsa unde excepturi.</p>
          </div>
      </div>
    </div>
  )
}

export default QuotesSection