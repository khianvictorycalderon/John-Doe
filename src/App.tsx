import About from "./static_components/about";
import DarkVeil from "./static_components/DarkVeil/DarkVeil";
import Genre from "./static_components/genre";
import Hero from "./static_components/hero";
import HireMe from "./static_components/hire";
import Navbar from "./static_components/navbar";
import Songs from "./static_components/songs";
import Tours from "./static_components/tours";

export default function App() {
  return (
    <div className="text-gray-50">
      <DarkVeil/>

      <Navbar/>

      <Hero OnHire={() => alert("Hiring...")}/>

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
    </div>
  )
}