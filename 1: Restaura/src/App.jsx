import React from 'react'
import HeroSection from './components/HeroSection'
import NavbarSection from './components/NavbarSection'
import Dishes from './components/Dishes'
import About from './components/About'
import Mission from './components/Mission'
import Expertise from './components/Expertise'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import DishesCard from './components/DishesCard'

const App = () => {
  return (
    <main className=' overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection/>
      <NavbarSection/>
      <Dishes/>
      <About/>
      <Mission/>
      <Expertise/>
      <Review/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
