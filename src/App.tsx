import DarkVeil from "./DarkVeil/DarkVeil";
import Hero from "./static_components/hero";

export default function App() {
  return (
    <div className="text-gray-50">
      <DarkVeil/>

      <Hero OnLearnMore={() => alert("Learned more...")}/>
    </div>
  )
}