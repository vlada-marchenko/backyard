import HeroBg from "./HeroBg.jsx"
import Hero from "./Hero.jsx"
import SvgSprite from '../assets/icons/SvgSprite.jsx'
import { Header } from "./Header.jsx"
import Backyard from "./Backyard.jsx"

function App() {
  return (
    <div className=" bg-[#F0F0F1] overflow-x-hidden">
      <div className="container relative bg-[#F0F0F1]">
        <SvgSprite />

     <div className="relative isolate">
        <HeroBg />
   
   <div className=" relative z-10">
        <Header />
        <Hero />
        </div>
              </div>
        <Backyard />

      </div>
    </div>
  )
}

export default App
