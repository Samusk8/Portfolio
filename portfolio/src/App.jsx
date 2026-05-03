import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './sections/Hero'
import Header from './components/layout/Header'
import About from './sections/About'
import Identity from './components/identity/Identity'
import Developer from './sections/Developer'
import Skater from './sections/Skater'
import Axels from './sections/Axels'


function App() {
  const [active, setActive] = useState("developer")
  return (
    <div className="min-h-screen w-full bg-charcoal text-coldwhite">

      <Header/>
      <Hero/>
      <About/>
      <Identity active={active} setActive={setActive} />

      {active === "developer" && <Developer />}
      {active === "skater" && <Skater />}
    </div>
    
  )
}

export default App
