import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

// Customer reviews. Replace with real reviews from your customers.
const reviews = [
  { id: 1, name: 'Ayesha Khan', rating: 5, text: 'The biryani was absolutely amazing. Perfect spice level and warm service.' },
  { id: 2, name: 'Omar Siddiqui', rating: 5, text: 'Booked a table online in seconds. The Mutton Karahi is a must-try!' },
  { id: 3, name: 'Sara Ahmed', rating: 4, text: 'Lovely ambience for family dinners. The desserts were a great finish.' },
]

export default function Reviews() {
  return (
    <section className="section-bg-warm py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm">Reviews</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">What Our Guests Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
  <motion.div
    key={r.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: i * 0.15 }}
    className="bg-stone-900/70 border border-stone-800 rounded-2xl p-7 hover:-translate-y-1 hover:border-amber-500/40 transition duration-300"
  >
    <Quote className="text-amber-500/60" size={32} />
    <p className="mt-4 text-stone-300 leading-relaxed">{r.text}</p>

    <div className="mt-6 flex items-center justify-between">
      <p className="font-bold">{r.name}</p>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            size={16}
            className={idx < r.rating ? 'text-amber-400 fill-amber-400' : 'text-stone-700'}
          />
        ))}
      </div>
    </div>
  </motion.div>
))}
        </div>
      </div>
    </section>
  )
}