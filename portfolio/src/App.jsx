import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Project from "./components/Project/Project"


const App = () => {
  return (
    <div className="bg-[#080d1f] h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Project/>
    <Footer/>
    </div>
  )
}

export default App