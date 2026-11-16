import { useState, useEffect } from 'react'
import { Menu, X, UtensilsCrossed } from 'lucide-react'

export default function Navbar() {
  // scrolled: true jab user page scroll kare
  const [scrolled, setScrolled] = useState(false)
  // open: mobile menu khula ya band
  const [open, setOpen] = useState(false)

  // Scroll event sun kar scrolled state update karna
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Menu', 'Reservation', 'Gallery', 'Contact']

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#120c0a]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <UtensilsCrossed className="text-amber-400" size={26} />
          <span className="text-xl font-extrabold tracking-tight">
            Spice<span className="text-amber-400">Route</span>
          </span>
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-stone-300">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-amber-400 transition">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#reservation"
            className="hidden sm:inline-block px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold text-sm transition"
          >
            Book a Table
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-[#120c0a] px-5 pb-5 space-y-3 text-stone-200">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-2">
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}