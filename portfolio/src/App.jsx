import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'


function App() {
  return (
    <div className="min-h-screen w-fullbg-charcoal text-coldwhite">

      <Header/>
      <Hero/>
      <About/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
    
  )
}

export default App