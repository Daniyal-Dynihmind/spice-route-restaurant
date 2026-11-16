import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Reservation from './components/Reservation'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App() {
  // Cart items: each item has id, name, price, image and quantity
  const [cart, setCart] = useState([])
  // Whether the cart drawer is open
  const [cartOpen, setCartOpen] = useState(false)

  // Add a dish. If it already exists, just increase its quantity
  const handleAdd = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id)
      if (exists) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  // Increase quantity of one item
  const handleIncrease = (id) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)))
  }

  // Decrease quantity. Remove the item if quantity would drop below 1
  const handleDecrease = (id) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    )
  }

  // Remove an item completely
  const handleRemove = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  // Empty the whole cart
  const handleClear = () => setCart([])

  // Total number of items (for the floating cart button badge)
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu onAdd={handleAdd} />
      <Reservation />
      <Gallery />
      <Reviews />
      <Footer />

      {/* Floating cart button, visible only when the cart has items */}
      {cartCount > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold shadow-xl"
        >
          <ShoppingBag size={20} /> Cart ({cartCount})
        </button>
      )}

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
        onClear={handleClear}
      />
    </div>
  )
}