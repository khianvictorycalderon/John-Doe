import DarkVeil from "./static_components/DarkVeil/DarkVeil";
import Hero from "./static_components/hero";
import Navbar from "./static_components/navbar";
import Songs from "./static_components/songs";

export default function App() {
  return (
    <div className="text-gray-50">
      <DarkVeil/>

      <Navbar/>

      <Hero OnHire={() => alert("Hiring...")}/>

      <div id="songs"/>
      <Songs/>
    </div>
  )
}