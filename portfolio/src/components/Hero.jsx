import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <section className='relative top-0 left-0 h-screen w-full object-cover overflow-hidden bg-charcoal'>
            <video
                autoPlay
                loop
                muted
                playsInline
                className='absolute inset-0 w-full h-full object-cover opacity-70'
            >
                <source src='videos/skate-loop.mp4' type='video/mp4' />
            </video>

            <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"></div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-7xl font-bold tracking-tight"
                >
                    Samuel Jiménez
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-6 text-lg md:text-xl text-silver"
                >
                    Developer · Artistic Roller Skater
                </motion.p>

                {/* dual cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 flex gap-6"
                >

                    <div className="px-8 py-4 rounded-xl border border-white/10 backdrop-blur-md bg-white/5 hover:bg-white/10 transition cursor-pointer">
                        Learn More
                    </div>

                </motion.div>

            </div>
        </section>
    )
}

export default Hero