export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">John Doe</h2>
          <p className="text-gray-400 text-sm">
            Music that blends emotion, sound, and storytelling. Dive into the world of electronic vibes and raw expression.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            John Doe is a fictional artist and does not represent a real person. Any resemblance to actual persons is purely coincidental.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Demo website created by{" "}
            <a href="https://khian.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              Khian Victory D. Calderon
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => alert("Home clicked")} className="hover:text-white">Home</button>
            </li>
            <li>
              <button onClick={() => alert("About clicked")} className="hover:text-white">About</button>
            </li>
            <li>
              <button onClick={() => alert("Tours clicked")} className="hover:text-white">Tours</button>
            </li>
            <li>
              <button onClick={() => alert("Hire clicked")} className="hover:text-white">Hire Me</button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Note</h3>
          <p className="text-sm text-gray-400">
            All content, including music, photos, and events, is fictional and used for demonstration purposes only.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <button onClick={() => alert("Facebook clicked")} className="hover:text-white">Facebook</button>
            </li>
            <li>
              <button onClick={() => alert("Instagram clicked")} className="hover:text-white">Instagram</button>
            </li>
            <li>
              <button onClick={() => alert("YouTube clicked")} className="hover:text-white">YouTube</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </div>
    </footer>
  );
}
