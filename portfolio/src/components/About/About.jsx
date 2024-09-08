

import AboutImg from "../../assets/img1.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-20">
        <img
           className="mt-7 ml-8 w-40 h-40 md:w-1/4 md:h-auto object-cover filter"
            src={AboutImg} alt="About img"
            style={{ filter: "drop-shadow(0 10px 15px rgba(0, 123, 255, 0.5))" }}
          />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Experienced in building responsive and dynamic UIs with React.js, HTML, CSS, and JavaScript. Leveraging tools like Framer Motion and GSAP to create engaging and visually appealing user interfaces.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Proficient in developing secure and scalable back-end systems using Express.js, Node.js, and MongoDB. Skilled in API creation and ensuring seamless integration between the front and back ends.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                AI&ML Integration
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Focused on integrating AI/ML technologies through various hackathon projects to enhance user interactions. Continuously learning and applying AI to real-world applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default About