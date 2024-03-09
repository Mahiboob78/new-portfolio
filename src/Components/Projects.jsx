import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import img1 from '../assets/signinpage1.png'
import img2 from '../assets/signinpage2.png'
import img3 from '../assets/signinpage3.png'
import img4 from '../assets/myPortfolio.png'
import img5 from '../assets/nature_design.png'
import img6 from '../assets/photoStudio.png'

const Projects = () => {
  useEffect( () => {
    Aos.init({
        easing: 'ease-in-out-quart',
        delay: 0,
        duration: 750
    })
   },[])
  return (
    <div id="Projects" className="p-10 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-green-500">Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 jsutify-around gap-8">
        <a data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-4xl p-1 border-2 border-green-800 b_glow" href="#">
          <img  height={300} width={300}  src={img1} alt="" />
        </a>        
        <a data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-4xl p-1 border-2 border-green-800 b_glow" href="#">
          <img height={300} width={300} src={img2} alt="" />
        </a>
        <a data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-4xl p-1 border-2 border-green-800 b_glow" href="#">
          <img height={300} width={300} src={img3} alt="" />
        </a>
        <a data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-4xl p-1 border-2 border-green-800 b_glow" href="#">
        <img height={300} width={300} src={img4} alt="" />
        </a>
        <a data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-4xl p-1 border-2 border-green-800 b_glow" href="#">
        <img height={300} width={300} src={img5} alt="" />
        </a>
        <a data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-4xl p-1 border-2 border-green-800 b_glow" href="#">
        <img height={300} width={300} src={img6} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Projects