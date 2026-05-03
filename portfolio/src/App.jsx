import { useState } from 'react'
import './App.css'
import Hero from './sections/Hero'
import Header from './components/layout/Header'
import About from './sections/About'
import Identity from './components/identity/Identity'
import Developer from './sections/Developer'
import Skater from './sections/Skater'
import Axels from './sections/Axels'
import Footer from './components/ui/footer'


function App() {
  const [active, setActive] = useState("developer")
  return (
    <div id="top" className="min-h-screen w-full bg-charcoal text-coldwhite">

      <Header/>
      <Hero/>
      <About/>
      <Identity active={active} setActive={setActive} />

      {active === "developer" && <Developer />}
      {active === "skater" && <Skater />}
      <Axels/>
      <Footer/>
    </div>
    
  )
}

export default App
