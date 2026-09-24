import React from 'react'
import Hero from "../component/Header/Hero/Hero";
import About from "../component/Header/About/About";
import Testimony from "../component/Header/Testimony/Testimony";
import Cta from "../component/Header/Cta/Cta"; 

const LandingPageScreen = () => {
  return (
    <div>
      <Hero />
      <About /> 
      <Testimony />  
      <Cta />   
      
    </div>
  )
}

export default LandingPageScreen
