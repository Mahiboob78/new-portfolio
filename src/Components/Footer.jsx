import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
      <div className='container max-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='mb-4 md:mb-0'>
          <h2 className='text[22px] font-semibold text-green-600 py-2 uppercase'>Freelancer</h2>
          <p className='text-[16px] my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <h2 className='text[22px] font-semibold text-green-600 py-2 uppercase'>Services</h2>
          <ul className='text[16px] my-4'>
            <li className='my-2'>Web Design</li>
            <li className='my-2'>Web Development</li>
            <li className='my-2'>SEO</li>
            <li className='my-2'>E-commerce</li>
          </ul>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text[22px] font-semibold text-green-600 py-2 uppercase'>Contact</h2>
          <p className='text-[16px] my-4'>Email: mahiboobali498@gmail.com</p>
          <p className='text-[16px] my-4'>Phone: +91 8310069342</p>
        </div>
        <div>
          <h2 className='mb-4 md:mb-0 font-semibold text-green-600 py-2 uppercase'>Follow me</h2>
          <div className='flex space-x-4'>
            <a className="text-white hover:text-green-600 transition-all duration-150 ease-in-out" href="">
              <AiFillGithub/>
            </a>
            <a className="text-white hover:text-green-600 transition-all duration-150 ease-in-out" href="">
              <FaLinkedinIn/>
            </a>
            <a className="text-white hover:text-green-600 transition-all duration-150 ease-in-out" href="">
              <FaInstagram/>
            </a>
            <a className="text-white hover:text-green-600 transition-all duration-150 ease-in-out" href="">
              <FaXTwitter/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer