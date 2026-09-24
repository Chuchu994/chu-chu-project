import React from "react";
import LandingPageScreen from "./Screen/LandingPageScreen";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import ContactUsPageScreen from "./Screen/ContactUsPageScreen";
import ContactPageScreen from "./Screen/ContactPageScreen";
import ServicePageScreen from "./Screen/ServicePageScreen";
import GetStartedPageScreen from "./Screen/GetStartedPageScreen";



const App = () => {
  return (
    <div>
      <Header />

     <Routes>
      <Route path="/" element={<LandingPageScreen />} />
      <Route path="/contact-us" element={<ContactUsPageScreen/>} />
      <Route path="/Contact" element={<ContactPageScreen/>}/>
      <Route path="/Service" element={<ServicePageScreen/>}/>
      <Route path="/GetStarted" element={<GetStartedPageScreen/>}/>


     </Routes>
      
      
    </div>
  );
};

export default App;
