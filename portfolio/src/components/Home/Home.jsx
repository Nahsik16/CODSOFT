// import avatarImg from "../../assets/7358602-removebg-preview.png";
 import TextChange from "../TextChange.jsx";
import img from '../../assets/img.jpg'

const Home = () => {
  return (
    <div className="text-white  flex w-full justify-between items-start p-10 md:p-20">
    <div className="md:w-2/4 mt-20 md:pt-10 ">
      <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
        <TextChange />
      </h1>
      <p className="text-sm mt-8 md:text-2xl tracking-tight ">
      A student at Thadomal Shahani College diving deep into the world of AI and Data Science. 🧠 Passionate about leveraging tech
      </p>
      <button className="mt-8 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
        Contact Me
      </button>
    </div>
    <div>
      <img className="mt-0 h-32vh w-32vh overflow-hidden" src= {img}alt="" />
    </div>
  </div>
  )
}

export default Home