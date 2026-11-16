import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Gallery photos from Unsplash: food, starters, mains, desserts, drinks and dining
const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80', alt: 'Chicken Tikka starter' },
  { id: 2, src: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=900&q=80', alt: 'Mutton Karahi main course' },
  { id: 3, src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80', alt: 'Chicken Biryani' },
  { id: 4, src: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=80', alt: 'Gulab Jamun dessert' },
  { id: 5, src: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=900&q=80', alt: 'Mango Lassi drink' },
  { id: 6, src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80', alt: 'Grilled Salmon' },
]

export default function Gallery() {
  // Index of the photo open in the lightbox (null = closed)
  const [index, setIndex] = useState(null)
  const isOpen = index !== null

  // Keyboard controls and page scroll lock while the lightbox is open
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % photos.length)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const showNext = () => setIndex((i) => (i + 1) % photos.length)
  const showPrev = () => setIndex((i) => (i - 1 + photos.length) % photos.length)

  return (
    <section id="gallery" className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm">Gallery</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">A Glimpse Inside</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative h-56 md:h-64 rounded-2xl overflow-hidden"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox: click background, X or Esc to close */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setIndex(null) }}
            className="absolute top-5 right-5 p-2 rounded-full bg-stone-900 hover:bg-stone-800"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            className="absolute left-4 p-3 rounded-full bg-stone-900 hover:bg-stone-800"
            aria-label="Previous"
          >
            <ChevronLeft size={26} />
          </button>

          <img
            src={photos[index].src}
            alt={photos[index].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
          />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showNext() }}
            className="absolute right-4 p-3 rounded-full bg-stone-900 hover:bg-stone-800"
            aria-label="Next"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  )
}