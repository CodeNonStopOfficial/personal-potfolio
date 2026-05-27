'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  const text = 'LOADING'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative flex flex-col items-center gap-8">
        
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            type: 'spring',
            stiffness: 120,
          }}
          className="
            w-28 h-28
            md:w-32 md:h-32
            rounded-full
            border-4 border-blue-500
            flex items-center justify-center
            shadow-[0_0_40px_rgba(59,130,246,0.7)]
          "
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'linear',
            }}
            className="
              w-16 h-16
              md:w-20 md:h-20
              border-4 border-t-transparent
              border-blue-400
              rounded-full
            "
          />
        </motion.div>

        {/* Animated Text */}
        <div className="flex items-center gap-1 md:gap-2">
          {text.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.6,
              }}
              className="
                text-3xl
                md:text-5xl
                font-bold
                tracking-[6px]
                text-white
              "
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-96 h-2 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            }}
            className="w-1/2 h-full bg-blue-500 rounded-full"
          />
        </div>

        {/* Small Text */}
        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-zinc-400 text-sm md:text-base tracking-widest"
        >
          Please wait...
        </motion.p>
      </div>
    </div>
  )
}