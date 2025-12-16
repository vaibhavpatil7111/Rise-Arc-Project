import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Palette, Code, TestTube, Rocket } from 'lucide-react'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultation.',
      details: ['Requirements Analysis', 'Market Research', 'Goal Setting', 'Timeline Planning'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Our design team creates wireframes and mockups that align with your brand and provide exceptional user experience.',
      details: ['Wireframing', 'UI/UX Design', 'Brand Integration', 'Responsive Layouts'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We bring designs to life using modern technologies, ensuring clean code, performance, and scalability.',
      details: ['Frontend Development', 'Backend Integration', 'Database Setup', 'API Development'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Rigorous testing across devices and browsers to ensure everything works perfectly before launch.',
      details: ['Cross-browser Testing', 'Mobile Responsiveness', 'Performance Testing', 'Security Audits'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    },
    {
      icon: Rocket,
      title: 'Delivery',
      description: 'We deploy your project and provide training, documentation, and ongoing support for continued success.',
      details: ['Deployment', 'Training & Documentation', 'Performance Monitoring', 'Ongoing Support'],
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/10 to-purple-500/10'
    }
  ]

  return (
    <section id="process" className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '35s'}}></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-lg font-semibold">
              🚀 Our Process
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Proven Methodology
            </span>
            <br />
            <span className="text-white">For Success</span>
          </h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A proven methodology that ensures your project is delivered on time, 
            within budget, and exceeds your expectations at every step.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Modern Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-full rounded-full opacity-30"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Enhanced Step Number Circle */}
              <motion.div 
                className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full items-center justify-center font-bold text-2xl z-20 shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${step.gradient.replace('from-', '').replace(' to-', ', ')})`,
                }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                    '0 0 40px rgba(147, 51, 234, 0.4)',
                    '0 0 20px rgba(59, 130, 246, 0.3)'
                  ]
                }}
              >
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </motion.div>
              
              {/* Content Card */}
              <motion.div 
                className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20'}`}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 p-8">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}></div>
                  
                  {/* Mobile Step Number */}
                  <div className="flex items-center mb-6 lg:hidden">
                    <motion.div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4 text-white shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${step.gradient.replace('from-', '').replace(' to-', ', ')})`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                    >
                      {index + 1}
                    </motion.div>
                    <motion.div
                      animate={{
                        rotateY: [0, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Desktop Icon */}
                  <motion.div 
                    className="hidden lg:flex items-center mb-6"
                    animate={{
                      rotateY: [0, 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                      {step.description}
                    </p>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.1 + detailIndex * 0.05 }}
                          className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                        >
                          <motion.div 
                            className={`w-3 h-3 bg-gradient-to-r ${step.gradient} rounded-full mr-4 group-hover:scale-125 transition-transform duration-300`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: detailIndex * 0.2 }}
                          ></motion.div>
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-20"
        >
          <motion.div
            className="relative max-w-5xl mx-auto"
            whileHover={{ 
              scale: 1.02,
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            {/* 3D Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-xl transform rotate-1"></div>
            
            <div className="relative bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20 shadow-2xl">
              {/* Animated Rocket */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotateZ: [-5, 5, -5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
              >
                <Rocket className="w-12 h-12 text-white" />
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Start
                </span>
                <br />
                Your Project?
              </h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-3xl mx-auto">
                Let's discuss your project requirements and create a custom solution 
                that drives results for your business.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a 
                  href="#contact" 
                  className="relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 inline-block"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process