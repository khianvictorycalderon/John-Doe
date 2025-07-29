import { useEffect } from "react";
import About from "./static_components/about";
import DarkVeil from "./static_components/DarkVeil/DarkVeil";
import Footer from "./static_components/footer";
import Genre from "./static_components/genre";
import Hero from "./static_components/hero";
import HireMe from "./static_components/hire";
import Navbar from "./static_components/navbar";
import Songs from "./static_components/songs";
import Tours from "./static_components/tours";
import { slideToID } from "./Utility";

export default function App() {

  useEffect(() => {
    alert("This website is for demonstration purposes only and does not represent a real person. Any resemblance to actual individuals is purely coincidental.");
  }, []);

  return (
    <div className="text-gray-50">
      <DarkVeil/>

      <Navbar/>

      <Hero OnHire={() => slideToID("hire")}/>

      <div id="songs"/>
      <Songs/>

      <div id="genre"/>
      <Genre/>

      <div id="tours"/>
      <Tours/>

      <div id="about"/>
      <About/>

      <div id="hire"/>
      <HireMe/>

      <Footer/>
    </div>
  )
}