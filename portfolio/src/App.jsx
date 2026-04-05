import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Identity from './components/Identity'
import Developer from './components/Developer'
import Skater from './components/Skater'


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