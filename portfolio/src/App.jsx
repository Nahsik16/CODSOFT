import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"


const App = () => {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <Experience/>
    <About/>
  
    <Footer/>
    </div>

  
  )
}

export default App