import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"; 
import { BiLogoPostgresql } from "react-icons/bi";
// import { RiReactjsLine } from "react-icons/ri";

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-neutral-800 p-4">
                <RiReactjsLine className="animate-bounce text-5xl text-cyan-500"/>
            </div>
            <div className="rounded-2xl border-neutral-800 p-4">
                <SiMongodb  className="animate-bounce animate-delay-150 text-5xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-neutral-800 p-4">
                <BiLogoPostgresql className=" animate-bounce animate-delay-300 text-5xl text-sky-800"/>
            </div>            
            <div className="rounded-2xl border-neutral-800 p-4">
                <FaNodeJs className="animate-bounce animate-delay-450 text-5xl text-green-500"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies;