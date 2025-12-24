import React from 'react'
import { motion } from 'framer-motion'

const ChristmasTheme = () => {
  // Generate snowflakes
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 2 + Math.random() * 4
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Falling Snow */}
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute text-white opacity-80"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
          }}
          animate={{
            y: ['0vh', '100vh'],
            x: [0, Math.sin(flake.id) * 50],
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

      {/* Santa with Sleigh */}
      <motion.div
        className="absolute top-20 text-6xl"
        animate={{
          x: ['-200px', 'calc(100vw + 200px)']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        🎅🛷
      </motion.div>

      {/* Snowman */}
      <motion.div
        className="absolute bottom-10 left-10 text-8xl"
        animate={{
          rotate: [-5, 5, -5],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        ⛄
      </motion.div>

      {/* Gift Boxes */}
      <motion.div
        className="absolute bottom-10 right-20 text-5xl"
        animate={{
          y: [-10, 10, -10],
          rotate: [-2, 2, -2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        🎁
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-40 text-4xl"
        animate={{
          y: [10, -10, 10],
          rotate: [2, -2, 2]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      >
        🎁
      </motion.div>

      {/* Christmas Tree */}
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-7xl"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [-1, 1, -1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        🎄
      </motion.div>

      {/* Snow Globes */}
      <motion.div
        className="absolute top-1/3 right-10 text-4xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        🔮
      </motion.div>

      {/* Candy Canes */}
      <motion.div
        className="absolute top-1/2 left-5 text-3xl"
        animate={{
          rotate: [-10, 10, -10],
          y: [-5, 5, -5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        🍭
      </motion.div>

      {/* Christmas Bells */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-3xl"
        animate={{
          rotate: [-15, 15, -15],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        🔔
      </motion.div>
    </div>
  )
}

export default ChristmasTheme