import { useState, useMemo } from 'react'
import { Search, Plus, Flame } from 'lucide-react'
import { categories, menuItems } from '../data/menu'

export default function Menu({ onAdd }) {
  // Currently selected category
  const [active, setActive] = useState('All')
  // Text typed in the search box
  const [query, setQuery] = useState('')

  // Filter dishes by category and search text.
  // useMemo recalculates only when active or query changes.
  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCategory = active === 'All' || item.category === active
      const matchSearch = item.name.toLowerCase().includes(query.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [active, query])

  return (
    <section id="menu" className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm">Our Menu</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Dishes Made With Love</h2>
        </div>

        {/* Search box */}
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

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                active === c
                  ? 'bg-amber-500 text-stone-900'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Food cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-stone-900/70 border border-stone-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-amber-500/50 transition duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                {item.popular && (
                  <span className="absolute top-3 left-3 flex items-center gap-1 bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
                    <Flame size={14} /> Popular
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <span className="text-amber-400 font-bold">Rs {item.price}</span>
                </div>
                <p className="text-stone-400 text-sm mt-2">{item.description}</p>

                <button
                  onClick={() => onAdd(item)}
                  className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold transition"
                >
                  <Plus size={18} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-stone-500 mt-12">No dishes found. Try another search.</p>
        )}
      </div>
    </section>
  )
}