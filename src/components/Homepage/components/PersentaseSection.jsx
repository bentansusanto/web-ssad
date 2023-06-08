import { BarChart } from './BarChart'

const PersentaseSection = ({isMobile}) => {
  return (
    <>
    <div className={`${isMobile ? "block mt-64 px-5" : "flex mt-96 px-36"} flex-row-reverse`}>
        <BarChart/>
        <div className={` ${isMobile? "mt-10" : ""}`}>
        <h1
            className={`${isMobile ? "text-[1.2rem]" : "text-[1.8rem] w-[90%]"} pb-5 font-bold`}
          >
            Percentage of individuals with sleeping disorders, stress, anxiety, and depression.
          </h1>
          <p className={`${isMobile ? "w-auto" : "w-[70%]"} `}>We are a dedicated team committed to assisting you on your mental health journey. With our knowledge and resources, we are ready to provide the support you need to overcome sleep disorders, anxiety, and depression. Join us now and together, let's build a better future.</p>
        </div>        
    </div>   
    </>
  )
}

export default PersentaseSection