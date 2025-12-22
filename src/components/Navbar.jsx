// import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" />*/}
         {/* <h5 className="mx-2 w-10  font-bold">SM</h5> */}
      </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/swathika-m04/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Swathika-1804" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/u/swathikam04/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
         {/* <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram /> </a> */}
        </div>

    </nav>
  )
}

export default Navbar
