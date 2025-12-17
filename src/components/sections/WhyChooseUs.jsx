import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Shield,
  Target,
  Smartphone,
  Clock,
  HeadphonesIcon,
} from "lucide-react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const reasons = [
    {
      icon: Zap,
      title: "Modern Tech Stack",
      description:
        "We use the latest technologies and frameworks to ensure your project is built for the future, not the past.",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
    },
    {
      icon: Target,
      title: "Client-Focused Approach",
      description:
        "Your goals are our goals. We work closely with you to understand your vision and deliver exactly what you need.",
      gradient: "from-blue-400 to-purple-500",
      bgGradient: "from-blue-500/10 to-purple-500/10",
    },
    {
      icon: Shield,
      title: "Performance & SEO Optimized",
      description:
        "Every project is optimized for speed, search engines, and user experience from day one.",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Smartphone,
      title: "Clean UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that users love and that drive conversions for your business.",
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description:
        "We respect your timeline and deliver high-quality work within agreed deadlines without compromising quality.",
      gradient: "from-indigo-400 to-blue-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10",
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description:
        "Our relationship doesn't end at launch. We provide ongoing support and maintenance for your peace of mind.",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
      scale: 0.9,
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
        stiffness: 100,
      },
    }),
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "25s" }}
        ></div>
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
            ✨
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold">
              &nbsp; Why Choose RiceArc?
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">That Delivers</span>
          </h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We don't just build websites and applications – we create digital
            experiences that drive results and help your business thrive in the
            digital landscape.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -15,
                rotateY: 5,
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              className="group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reason.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Static Icon */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-3xl flex items-center justify-center shadow-2xl mx-auto`}
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 text-center">
                  {reason.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 text-center">
                  {reason.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}
              ></div>

              {/* 3D Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            </motion.div>
          ))}
        </div>

        {/* 3D CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center"
        >
          <motion.div
            className="relative max-w-5xl mx-auto"
            whileHover={{
              scale: 1.02,
              rotateX: 5,
              transition: { duration: 0.3 },
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {/* 3D Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-xl transform rotate-1"></div>

            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-12 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
              {/* Subtle Glow Icon */}
              <motion.div
                initial={{ opacity: 0.8, scale: 0.95 }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
              >
                <span className="text-4xl">🚀</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ready to Transform
                </span>
                <br />
                Your Digital Presence?
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg max-w-3xl mx-auto">
                Join the growing number of businesses that trust RiceArc to
                deliver exceptional digital solutions that drive real results.
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
                  <span className="relative z-10">
                    Start Your Project Today
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
