/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import BgAbout from '../../../../public/assets/bg-about.svg'
import PatternLeaf from '../../../../public/assets/leaf.svg'
import PatternLeaf1 from '../../../../public/assets/leaf1.svg'

const AboutSection = ({isMobile}) => {
  return (
    <div className='relative'> 
       {/*Patern leaf */}
      <div>
        <Image src={PatternLeaf} alt='pattern-leaf' className={`${isMobile&& "w-32 my-10"}`}/>
      </div>
      {/* Content */}
      <div className='relative'>
        <div className={`${isMobile? "block flex-row-reverse mt-10 mx-3" : "flex mx-32 space-x-20"}`}>
          <Image src={BgAbout} alt='bg-about' />
          <div className="mt-10">
            <h2 className={`${isMobile? "text-4xl" : "text-5xl"} font-bold pb-5`}>Inspiring Mental Well-being</h2>
            <p className={`${isMobile ? "w-auto" : "w-[80%]"} `}>We are a dedicated team committed to assisting you on your mental health journey. With our knowledge and resources, we are ready to provide the support you need to overcome sleep disorders, anxiety, and depression. Join us now and together, let's build a better future.</p>
          </div>
        </div>
      </div>
      {/* Pattern leaf */}
        <div>
        <Image src={PatternLeaf1} alt='pattern-leaf1' className={`${isMobile&& "w-32 my-10"} float-right`}/>
      </div>
    </div>
  )
}

export default AboutSection