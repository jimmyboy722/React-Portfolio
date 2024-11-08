// IMPORTS
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    // NAVBAR WITH TAILWIND STYLING
    <nav className="mb-20 flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
            {/* <img src={logo} alt="James Eckman Logo" /> */}
            <p className='text-cyan-50 font-bold font-sans hover:text-cyan-300 text-3xl ps-8'>jE</p>
        </div>
        {/* DISPLAY SOCIAL MEDIA ICONS WITH TAILWIND STYLING */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin class='text-slate-600 hover:text-cyan-300' />
            <FaGithub class='text-slate-600 hover:text-cyan-300' />
            <FaInstagram class='text-slate-600 hover:text-cyan-300' />
        </div>
    </nav>        
  )
}

export default Navbar;