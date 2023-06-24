import React, { useState } from 'react'
import Image from 'next/image'
import { MediaQuery } from '@/config'
import styles from '../../../styles/Home.module.css'
import BgResult from '../../../../public/assets/bg-results.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Result = () => {
  const isMobile = MediaQuery("(max-width: 600px)")
  const router = useRouter()
  const {result, hasil, kuisName} = router.query
  const generalResult = hasil;

  const resultNow = () => {
    let resultData;
    if(kuisName === 'Sleeping Disorders Assesment'){
      resultData = result <= 7 ? "Tidak ada insomnia yang signifikan secara klinis" : result <= 14? "Insomnia di bawah ambang batas" : "Insomnia klinis (tingkat keparahan sedang)"
    }else if (kuisName === 'Stress Assesment') {
      resultData = result <= 13 ? "Stress Ringan" : result <= 26? "Stress Sedang" : "Stress Berat"
    }else if (kuisName === 'Anxiety Assesment') {
      resultData = result <= 10 ? "Kecemasan Ringan" : result <= 15? "Kecemasan Sedang" : "Kecemasan Berat" 
    }else if (kuisName === 'Depression Assesment') {
      resultData = result <= 9 ? "Depresi Ringan" : result <= 14? "Depresi Sedang" : "Depresi Berat"
    }
    return resultData
  }
  
  return (
    <div className={`${styles.bgKuisioner} ${isMobile? "w-screen h-auto px-5 mb-5 bg-top py-12" : "w-[75vw] h-[70vh] mx-auto mb-20 mt-28 bg-left py-24"} shadow-lg`}>
      <div className={`${isMobile? "block space-y-12" : "flex items-start mx-44 space-x-16"}`}>
        <Image src={BgResult} alt='bg-result' className={`${isMobile ? "w-52 mx-auto" : "w-auto"} `}/>
        <div className={`${isMobile ? "mt-0 space-y-2" : "mt-10 space-y-3"}`}>
          <h2 className='font-medium text-lg'>Berdasarkan test <span className='lowercase'>{kuisName}</span> maka hasilnya sebagai berikut</h2>
          {/* Results */}
          {
            generalResult ? 
            // Result General Question
            (<p className='text-2xl font-bold'>{hasil}</p>) : 
            // Result Complete Question
            (<div className='space-y-2'>
              <p className='text-2xl font-bold'>{result}</p>
              <p>berdasarkan hasil diatas artinya</p>
              <p className='text-lg font-bold'>{resultNow()}</p>
            </div>)
          }
          <p>Terima kasih sudah berpartisipasi untuk mencoba mengisi test <span className='lowercase'>{kuisName}</span> dari kami</p>
          <div className='pt-3'>
            <button className='bg-[#7ACEBC] text-white py-2.5 px-6 rounded-md'>
              <Link href={'/'}>Homepage</Link>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Result