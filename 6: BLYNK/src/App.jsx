import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import Reviews from './Components/Reviews';
import Faqs from './Components/Faqs';
import GetInTouch from './Components/GetInTouch';
// import Space from './Components/Space';
import Footer from './Components/Footer';
import Space from './Components/space';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsConditions from './Components/TermsConditions';
import PrivacyPolicy from './Components/PrivacyPolicy';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <About />
            <Features />
            <Pricing />
            <Reviews />
            <Faqs />
            <GetInTouch />
            <Space />
          </>
        }
        />
        <Route
          path='/terms'
          element={<TermsConditions/>}
        />
        <Route
          path='/privacy'
          element={<PrivacyPolicy/>}
        />
      </Routes>
      <Footer />


    </Router>
  );
}

export default App;
