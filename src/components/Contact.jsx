import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-4">
        <h1 className="my-10 text-center text-4xl">Contact Me</h1>
        <div className="text-center tracking-tighter">
            <p className="my-4 hover:text-cyan-300">{CONTACT.phoneNo}</p>
            <a href='#'className="border-b hover:text-cyan-300">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact