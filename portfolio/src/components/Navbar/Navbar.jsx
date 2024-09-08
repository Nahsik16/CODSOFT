import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import img from '/favicon2.ico';

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="flex flex-wrap items-center justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <img className="mt-4 ml-4 h-15 tracking-wide" src={img} alt="Kishan Wali" />
      <div className="flex items-start gap-7 mt-4 mr-10  ">
        <a href="https://www.linkedin.com/in/kishanwali" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <CiLinkedin size={24} />
        </a>
        <a href="https://github.com/Nahsik16" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaGithub size={24} />
        </a>
      </div>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } flex flex-row   mx-28 p-y2 mt-3  font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Experience</li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li>
        </a>
      </ul>


      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden  absolute right-7 top-12 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-7 top-12 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
