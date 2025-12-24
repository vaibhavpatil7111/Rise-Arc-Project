import React from 'react'
import { motion } from 'framer-motion'

const ChristmasTheme = () => {
  // Generate snowflakes with varied sizes and speeds
  const snowflakes = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 4 + Math.random() * 6,
    size: 8 + Math.random() * 12,
    opacity: 0.3 + Math.random() * 0.7
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Professional Falling Snow */}
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute text-white"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.3))'
          }}
          animate={{
            y: ['-10vh', '110vh'],
            x: [0, Math.sin(flake.id) * 30],
            rotate: [0, 360]
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          ❄️
        </motion.div>
      ))}

      {/* Santa with Sleigh - Professional Animation */}
      <motion.div
        className="absolute top-16 text-4xl md:text-6xl"
        style={{
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
        }}
        animate={{
          x: ['-300px', 'calc(100vw + 300px)']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 30
        }}
      >
        🎅🛷🦌
      </motion.div>

      {/* Professional Snowman */}
      <motion.div
        className="absolute bottom-8 left-8 text-6xl md:text-8xl"
        style={{
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))'
        }}
        animate={{
          rotate: [-3, 3, -3],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        ⛄
      </motion.div>

      {/* Elegant Gift Boxes */}
      <motion.div
        className="absolute bottom-8 right-16 text-3xl md:text-5xl"
        style={{
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))'
        }}
        animate={{
          y: [-8, 8, -8],
          rotate: [-1, 1, -1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        🎁
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-32 text-2xl md:text-4xl"
        style={{
          filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.1))'
        }}
        animate={{
          y: [8, -8, 8],
          rotate: [1, -1, 1]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      >
        🎁
      </motion.div>

      {/* Christmas Tree - Centerpiece */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-5xl md:text-7xl"
        style={{
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))'
        }}
        animate={{
          scale: [1, 1.03, 1],
          rotate: [-0.5, 0.5, -0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        🎄
      </motion.div>

      {/* Subtle Christmas Accents */}
      <motion.div
        className="absolute top-1/3 right-8 text-2xl md:text-3xl"
        animate={{
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        🔔
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-4 text-xl md:text-2xl"
        animate={{
          rotate: [-8, 8, -8],
          y: [-3, 3, -3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        🍭
      </motion.div>

      {/* Christmas Stars */}
      <motion.div
        className="absolute top-1/4 left-1/3 text-xl md:text-2xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute top-1/5 right-1/3 text-lg md:text-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      >
        ✨
      </motion.div>
    </div>
  )
}

export default ChristmasTheme