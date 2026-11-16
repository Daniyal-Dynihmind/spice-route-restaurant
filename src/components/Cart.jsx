import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'

// Replace with your restaurant's WhatsApp number (country code, no + or spaces)
const WHATSAPP_NUMBER = '923000000000'

export default function Cart({ isOpen, onClose, cart, onIncrease, onDecrease, onRemove, onClear }) {
  // Total price of all items in the cart
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Build a WhatsApp message with all items and open WhatsApp
  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return

    const lines = cart.map(
      (item) => `- ${item.name} x${item.quantity} = Rs ${item.price * item.quantity}`
    )
    const message = `Hello Spice Route! I would like to order:\n${lines.join('\n')}\n\nTotal: Rs ${total}`

    // encodeURIComponent makes the text safe for a URL
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Dark background overlay. Clicking it closes the cart */}
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 bg-black/60 z-50" />
      )}

      {/* Cart drawer that slides in from the right */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#1a120f] border-l border-stone-800 z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-800">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag className="text-amber-400" size={22} /> Your Order
          </h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-stone-800" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Cart items list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 && (
            <p className="text-center text-stone-500 mt-16">Your cart is empty. Add some delicious dishes!</p>
          )}

          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 bg-stone-900/70 border border-stone-800 rounded-2xl p-3">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />

              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-2">
                  <p className="font-semibold truncate">{item.name}</p>
                  <button onClick={() => onRemove(item.id)} className="text-stone-500 hover:text-rose-400" aria-label="Remove item">
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-amber-400 text-sm mt-1">Rs {item.price}</p>

                {/* Quantity controls */}
                <div className="flex items-center gap-3 mt-3">
                  <button onClick={() => onDecrease(item.id)} className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center">
                    <Minus size={14} />
                  </button>
                  <span className="font-bold w-6 text-center">{item.quantity}</span>
                  <button onClick={() => onIncrease(item.id)} className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center">
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer: total and actions */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-stone-800 space-y-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-amber-400">Rs {total}</span>
            </div>
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-900 font-bold transition"
            >
              Order on WhatsApp
            </button>
            <button onClick={onClear} className="w-full py-2 text-sm text-stone-500 hover:text-rose-400">
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  )
}