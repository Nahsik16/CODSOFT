import ProjectCard from "../ProjectCard"
import project1 from "../../assets/Project1.png"
import project2 from "../../assets/Project2.png"
import project3 from "../../assets/Project3.png"


const Project = () => {
  return (
    <div id="Projects" className="p-10 ml-4 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Photoly"
          main="A website where users can upload, design and edit pictures with AI-powered features. It provides a seamless experience for enhancing and customizing photos."
          image={project1}
          link="https://tera-byte-ace.vercel.app/"
          source='https://github.com/Nahsik16/TeraByte'
        />
        <ProjectCard
          title="Tandoori Bites"
          main="Tandoori Bites is your premier online platform for seamless food ordering, delivery, and a variety of delicious cuisine options, ensuring convenience and satisfaction."
          image={project2}
          link="https://tandoori-bites-frontend.onrender.com/"
          source='https://github.com/Nahsik16/Tandoori-Bites'
        />
        <ProjectCard
          title="ToDO"
          main="A simple and user-friendly Todo List web application built with React. The app allows users to add, update, delete, and manage tasks, helping them stay organized and productive."
          image={project3}
          link="https://todo-list-nahsik16.onrender.com/"
          source='https://github.com/Nahsik16/CODSOFT'
        />
      </div>
    </div>
  )
}

export default Project