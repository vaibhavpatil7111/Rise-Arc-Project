import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Search, Database, Bot, Palette, Smartphone } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with React, WordPress, Django, and modern technologies. Responsive, fast, and SEO-optimized.',
      features: ['React & Next.js', 'WordPress Development', 'Django Applications', 'Responsive Design'],
      gradient: 'from-blue-500 to-cyan-500',
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Comprehensive SEO strategies to improve your search rankings and drive organic traffic. Technical SEO, content optimization, and performance audits.',
      features: ['Technical SEO', 'Content Strategy', 'Performance Optimization', 'Analytics & Reporting'],
      gradient: 'from-green-500 to-emerald-500',
      bgImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Database,
      title: 'CRM Solutions',
      description: 'Custom CRM systems to streamline your business processes, manage customer relationships, and boost productivity with tailored workflows.',
      features: ['Custom CRM Development', 'Data Integration', 'Workflow Automation', 'Analytics Dashboard'],
      gradient: 'from-purple-500 to-pink-500',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Bot,
      title: 'AI Chatbot Integration',
      description: 'Intelligent chatbots powered by AI to enhance customer support, automate responses, and improve user engagement on your platforms.',
      features: ['AI-Powered Responses', 'Multi-Platform Integration', 'Custom Training', '24/7 Support'],
      gradient: 'from-orange-500 to-red-500',
      bgImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Palette,
      title: 'Logo & Brand Design',
      description: 'Professional branding solutions including logo design, brand identity, and visual guidelines that make your business stand out.',
      features: ['Logo Design', 'Brand Identity', 'Visual Guidelines', 'Marketing Materials'],
      gradient: 'from-indigo-500 to-purple-500',
      bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Bot,
      title: 'AI-Powered Websites',
      description: 'Intelligent websites powered by AI that adapt to user behavior, provide personalized experiences, and automate customer interactions.',
      features: ['AI Integration', 'Smart Personalization', 'Automated Responses', 'Machine Learning'],
      gradient: 'from-teal-500 to-blue-500',
      bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center'
    }
  ]

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    })
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '30s'}}></div>
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
          >🚀 &nbsp;
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-lg font-semibold">
               Our Services
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>
            <br />
            <span className="text-white">That Drive Results</span>
          </h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Comprehensive digital solutions designed to elevate your business 
            and drive measurable results in today's competitive market.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -3, 
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                ></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`}></div>
              </div>
              
              {/* Animated Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Static Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none"></div>
              </div>
              
              {/* 3D Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center"
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
            <a 
              href="#contact" 
              className="relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 inline-block"
            >
              <span className="relative z-10">Discuss Your Project</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services