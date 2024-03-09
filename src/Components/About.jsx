import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from '../assets/Mahi.jpg'

const About = () => {
  useEffect( () => {
    Aos.init({
        easing: 'ease-in-out-quart',
        delay: 0,
        duration: 750
    })
   },[])
  return (
    <div id="About" className="p-10 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold leading-normal text-green-500 uppercase">About me</h1>
      <div className="lg:px-56 px-5 lg:py-0 py-0 text-center lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <img data-aos="fade-down" src={img} width={400} height={450} className='border-2 p-1 border-green-500 img2_glow' alt="" />
        <div className="h-full lg:py-20 flex flex-col justify-center lg:items-start items-center text-white">
            <h2 data-aos="fade-right" className="text-[32px] font-semibold mb-2 leading-normal text-green-500 uppercase">Fullstack Developer</h2>
            <p data-aos="fade-up">As a frontend developer with 2 years of experience, I am passionate about designing and developing web applications with a premium touch.
              “As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow.” - Doug McIlroy</p><br/>
              <div>Name: Mahiboob B</div>
              <div>Birthday: 26 June 1999</div>
              <div>Education: Bachelor of Computer Application</div>
              <div>Experience: 2 Years @CTS</div>
              <div>Phone: +91 8310069342</div>
              <div>Email: mahiboobali498@gmail.com</div>
              <div>Address: Doddakanneli, Bengaluru-35</div>
              <div>Freelance: Available</div>
            <div className="flex mt-8 gap-2">
                <div className="flex items-center justify-center">
                    <div className="flex space-x-2">
                      <button className='neno-button shadow-xl hover:shadow-green-800/50 text-white border-2 hover:bg-green-600 border-green-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden'>View Resume</button>                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About