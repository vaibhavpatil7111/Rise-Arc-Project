import React, { Suspense, lazy } from 'react'
import Header from './components/Header'
import Hero from './components/sections/Hero'
import Loading from './components/ui/Loading'

// Lazy load components for better performance
const About = lazy(() => import('./components/sections/About'))
const Services = lazy(() => import('./components/sections/Services'))
const Portfolio = lazy(() => import('./components/sections/Portfolio'))
const WhyChooseUs = lazy(() => import('./components/sections/WhyChooseUs'))
const Process = lazy(() => import('./components/sections/Process'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<Loading />}>
          <About />
          <Services />
          <Portfolio />
          <WhyChooseUs />
          <Process />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default React.memo(App)