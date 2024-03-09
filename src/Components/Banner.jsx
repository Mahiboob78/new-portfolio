import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import img from '../assets/Mahiboob.jpg'

const Banner = () => {
   useEffect( () => {
    Aos.init({
        easing: 'ease-in-out-quart',
        delay: 0,
        duration: 750
    })
   },[])
  return (
    <div id="Home" className="px-10 text-center gap-5 flex flex-col-reverse justify-between items-center lg:gap-28 lg:px-56 lg:text-start lg:flex-row lg:py-10">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
            <h2 data-aos="fade-right" className="text-[24px] font-semibold">Hello I'm</h2>
            <h1 className="text-[50px] font-bold leading-normal text-green-500 uppercase ">Mahiboob Ali</h1>
            <h1 className="text-[36px] font-semibold leading-normal text-green-500 uppercase">Fullstack Developer</h1>
            <p data-aos="fade-up" className="text-[18px] mt-4">"I’m working on a professional, visually sophisticated and technologically proficient, responsive and multi-functional React Templates".</p>
            <div className="flex mt-8 gap-2">
                <div className="flex items-center justify-center">
                    <div className="flex space-x-2">
                        <a href="" className="text-green-600 hover:text-green-500 rounded-full glow p-2">
                            <AiFillGithub className="text-[26px]"/>
                        </a>
                    </div>
                    <div className="flex space-x-2">
                        <a href="" className="text-green-600 hover:text-green-500 rounded-full glow p-2">
                            <FaLinkedinIn className="text-[26px]"/>
                        </a>
                    </div>
                    <div className="flex space-x-2">
                        <a href="" className="text-green-600 hover:text-green-500 rounded-full glow p-2">
                            <FaInstagram className="text-[26px]"/>
                        </a>
                    </div>
                    <div className="flex space-x-2">
                        <a href="" className="text-green-600 hover:text-green-500 rounded-full glow p-2">
                            <FaXTwitter className="text-[26px]"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <img data-aos="fade-up" src={img} width={400} height={400} className='rounded-full border-2 p-1 border-green-500 img_glow ' alt="" />
    </div>
  )
}

export default Banner