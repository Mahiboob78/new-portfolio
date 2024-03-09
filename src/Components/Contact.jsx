import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect( () => {
    Aos.init({
        easing: 'ease-in-out-quart',
        delay: 0,
        duration: 750
    })
   },[])
  return (
    <div id="Contact" className="p-10 lg:-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-down" className="text-[52px] font-semibold mb-10 leading-normal uppercase text-green-500">Contact me</h1>
      {/* <div className="flex flex-row gap-20"> */}
      <form action="" data-aos="fade-up" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-9">
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-2 border-2 border-green-800 b_glow text-[18px] text-slate-300" placeholder="Enter your name" type="text" />
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-2 border-2 border-green-800 b_glow text-[18px] text-slate-300" placeholder="Enter your email" type="text" />
        </div>
        <textarea className="w-full my-3 rounded-lg bg-slate-800 p-2 border-2 border-green-800 b_glow text-[18px] text-slate-500" placeholder="Write your message..." name="" id="" cols="20" rows="6"></textarea>
        <button className="neno-button shadow-xl hover:shadow-green-800/50 text-white border-2 border-green-800 bg-green-600 hover:bg-slate-900 rounded-lg py-3 px-8 my-4 uppercase relative overflow-hidden b_glow tex-xl text-bold" type="submit">Submit</button>
      </form>
      {/* <form action="" data-aos="fade-left" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-9">
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-2 border-2 border-green-800 b_glow text-[18px] text-slate-500" placeholder="Enter your name" type="text" />
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-2 border-2 border-green-800 b_glow text-[18px] text-slate-500" placeholder="Enter your email" type="text" />
        </div>
        <textarea className="w-full my-3 rounded-lg bg-slate-800 p-2 border-2 border-green-800 b_glow text-[18px] text-slate-500" placeholder="Write your message..." name="" id="" cols="20" rows="6"></textarea>
        <button className="neno-button shadow-xl hover:shadow-green-800/50 text-white border-2 border-green-800 bg-green-600 hover:bg-slate-900 rounded-lg py-3 px-8 my-4 uppercase relative overflow-hidden b_glow tex-xl text-bold" type="submit">Send</button>
      </form> */}
      {/* </div> */}
    </div>
  )
}

export default Contact