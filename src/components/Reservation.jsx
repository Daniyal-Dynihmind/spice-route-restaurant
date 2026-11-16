import { useState } from 'react'
import { CalendarDays, Clock, Users, CheckCircle } from 'lucide-react'

// Time slots shown in the dropdown (restaurant opening hours)
const timeSlots = [
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM',
]

// Empty form state, used for the initial value and for reset
const emptyForm = { name: '', phone: '', date: '', time: '', guests: '2', notes: '' }

export default function Reservation() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Update one field of the form when the user types
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear the error for this field as the user fixes it
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  // Check all required fields. Returns true if the form is valid
  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name.'
    if (!/^[0-9+\s-]{7,}$/.test(form.phone)) newErrors.phone = 'Please enter a valid phone number.'
    if (!form.date) newErrors.date = 'Please select a date.'
    if (!form.time) newErrors.time = 'Please select a time.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    // In a real project, send this data to a backend or email service.
    // For now we only show the success message.
    console.log('Reservation request:', form)
    setSubmitted(true)
  }

  // Start a new reservation after the success message
  const handleNew = () => {
    setForm(emptyForm)
    setErrors({})
    setSubmitted(false)
  }

  // Show success message instead of the form after submit
  if (submitted) {
    return (
      <section id="reservation" className="section-bg-warm py-24 px-5">
        <div className="max-w-xl mx-auto text-center bg-stone-900/70 border border-stone-800 rounded-3xl p-10">
          <CheckCircle className="mx-auto text-emerald-400" size={56} />
          <h2 className="mt-5 text-3xl font-extrabold">Reservation Requested!</h2>
          <p className="mt-3 text-stone-400">
            Thank you, <span className="text-amber-400 font-semibold">{form.name}</span>. We have received your request
            for <span className="font-semibold">{form.guests} guest(s)</span> on{' '}
            <span className="font-semibold">{form.date}</span> at <span className="font-semibold">{form.time}</span>.
            We will confirm shortly on your phone.
          </p>
          <button
            onClick={handleNew}
            className="mt-8 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold transition"
          >
            Make Another Reservation
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="reservation" className="section-bg-warm py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm">Reservation</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Reserve Your Table</h2>
          <p className="mt-4 text-stone-400">Choose your date, time and party size. We will confirm your booking.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-stone-900/60 backdrop-blur-md border border-amber-500/20 rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-6 shadow-2xl shadow-black/40">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 outline-none"
            />
            {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2">Phone *</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+92 300 0000000"
              className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 outline-none"
            />
            {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Date */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
              <CalendarDays size={16} className="text-amber-400" /> Date *
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 outline-none"
            />
            {errors.date && <p className="text-rose-400 text-xs mt-1">{errors.date}</p>}
          </div>

          {/* Time */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
              <Clock size={16} className="text-amber-400" /> Time *
            </label>
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 outline-none"
            >
              <option value="">Select a time</option>
              {timeSlots.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.time && <p className="text-rose-400 text-xs mt-1">{errors.time}</p>}
          </div>

          {/* Guests */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
              <Users size={16} className="text-amber-400" /> Guests
            </label>
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
              ))}
            </select>
          </div>

          {/* Notes (full width) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">Special requests (optional)</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Birthday, allergies, seating preference..."
              className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-lg transition">
              Confirm Reservation
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}