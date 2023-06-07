/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import BgAbout from '../../../../public/assets/bg-about.svg'
import PatternLeaf from '../../../../public/assets/leaf.svg'
import PatternLeaf1 from '../../../../public/assets/leaf1.svg'
import PatternStar from '../../../../public/assets/pattern-star.svg'

const AboutSection = ({isMobile}) => {
  return (
    <div> 
       {/*Patern leaf */}
      <div>
        <Image src={PatternLeaf} alt='pattern-leaf' className={`${isMobile? "-ml-20 w-52" : "-ml-24"}`}/>
      </div>
      {/* Content */}
      <div className='relative'>
        <div className={`${isMobile? "block flex-row-reverse mt-10" : "flex mt-20"}`}>
          <Image src={BgAbout} alt='bg-about' />
          <div className={`${isMobile ? "px-5" : ""} mt-10`}>
            <h2 className={`${isMobile? "text-4xl" : "text-4xl"} font-bold pb-5`}>Inspiring Mental Well-being</h2>
            <p className={`${isMobile ? "w-auto" : "w-[70%]"} `}>We are a dedicated team committed to assisting you on your mental health journey. With our knowledge and resources, we are ready to provide the support you need to overcome sleep disorders, anxiety, and depression. Join us now and together, let's build a better future.</p>
          </div>
        </div>
        <Image src={PatternStar} alt='pattern-star' className={`${isMobile? "hidden" : "absolute top-0 right-0"}`}/>
      </div>
      {/* Pattern leaf */}
        <div>
        <Image src={PatternLeaf1} alt='pattern-leaf1' className={`${isMobile? "-mr-20 w-52" : "-mr-24"} float-right`}/>
      </div>
    </div>
  )
}

export default AboutSection