import { useState } from 'react'
import { slideToID, useOnScrollAt } from '../Utility'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [navbarBG, setNavbarBG] = useState<string>("bg-transparent");
  useOnScrollAt(
    "hero",
    () => {
      if (window.innerWidth >= 768) { // md: breakpoint
        setNavbarBG("bg-transparent");
      } else {
        setNavbarBG("bg-transparent"); // mobile stays transparent always
      }
    },
    () => {
      if (window.innerWidth >= 768) {
        setNavbarBG("bg-black");
      } else {
        setNavbarBG("bg-transparent"); // mobile stays transparent always
      }
    }
  );

  const buttons = [
    {
      Label: "Songs",
      OnClick: () => slideToID("songs")
    },
    {
      Label: "Genre",
      OnClick: () => slideToID("genre")
    },
    {
      Label: "Tours",
      OnClick: () => alert("Clicked")
    },
    {
      Label: "About Me",
      OnClick: () => alert("Clicked")
    },
  ]

  return (
    <header className="text-white">
      <nav className={`fixed top-0 left-0 w-full ${navbarBG} text-white z-40 p-4`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="hidden md:flex items-center gap-2">
            <span className="text-lg font-bold">John Doe</span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {buttons.map((item, index) => (
              <button
                key={index}
                onClick={item.OnClick}
                className="font-medium p-2 rounded hover:bg-white hover:text-black hover:cursor-pointer"
              >
                {item.Label}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden fixed top-0 right-0 mr-4 mt-2 z-50">
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-white text-2xl font-bold">
            ☰
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white p-4 overflow-y-auto h-[50vh]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold">John Doe</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white">
              ✕
            </button>
          </div>

          <div className="space-y-6 pt-6 border-t border-white/20">
            {buttons.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.OnClick()
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 rounded hover:bg-white hover:text-black text-sm font-semibold"
              >
                {item.Label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
