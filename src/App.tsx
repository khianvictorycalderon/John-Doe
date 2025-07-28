import DarkVeil from "./static_components/DarkVeil/DarkVeil";
import Hero from "./static_components/hero";
import Navbar from "./static_components/navbar";

export default function App() {
  return (
    <div className="text-gray-50">
      <DarkVeil/>

      <Navbar/>

      <Hero OnHire={() => alert("Learned more...")}/>
    </div>
  )
}