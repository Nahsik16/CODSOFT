import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaNode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiBootstrap, SiDjango, SiPostman } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap md:flex-nowrap items-start justify-around">
       
        <div className=" mt-7 flex flex-wrap md:w-1/2 gap-8 md:p-12 py-10">
          <span className="p-3 bg-transparent flex items-center rounded-2xl">
            <FaHtml5 className="text-[#E34F26]" size={50} />
          </span>
          <span className="p-3 bg-transparent flex items-center rounded-2xl">
            <FaCss3 className="text-[#1572B6]" size={50} />
          </span>
          <span className="p-3 bg-transparent flex items-center rounded-2xl">
            <FaReact className="text-[#61DAFB]" size={50} />
          </span>
          <span className="p-3 bg-transparent flex items-center rounded-2xl">
            <FaJs className="text-[#F7DF1E]" size={50} />
          </span>
          <span className="p-3 bg-transparent flex items-center rounded-2xl">
            <FaFigma className="text-[#F24E1E]" size={50} />
          </span>
          <span className="p-3 bg-transparent flex items-center rounded-2xl">
            <SiMongodb className="text-[#47A248]" size={50} />
          </span>
          <span className="p-3 bg-transparent flex items-center rounded-2xl">
            <SiExpress className="text-[#000]" size={50} />
          </span>
          <span className="p-3 bg-transparent flex items-center rounded-2xl">
            <SiBootstrap className="text-[#563d7c]" size={50} />
          </span>
          <span className="p-3 bg-transparent flex items-center rounded-2xl">
            <SiDjango className="text-[#092e20]" size={50} />
          </span>
          <span className="p-3 bg-transparent flex items-center rounded-2xl">
            <SiPostman className="text-[#ff6c37]" size={50} />
          </span>
          <span className="p-3 bg-transparent flex items-center rounded-2xl">
            <FaNode className="text-[#68a063]" size={50} />
          </span>
        </div>

        <div className="mt-8 flex flex-col md:w-1/2 gap-4">
          <div className="flex gap-10 mt-5 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <div className="w-10 h-10 bg-slate-950 text-white flex items-center justify-center rounded-full">
              <span className="text-2xl">🏆</span>
            </div>
            <span className="text-white">
              <h2 className="leading-tight">NEED FOR CODE 2.0</h2>
              <p className="text-sm leading-tight font-thin">Nov – 2023</p>
              <ul className="text-sm p-2">
                <li>- Developed AYURGURU: A website with Ayurvedic remedies and modern integration.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 mt-5 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <div className="w-10 h-10 bg-slate-950 text-white flex items-center justify-center rounded-full">
              <span className="text-2xl">🏆</span>
            </div>
            <span className="text-white">
              <h2 className="leading-tight">Ace Hacks 1.0</h2>
              <p className="text-sm leading-tight font-thin">March – 2024</p>
              <ul className="text-sm p-2">
                <li>- Developed PHOTOLY: A website for photo upload, design, and editing with AI integrations.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 mt-5 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <div className="w-10 h-10 bg-slate-950 text-white flex items-center justify-center rounded-full">
              <span className="text-2xl">🏆</span>
            </div>
            <span className="text-white">
              <h2 className="leading-tight">NEED FOR CODE 3.0</h2>
              <p className="text-sm leading-tight font-thin">2024</p>
              <ul className="text-sm p-2">
                <li>- Developed a Politician Performance Report Card using AI/ML technologies.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
