import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120c0a] via-[#120c0a]/80 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-5 pt-28 pb-20"
      >
        <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm">
          Fine Dining · Pakistani & Continental
        </p>
        <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight max-w-3xl">
          Taste the Journey of <span className="text-amber-400">Spices</span>
        </h1>
        <p className="mt-6 text-lg text-stone-300 max-w-xl">
          Handcrafted dishes, slow-cooked flavors and a warm atmosphere. Order online or reserve your table in seconds.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#menu" className="px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold transition">
            View Menu
          </a>
          <a href="#reservation" className="px-7 py-3.5 rounded-full border border-stone-500 hover:border-amber-400 font-bold transition">
            Reserve a Table
          </a>
        </div>
      </motion.div>
    </section>
  )
}