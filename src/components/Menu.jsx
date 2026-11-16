import { useState, useMemo } from 'react'
import { Search, Plus, Flame, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { categories, menuItems } from '../data/menu'

export default function Menu({ onAdd }) {
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')
  // Id of the card that was just added (for the success animation)
  const [addedId, setAddedId] = useState(null)

  // Filter by category and search text
  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCategory = active === 'All' || item.category === active
      const matchSearch = item.name.toLowerCase().includes(query.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [active, query])

  // Add to cart and show a short "Added" animation on the button
  const handleAdd = (item) => {
    onAdd(item)
    setAddedId(item.id)
    setTimeout(() => setAddedId(null), 1200)
  }

  return (
    <section id="menu" className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm">Our Menu</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Dishes Made With Love</h2>
        </motion.div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dishes..."
            className="w-full pl-11 pr-4 py-3 rounded-full bg-stone-900 border border-stone-800 focus:border-amber-500 outline-none"
          />
        </div>

        {/* Category tabs with a sliding highlight */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition ${
                active === c ? 'text-stone-900' : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="tab-highlight"
                  className="absolute inset-0 rounded-full bg-amber-500"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        {/* Food cards */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-stone-900/70 border border-stone-800 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/10 transition duration-300"
              >
                {/* Image / GIF area. The GIF plays on hover */}
                <div className="relative h-56 overflow-hidden bg-stone-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                  {item.popular && (
                    <span className="absolute top-3 left-3 flex items-center gap-1 bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
                      <Flame size={14} /> Popular
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <span className="text-amber-400 font-bold whitespace-nowrap">Rs {item.price}</span>
                  </div>
                  <p className="text-stone-400 text-sm mt-2">{item.description}</p>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAdd(item)}
                    className={`mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-full font-semibold transition ${
                      addedId === item.id
                        ? 'bg-emerald-500 text-stone-900'
                        : 'bg-amber-500 hover:bg-amber-400 text-stone-900'
                    }`}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {addedId === item.id ? (
                        <motion.span key="added" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                          <Check size={18} /> Added!
                        </motion.span>
                      ) : (
                        <motion.span key="add" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                          <Plus size={18} /> Add to Cart
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-stone-500 mt-12">No dishes found. Try another search.</p>
        )}
      </div>
    </section>
  )
}