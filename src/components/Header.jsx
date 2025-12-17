import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolledPast8px, setScrolledPast8px] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setScrolledPast8px(scrollPosition > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src={
                darkMode
                  ? "/images/logo/Rise-Arc-dark-logo.png"
                  : scrolledPast8px
                  ? "/images/logo/Rise-Arc-Logo-Whitee.png"
                  : "/images/logo/Rise-Arc-dark-logo.png"
              }
              alt="RiceArc Logos"
              className="h-12 w-auto transition-all duration-300"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${
                  darkMode ? 'text-white' : scrolledPast8px ? "text-gray-700" : "text-white"
                } hover:text-blue-600 font-medium transition-all duration-300 group`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence>
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={20} className="text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={20} className="text-gray-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.a
              href="#contact"
              className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolledPast8px ? "text-gray-700" : "text-white"
              } hover:text-blue-600 p-2`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - Slide from Right */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-gray-200/20 dark:border-gray-700/20 z-50 md:hidden"
              >
                <div className="flex flex-col h-full">
                  {/* Header with Logo */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200/20 dark:border-gray-700/20">
                    <img
                      src="/images/logo/Rise-Arc-Logo-Whitee.png"
                      alt="RiceArc Logo"
                      className="h-10 w-auto"
                    />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <X
                        size={24}
                        className="text-gray-700 dark:text-gray-300"
                      />
                    </button>
                  </div>

                  {/* Navigation Items */}
                  <div className="flex-1 px-6 py-8">
                    <nav className="space-y-4">
                      {navItems.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </motion.a>
                      ))}
                    </nav>

                    {/* CTA Button */}
                    <motion.a
                      href="#contact"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full mt-8 hover:shadow-lg transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Start Project
                    </motion.a>
                  </div>

                  {/* Social Links */}
                  <div className="px-6 py-6 border-t border-gray-200/20 dark:border-gray-700/20">
                    <div className="flex justify-center space-x-6">
                      {[
                        {
                          icon: "📧",
                          href: "mailto:hello@ricearc.com",
                          label: "Email",
                        },
                        {
                          icon: "📱",
                          href: "tel:+15551234567",
                          label: "Phone",
                        },
                        { icon: "💼", href: "#about", label: "About" },
                      ].map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-lg">{social.icon}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
