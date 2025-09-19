import Hero from "./Hero.jsx"
import SvgSprite from '../assets/icons/SvgSprite.jsx'
import { Header } from "./Header.jsx"
// import BgComp from "./BgComp.jsx"
// import sharedBg from '../assets/images/mob-bg.png'
import Backyard from "./Backyard.jsx"

function App() {
  return (
    <div className="bg-[#F0F0F1]">
    <div className="container bg-[#F0F0F1]">
<SvgSprite />
{/* <BgComp bg={sharedBg}> */}
<div >
  <Header />
</div>
<div >  
  <Hero />
</div>
{/* </BgComp> */}
<div >
<Backyard/>
</div>
    </div>
    </div>
  )
}

export default App