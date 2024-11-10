import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div id="aboutMe" className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text text-4xl">About <span className="text-slate-600 hover:text-cyan-300">Me</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className='rounded-2xl' src='/assets/projects/solo.jpg' alt="Pic of James Eckman"/>
                </div>
            </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About;