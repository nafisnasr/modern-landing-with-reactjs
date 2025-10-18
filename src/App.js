import React from 'react'
import Navbar from './Modules/Navbar/Navbar';
import Header from './Components/Header/Header';
import Benefits from './Components/Benefits/Benefits';
import Fullimg from './Components/Fullimg/Fullimg';
import Steps from './Components/Steps/Steps';
import Features from './Components/AllFeatures/Features';
import Area from './Components/Area/Area';
import Footer from './Modules/Footer/Footer';
import TrustedIcons from './Components/TrustedIcons/TrustedIcons';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Benefits />
      <Fullimg img="/full-img-home.jpg" />
      <Steps />
      <Features />
      <Area />
      <Fullimg img="/second-full-img.jpg" />
      <TrustedIcons />
      <Footer />
    </>
  )
}

export default App