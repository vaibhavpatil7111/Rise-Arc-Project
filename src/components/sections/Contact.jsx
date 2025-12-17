import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Send, Clock, MessageCircle, Zap } from "lucide-react";

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
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Fri: 9AM - 6PM EST",
      link: null,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
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
            💬 &nbsp;
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold ">
              Let's Connect
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Start Your Project
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Today</span>
          </h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to transform your digital presence? Get in touch with us today
            and let's discuss how we can help bring your vision to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 3D Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Send us a message
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
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                      className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700"
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
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                      className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700"
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
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="seo">SEO Services</option>
                      <option value="crm">CRM Solutions</option>
                      <option value="ai-chatbot">AI Chatbot Integration</option>
                      <option value="branding">Logo & Brand Design</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                      className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>Send Message</span>
                    <Send size={20} className="ml-3" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-center text-lg">
                We're here to help bring your digital vision to life. Whether
                you have a specific project in mind or just want to explore
                possibilities, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                  }}
                  className="relative rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-6 cursor-pointer transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
                >
                  <div className="flex items-center space-x-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 hover:shadow-xl`}
                    >
                      <info.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-lg"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Response Guarantee
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>

                <h4 className="text-xl font-bold mb-3">
                  Quick Response Guarantee
                </h4>
                <p className="text-blue-100 leading-relaxed">
                  We typically respond to all inquiries within 24 hours. For
                  urgent projects, feel free to call us directly.
                </p>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
