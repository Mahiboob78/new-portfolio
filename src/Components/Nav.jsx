import { useState } from "react"
import { Link } from "react-scroll"
import {FaTimes} from "react-icons/fa" 
import { GiHamburgerMenu } from "react-icons/gi";

const nav = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const content = <>
        <div className="lg:hidden block absolute top-14 w-full left-0 right-0 bg-slate-950 transition">
            <ul className="text-center text-xl p-10">
                <Link spy={true} smooth={true} to="Home">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounde">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounde">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Skills">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounde">Skills</li>
                </Link>
                <Link spy={true} smooth={true} to="Projects">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounde">Projects</li>
                </Link>
                <Link spy={true} smooth={true} to="Contact">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounde">Contact</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh fixed top-0 w-full bg-slate-900 flex justify-between z-50 text-white px-10 py-4 border-b border-slate-700 lg:p-40 lg:py-5">
                <div className="flex items-center flex-1">
                    <span className="text-xl font-bold uppercase">Freelancer</span>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 text-[18px]">
                            <Link spy={true} smooth={true} to="Home">
                                <li className="hover:text-green-600 transition border-b-2 border-slate-900 hover:border-green-600 cursor-pointer">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:text-green-600 transition border-b-2 border-slate-900 hover:border-green-600 cursor-pointer">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Skills">
                                <li className="hover:text-green-600 transition border-b-2 border-slate-900 hover:border-green-600 cursor-pointer">Skills</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Projects">
                                <li className="hover:text-green-600 transition border-b-2 border-slate-900 hover:border-green-600 cursor-pointer">Projects</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                                <li className="hover:text-green-600 transition border-b-2 border-slate-900 hover:border-green-600 cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block md:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes/> : <GiHamburgerMenu />}
                </button>
            </div>
        </nav>
    )
}

export default nav