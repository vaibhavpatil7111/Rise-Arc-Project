import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Rocket, TrendingUp, Star, Heart } from "lucide-react";
import useCountUp from "../../hooks/useCountUp";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Count-up animations for stats
  const happyClients = useCountUp(10, 2000);
  const projectsCompleted = useCountUp(25, 2500);
  const clientSatisfaction = useCountUp(100, 2000);

  const stats = [
    { number: "10+", label: "Happy Clients", icon: Heart, count: happyClients },
    { number: "25+", label: "Projects Completed", icon: Star, count: projectsCompleted },
    { number: "100%", label: "Client Satisfaction", icon: TrendingUp, count: clientSatisfaction },
  ];

  // Start count-up animations when section is in view
  useEffect(() => {
    if (isInView) {
      happyClients.startAnimation();
      projectsCompleted.startAnimation();
      clientSatisfaction.startAnimation();
    }
  }, [isInView]);

  const features = [
    {
      icon: Award,
      title: "Quality First",
      desc: "Every project meets the highest standards of code quality and design excellence.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Client-Focused",
      desc: "Your success is our priority. We work closely with you throughout the entire process.",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Future-Ready",
      desc: "We use modern technologies that scale with your business and adapt to future needs.",
      gradient: "from-green-400 to-blue-500",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-block mb-6"
          >
            ✨ &nbsp;
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold">
              About RiceArc
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Excellence</span>
          </h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We're a premium freelance digital agency specializing in modern web
            solutions. Our mission is to help businesses thrive in the digital
            landscape with cutting-edge technology and exceptional design.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.7 + index * 0.2,
                duration: 0.6,
                type: "spring",
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                <motion.h3
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {index === 0 ? `${stat.count.count}+` : index === 1 ? `${stat.count.count}+` : `${stat.count.count}%`}
                </motion.h3>

                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>

            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Reliable. Modern.
                </span>
                <br />
                Results-Driven.
              </h3>

              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  At RiceArc, we combine technical expertise with creative
                  vision to deliver digital solutions that not only look
                  exceptional but perform flawlessly. Every project is crafted
                  with attention to detail, modern best practices, and a focus
                  on your business goals.
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  From responsive websites to AI-powered chatbots, we leverage
                  the latest technologies to ensure your digital presence stands
                  out in today's competitive market.
                </p>

                <motion.div
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      This Year's Achievement
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      10+ Happy Clients with Premium Service Delivery
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="space-y-6"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 flex items-start space-x-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
