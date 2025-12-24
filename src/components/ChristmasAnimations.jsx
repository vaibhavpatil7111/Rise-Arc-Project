import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ChristmasAnimations = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes = [];
      for (let i = 0; i < 50; i++) {
        flakes.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 4,
          size: 2 + Math.random() * 4,
          opacity: 0.3 + Math.random() * 0.7,
        });
      }
      setSnowflakes(flakes);
    };

    generateSnowflakes();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Falling Snow */}
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
          }}
          animate={{
            y: ['0vh', '100vh'],
            x: [0, Math.sin(flake.id) * 50],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Santa Sleigh Animation */}
      <motion.div
        className="absolute top-20 -left-32"
        animate={{
          x: ['0vw', '110vw'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatDelay: 30,
          ease: 'linear',
        }}
      >
        <div className="relative">
          <svg width="120" height="60" viewBox="0 0 120 60" className="drop-shadow-lg">
            <path
              d="M20 40 Q15 35 20 30 L80 30 Q85 35 80 40 L75 45 L25 45 Z"
              fill="#8B4513"
              stroke="#654321"
              strokeWidth="1"
            />
            <circle cx="50" cy="25" r="8" fill="#FFDBAC" />
            <path d="M42 20 Q45 15 50 20 Q55 15 58 20" fill="#DC143C" />
            <circle cx="47" cy="23" r="1" fill="#000" />
            <circle cx="53" cy="23" r="1" fill="#000" />
            <path d="M48 26 Q50 28 52 26" stroke="#000" strokeWidth="0.5" fill="none" />
            <rect x="45" y="30" width="10" height="15" fill="#DC143C" rx="2" />
            <rect x="46" y="32" width="8" height="3" fill="#FFF" />
            <ellipse cx="90" cy="35" rx="8" ry="4" fill="#8B4513" />
            <circle cx="95" cy="32" r="3" fill="#8B4513" />
            <path d="M93 28 L95 25 M97 28 L99 25" stroke="#654321" strokeWidth="1" />
            <circle cx="96" cy="31" r="0.5" fill="#000" />
          </svg>
          
          <motion.div
            className="absolute -right-8 top-4"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            ✨
          </motion.div>
        </div>
      </motion.div>

      {/* Christmas Decorations */}
      <div className="absolute top-10 left-10">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="text-4xl opacity-20"
        >
          🎄
        </motion.div>
      </div>

      <div className="absolute top-20 right-20">
        <motion.div
          animate={{
            rotate: [0, -10, 10, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="text-3xl opacity-20"
        >
          🎁
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-20">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="text-3xl opacity-20"
        >
          ⛄
        </motion.div>
      </div>

      <div className="absolute bottom-32 right-16">
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="text-2xl opacity-20"
        >
          🔔
        </motion.div>
      </div>

      {/* Christmas Lights Border */}
      <div className="absolute top-0 left-0 w-full h-2">
        <motion.div
          className="flex justify-around h-full"
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-red-400' : i % 3 === 1 ? 'bg-green-400' : 'bg-yellow-400'
              }`}
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ChristmasAnimations;