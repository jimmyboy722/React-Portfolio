import {HERO_TEXT} from '../constants';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">James Eckman</h1>
                    <span className="bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Web Developer</span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                      {HERO_TEXT}
                    </p>
                </div>
            </div>
              <div className="w-full lg:w-1/2 lg:p-8">
               <div className="flex justify-center">
                <img className="rounded-md size-2/3" src='/assets/projects/buddy.jpeg' alt="James and Logan"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;