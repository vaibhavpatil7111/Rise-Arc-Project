import React from 'react'
import Header from './components/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Process from './components/sections/Process'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App