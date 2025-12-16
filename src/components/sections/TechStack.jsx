import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TechStack = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const technologies = [
    { 
      name: 'React', 
      category: 'Frontend', 
      gradient: 'from-blue-400 to-blue-600',
      icon: '⚛️',
      description: 'Modern UI Library'
    },
    { 
      name: 'Next.js', 
      category: 'Framework', 
      gradient: 'from-gray-700 to-black',
      icon: '▲',
      description: 'Full-Stack React'
    },
    { 
      name: 'WordPress', 
      category: 'CMS', 
      gradient: 'from-blue-500 to-blue-700',
      icon: '📝',
      description: 'Content Management'
    },
    { 
      name: 'Django', 
      category: 'Backend', 
      gradient: 'from-green-500 to-green-700',
      icon: '🐍',
      description: 'Python Web Framework'
    },
    { 
      name: 'JavaScript', 
      category: 'Language', 
      gradient: 'from-yellow-400 to-yellow-600',
      icon: '📜',
      description: 'Dynamic Programming'
    },
    { 
      name: 'Python', 
      category: 'Language', 
      gradient: 'from-blue-400 to-yellow-400',
      icon: '🐍',
      description: 'Versatile Language'
    },
    { 
      name: 'HTML5', 
      category: 'Markup', 
      gradient: 'from-orange-400 to-orange-600',
      icon: '🌐',
      description: 'Web Structure'
    },
    { 
      name: 'CSS3', 
      category: 'Styling', 
      gradient: 'from-blue-400 to-purple-500',
      icon: '🎨',
      description: 'Visual Design'
    },
    { 
      name: 'Tailwind', 
      category: 'Framework', 
      gradient: 'from-teal-400 to-blue-500',
      icon: '🌪️',
      description: 'Utility-First CSS'
    },
    { 
      name: 'Node.js', 
      category: 'Runtime', 
      gradient: 'from-green-400 to-green-600',
      icon: '🟢',
      description: 'Server-Side JS'
    },
    { 
      name: 'PostgreSQL', 
      category: 'Database', 
      gradient: 'from-blue-600 to-blue-800',
      icon: '📊',
      description: 'Relational Database'
    },
    { 
      name: 'MongoDB', 
      category: 'Database', 
      gradient: 'from-green-500 to-green-700',
      icon: '🍃',
      description: 'NoSQL Database'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-gray-900 dark:to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '40s'}}></div>
      </div>

      {/* Floating Tech Icons */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {['⚛️', '🐍', '🌐', '⚡', '🎨', '📱', '💻', '🚀'][Math.floor(Math.random() * 8)]}
        </motion.div>
      ))}

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
              ⚡ Technology Stack
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cutting-Edge
            </span>
            <br />
            <span className="text-white">Technologies</span>
          </h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We leverage cutting-edge technologies and proven frameworks to build 
            scalable, performant, and maintainable digital solutions that stand the test of time.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                rotateY: 10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 text-center"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Tech Icon with Animation */}
              <motion.div
                className="relative z-10 mb-4"
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  <span className="text-2xl">{tech.icon}</span>
                </div>
              </motion.div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-xl text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {tech.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-2 group-hover:text-gray-300 transition-colors duration-300">
                  {tech.category}
                </p>
                
                <p className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors duration-300">
                  {tech.description}
                </p>
              </div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}></div>
              
              {/* 3D Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl animate-pulse"></div>
            
            <div className="relative bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Always Learning,
                </span>
                <br />
                Always Evolving
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
                Technology moves fast, and so do we. Our team continuously updates our skills 
                and adopts new technologies to ensure your projects benefit from the latest 
                innovations in web development, AI, and digital marketing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack