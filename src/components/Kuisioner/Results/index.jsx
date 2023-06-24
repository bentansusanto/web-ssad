import React from 'react'
import Image from 'next/image'
import { MediaQuery } from '@/config'
import styles from '../../../styles/Home.module.css'
import BgResult from '../../../../public/assets/bg-results.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { kuisioners } from '@/data/data'

const Result = () => {
  const isMobile = MediaQuery("(max-width: 600px)")
  const router = useRouter()
  const {result, kuisId, } = router.query
  const detailKuisioner = kuisioners.find((kuis) => kuis.id === kuisId)
  const isGeneralTestResult = router.query.isGeneralTestResult === 'true';

  console.log(result)
  return (
    <div className={`${styles.bgKuisioner} ${isMobile? "w-screen h-auto px-5 mb-5 bg-top py-20" : "w-[75vw] h-[70vh] mx-auto mb-20 mt-28 bg-left py-24"} shadow-lg`}>
      <div className={`${isMobile? "block space-y-12" : "flex items-start mx-44 space-x-16"}`}>
        <Image src={BgResult} alt='bg-result' className={`${isMobile ? "w-52" : "w-auto"} `}/>
        <div className={`${isMobile ? "mt-0 space-y-2" : "mt-10 space-y-3"}`}>
          <h2 className='font-medium text-lg'>Berdasarkan test sleeping disorders maka hasilnya sebagai berikut</h2>
          {/* Results */}
          {
            isGeneralTestResult ? 
            // Result General Question
            (<p className='text-2xl font-bold'>Kamu Sehat</p>) : 
            // Result Complete Question
            (<p>{result}</p>)
          }
          <p className='text-2xl font-bold'>Kamu Sehat</p>
          <p className=''>Terima kasih sudah berpartisipasi untuk mencoba mengisi {detailKuisioner}!</p>
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