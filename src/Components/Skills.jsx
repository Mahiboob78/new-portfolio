import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import SkillsLevel from "../skills/SkillsLevel"

const Services = () => {

  useEffect( () => {
    Aos.init({
        easing: 'ease-in-out-quart',
        delay: 0,
        duration: 750
    })
   },[])
  return (
    <div id="Skills" className="px-10 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-green-500">Skills</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 jsutify-around gap-10">

        <div data-aos="fade-up" className="h-96 w-80 p-5 items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl border-2 border-green-800 b_glow" >
          <div className="text-white">
            <SkillsLevel skillsName="HTML5" percentage="90%" />
            <SkillsLevel skillsName="CSS3" percentage="95%" />
            <SkillsLevel skillsName="SASS" percentage="85%" />
            <SkillsLevel skillsName="Bootstrap" percentage="75%" />
            <SkillsLevel skillsName="Tailwind CSS" percentage="95%" />
          </div>
      
        </div>
        
        <div data-aos="fade-down" className="h-96 w-80 p-5 items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl border-2 border-green-800 b_glow">
          <div className="text-white">
            <SkillsLevel skillsName="JavaScript" percentage="85%" />
            <SkillsLevel skillsName="ReactJs" percentage="90%" />
            <SkillsLevel skillsName="Redux" percentage="80%" />
            <SkillsLevel skillsName="RESTful API" percentage="85%" />
            <SkillsLevel skillsName="NextJs" percentage="80%" />
          </div>
        </div>

        <div data-aos="fade-up" className="h-96 w-80 p-5 items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl border-2 border-green-800 b_glow">
          <div className="text-white">
            <SkillsLevel skillsName="Git" percentage="80%" />
            <SkillsLevel skillsName="GitHub" percentage="90%" />
            <SkillsLevel skillsName="Vite" percentage="95%" />
            <SkillsLevel skillsName="Firebase" percentage="75%" />
            <SkillsLevel skillsName="Locafy" percentage="85%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services