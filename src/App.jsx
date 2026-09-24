import React from "react";
import Header from "./component/Header/Header";
import Hero from "./component/Header/Hero/Hero";
import About from "./component/Header/About/About";
import Testimony from "./component/Header/Testimony/Testimony";
import Cta from "./component/Header/Cta/Cta";


const App = () => {
  return (
    <div>
      <Header /> 
      <Hero />
      <About /> 
      <Testimony />  
      <Cta />   
      
    </div>
  );
};

export default App;
