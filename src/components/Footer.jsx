import { UtensilsCrossed, MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-stone-800 bg-[#0c0807] py-16 px-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand and short intro */}
        <div>
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="text-amber-400" size={24} />
            <span className="text-xl font-extrabold">
              Spice<span className="text-amber-400">Route</span>
            </span>
          </div>
          <p className="mt-4 text-stone-400 text-sm leading-relaxed">
            Authentic flavors, slow-cooked with love. Pakistani and continental dishes served in a warm, relaxed setting.
          </p>
        </div>

        {/* Contact details */}
        <div className="space-y-4 text-sm text-stone-300">
          <p className="font-bold text-white text-base mb-2">Contact</p>
          <p className="flex items-start gap-3"><MapPin size={18} className="text-amber-400 shrink-0" /> 12 Food Street, Clifton, Karachi</p>
          <p className="flex items-center gap-3"><Phone size={18} className="text-amber-400" /> +92 300 0000000</p>
          <p className="flex items-center gap-3"><Mail size={18} className="text-amber-400" /> hello@spiceroute.com</p>
        </div>

        {/* Opening hours */}
        <div className="space-y-4 text-sm text-stone-300">
          <p className="font-bold text-white text-base mb-2">Opening Hours</p>
          <p className="flex items-center gap-3"><Clock size={18} className="text-amber-400" /> Mon to Thu: 12 PM – 11 PM</p>
          <p className="flex items-center gap-3"><Clock size={18} className="text-amber-400" /> Fri to Sun: 12 PM – 12 AM</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-stone-800 text-center text-xs text-stone-500">
        © 2026 Spice Route Restaurant. Designed and built by Daniyal Dynihmind.
      </div>
    </footer>
  )
}