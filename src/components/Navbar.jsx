// IMPORTS
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // NAVBAR WITH TAILWIND STYLING
    <nav className="mb-20 flex items-center justify-between py-4 ">
        <div className="flex flex-shrink-0 items-center">
            {/* <img src={logo} alt="James Eckman Logo" /> */}
            <p className='text-cyan-50 font-bold font-sans hover:text-cyan-300 text-3xl ps-8'>jE</p>
        </div>
        <ol className="flex flex-wrap items-center gap-4 text-slate-600">
          <li className="m-8"><a href='#aboutMe' className='hover:text-cyan-300'>About</a></li>
          <li className="m-8"><a href='#technologies' to className='hover:text-cyan-300'>Technologies</a></li>
          <li className="m-8"><a href='#projects' to className='hover:text-cyan-300'>Projects</a></li>
          <li className="m-8"><a href='#contact' to className='hover:text-cyan-300'>Contact</a></li>
        </ol> 
        {/* DISPLAY SOCIAL MEDIA ICONS WITH TAILWIND STYLING */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/james-eckman-a054922b8/"><FaLinkedin class='text-slate-600 hover:text-cyan-300' /></a>
          <a href='https://github.com/jimmyboy722'><FaGithub class='text-slate-600 hover:text-cyan-300' /></a>
          <a href='https://www.instagram.com/logansdad722/'><FaInstagram class='text-slate-600 hover:text-cyan-300' /></a>
        </div>
    </nav>        
  )
}

export default Navbar;