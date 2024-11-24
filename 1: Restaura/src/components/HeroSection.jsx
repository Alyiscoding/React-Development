import React from 'react'
import heroVideo from "../assets/hero.mp4"
import logo from "../assets/logo.png"
import hero_image from "../assets/hero.jpeg"
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div>
      <section className=' relative flex h-screen items-center justify-center'>
        <div className=' absolute inset-0 -z-20 h-full w-full overflow-hidden'>
            <video src={heroVideo} className=' h-full w-full object-cover ' muted autoPlay loop playsInline poster={hero_image}></video>
        </div>
        <div className=' absolute inset-0 -z-10 bg-gradient-to-b from-transparent from 70% to-black'>

        </div>
        <div className=' relative z-20 flex h-screen flex-col justify-end pb-20'>
            <motion.img 
            initial = {{opacity: 0 , y:50}}
            animate = {{opacity: 1 , y:0}}
            transition = {{duration:0.5}}
            src={logo} alt="Reasaura" className='w-full p-4'/>
            <p className='p-4 text-lg tracking-tighter text-white'> Pakistan</p>
        </div>

      </section>
    </div>
  )
}

export default HeroSection
