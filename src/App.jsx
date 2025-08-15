import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Feedback from "./Pages/Feedback";
import SiteMap from "./Pages/SiteMap";
import LivingRoom from "./Pages/LivingRoom";
import Kitchen from "./Pages/Kitchen";
import Bedroom from "./Pages/Bedroom";
import Bathroom from "./Pages/Bathroom";
import Contemporarystyle from "./Pages/Contemporarystyle";
import Elegantstyle from "./Pages/Elegantstyle";
import Contact from "./Pages/Contact";
import Sofas from "./Pages/Furniture/sofas";
import Table from "./Pages/Furniture/Table";
import Bed from "./Pages/Furniture/Bed";
import Stroage from "./Pages/Furniture/Stroage";
import Chairs from "./Pages/Furniture/Chairs";
import Backsplashes from "./Pages/Kitchen/Backsplashes";
import Cabinets from "./Pages/Kitchen/Cabinets";
import Counter from "./Pages/Kitchen/Counter";
import KitchenIslands from "./Pages/Kitchen/KitchenIslands";
import Sinksandfaucets from "./Pages/Kitchen/Sinksandfaucets";
import Ceiling from "./Pages/Lighting/Ceiling";
import Walllights from "./Pages/Lighting/Walllights";
import Floorlamps from "./Pages/Lighting/Floorlamps";
import Tablelamp from "./Pages/Lighting/Tablelamp";
import Outdoorlighting from "./Pages/Lighting/Outdoorlighting";
import Curtains from "./Pages/Decor/Curtains";
import Cushions from "./Pages/Decor/Cushions";
import Rugs from "./Pages/Decor/Rugs";
import Vases from "./Pages/Decor/Vases";
import Mirrors from "./Pages/Decor/Mirrors";
import Bathrooms from "./Pages/Bathrooms/Bathrooms";
import Mirror from "./Pages/Bathrooms/Mirror";
import Toilets from "./Pages/Bathrooms/Toilets";
import Bathtub from "./Pages/Bathrooms/Bathtub";
import Vanities from "./Pages/Bathrooms/Vanities";









function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Feedback" element={<Feedback />} />
               <Route path="SiteMap" element={<SiteMap />} />
                 <Route path="Contact" element={<Contact />} />
                  <Route path="LivingRoom" element={<LivingRoom />} />
                   <Route path="Kitchen" element={<Kitchen />} />
                    <Route path="Bedroom" element={<Bedroom />} />
                      <Route path="Bathroom" element={<Bathroom />} />
                      <Route path="Elegantstyle" element={<Elegantstyle />} />
                      <Route path="sofas" element={<Sofas />} />
                        <Route path="Table" element={<Table />} />
                         <Route path="Chairs" element={<Chairs />} />
                            <Route path="Bed" element={<Bed />} />
                             <Route path="Stroage" element={<Stroage />} />
                             <Route path="Backsplashes" element={<Backsplashes />} />
                              <Route path="Cabinets" element={<Cabinets />} />
                                <Route path="Counter" element={<Counter />} />
                                <Route path="KitchenIslands" element={<KitchenIslands />} />
                                 <Route path="Sinksandfaucets" element={<Sinksandfaucets />} />
                                  <Route path="Ceiling" element={<Ceiling />} />
                                   <Route path="Walllights" element={<Walllights />} />
                                    <Route path="Floorlamps" element={<Floorlamps />} />
                                     <Route path="Tablelamp" element={<Tablelamp />} />
                                      <Route path="Outdoorlighting" element={<Outdoorlighting />} />
                          <Route path="Contemporarystyle" element={<Contemporarystyle />} />
                          <Route path="Curtains" element={<Curtains />} />
                          <Route path="Cushions" element={<Cushions />} />
                          <Route path="Mirrors" element={<Mirrors />} />
                          <Route path="Rugs" element={<Rugs />} />
                          <Route path="Vases" element={<Vases />} /> 

                            <Route path="Bathrooms" element={<Bathrooms />} /> 
                            <Route path="Mirror" element={<Mirror />} /> 
                            <Route path="Bathtub" element={<Bathtub />} /> 
                            <Route path="Toilets" element={<Toilets />} /> 
                            <Route path="Vanities" element={<Vanities />} /> 


                      
              

       
              
         
              
               
           
          </Routes>
        </main>
      
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
