import React, { Suspense, lazy } from 'react'
import Header from './components/Header'
import Hero from './components/sections/Hero'
import ChristmasAnimations from './components/ChristmasAnimations'
import Loading from './components/ui/Loading'

// Lazy load components with preload hints
const About = lazy(() => import(/* webpackChunkName: "about" */ './components/sections/About'))
const Services = lazy(() => import(/* webpackChunkName: "services" */ './components/sections/Services'))
const Portfolio = lazy(() => import(/* webpackChunkName: "portfolio" */ './components/sections/Portfolio'))
const WhyChooseUs = lazy(() => import(/* webpackChunkName: "why-choose-us" */ './components/sections/WhyChooseUs'))
const Process = lazy(() => import(/* webpackChunkName: "process" */ './components/sections/Process'))
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './components/sections/Contact'))
const Footer = lazy(() => import(/* webpackChunkName: "footer" */ './components/Footer'))

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <ChristmasAnimations />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Services />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Process />
        </Suspense>
        <Suspense fallback={<Loading />}>
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