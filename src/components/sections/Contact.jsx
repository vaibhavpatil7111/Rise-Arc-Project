import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Send, Clock, MessageCircle, Zap, Gift, Star } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can integrate with your preferred form handling service
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@ricearc.com",
      link: "mailto:hello@ricearc.com",
      gradient: "from-christmas-red to-red-600",
      bgGradient: "from-christmas-red/10 to-red-600/10",
      emoji: "🎄"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      gradient: "from-christmas-green to-green-600",
      bgGradient: "from-christmas-green/10 to-green-600/10",
      emoji: "🎁"
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-slate-900 via-red-900/10 to-green-900/10 relative overflow-hidden"
    >
      {/* Christmas Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-christmas-red/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-christmas-green/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-christmas-gold/5 rounded-full blur-3xl"></div>
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
            🎄 &nbsp;
            <span className="christmas-text text-lg font-semibold ">
              Holiday Greetings
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="christmas-text">
              Start Your Project
            </span>
            <br />
            <span className="text-white">This Holiday Season</span>
          </h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to transform your digital presence? Get in touch with us today
            and let's discuss how we can help bring your vision to life.
            <span className="block mt-2 christmas-text font-semibold">🎁 Special holiday packages available!</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Christmas-themed Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-lg festive-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-christmas-red to-christmas-green rounded-full flex items-center justify-center mx-auto mb-8 relative">
                  <MessageCircle className="w-8 h-8 text-white" />
                  <span className="absolute -top-2 -right-2 text-lg animate-twinkle">🎄</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  <span className="christmas-text">
                    Send us a festive message
                  </span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-christmas-gold focus:border-transparent transition-all duration-300 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-christmas-gold focus:border-transparent transition-all duration-300 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-christmas-gold focus:border-transparent transition-all duration-300 bg-white/10 backdrop-blur-sm text-white"
                    >
                      <option value="" className="bg-slate-800">Select a service</option>
                      <option value="web-development" className="bg-slate-800">🎄 Web Development</option>
                      <option value="seo" className="bg-slate-800">🎁 SEO Services</option>
                      <option value="crm" className="bg-slate-800">⭐ CRM Solutions</option>
                      <option value="ai-chatbot" className="bg-slate-800">🤖 AI Chatbot Integration</option>
                      <option value="branding" className="bg-slate-800">🎨 Logo & Brand Design</option>
                      <option value="mobile-app" className="bg-slate-800">📱 Mobile App Development</option>
                      <option value="other" className="bg-slate-800">🎊 Other</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-christmas-gold focus:border-transparent transition-all duration-300 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 resize-none"
                      placeholder="Tell us about your project and holiday goals..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-christmas-red to-christmas-green text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-2xl festive-shadow group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      🎁 Send Holiday Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-christmas-green to-christmas-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information with Christmas Theme */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="christmas-text">Get in Touch</span>
              </h3>
              <p className="text-gray-300 text-lg">
                We're here to help make your digital dreams come true this holiday season!
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className={`block p-8 bg-gradient-to-br ${info.bgGradient} backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300 group festive-shadow`}
              >
                <div className="flex items-center space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg relative group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-8 h-8 text-white" />
                    <span className="absolute -top-2 -right-2 text-lg animate-twinkle">{info.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:christmas-text transition-all duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">
                      {info.value}
                    </p>
                  </div>
                  <Star className="w-6 h-6 text-christmas-gold opacity-0 group-hover:opacity-100 animate-twinkle transition-opacity duration-300" />
                </div>
              </motion.a>
            ))}

            {/* Holiday Special Offer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="p-8 bg-gradient-to-br from-christmas-gold/10 to-christmas-red/10 backdrop-blur-xl rounded-3xl border border-christmas-gold/30 text-center festive-shadow"
            >
              <div className="text-4xl mb-4 animate-twinkle">🎁</div>
              <h4 className="text-2xl font-bold christmas-text mb-4">
                Holiday Special Offer!
              </h4>
              <p className="text-gray-300 mb-6">
                Get 20% off on all web development projects started before New Year!
              </p>
              <div className="flex justify-center space-x-4 text-2xl">
                <span className="animate-twinkle">🎄</span>
                <span className="animate-twinkle" style={{ animationDelay: '0.5s' }}>⭐</span>
                <span className="animate-twinkle" style={{ animationDelay: '1s' }}>🎊</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;