import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Projects</h1>
        <div>{PROJECTS.map((project, index)=> (
            <div key={index} className="mb-8 flex flex-wrap lg: justify-center">
              <div className="w-full lg:w-1/4">
                <img src={project.image} width={250} height={250} alt={project.title} className="mb-6 rounded"/>
                </div>
                 <div className="w-full max-w-xl lg:w-3/4">
                  <h6 className="mb-2 font-semibold">{project.title}</h6>
                  <p className="mb-4 text-neutral-400">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer"><p className="mb-4 text-neutral-400 hover:text-cyan-500">Check it out!</p></a>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="mr-2 inline-block border-neutral-900 px-2 py-1 text-sm font-medium text-cyan-500">
                        {tech}
                    </span>
                  ))}
                 </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Projects