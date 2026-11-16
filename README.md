# Spice Route | Restaurant Website 🍛

A modern, responsive restaurant website for a Pakistani and continental fine-dining restaurant. Guests can browse a digital menu, add dishes to a cart, send their order on WhatsApp, and reserve a table, all from one smooth single-page site.

**Live Demo:** [https://YOUR-SPICE-ROUTE-LINK.vercel.app/](https://spice-route-restaurant-tan.vercel.app/)

---

## 📌 The Problem

Restaurants often rely on printed menus and phone calls for orders and reservations. Customers cannot easily browse dishes, and the restaurant misses online bookings and orders.

## ✅ The Solution

Spice Route gives the restaurant a complete online presence:
- A digital menu with categories, search and dish images
- A cart with quantity controls and WhatsApp ordering
- A reservation form with validation and a confirmation message
- A photo gallery with a full-screen lightbox
- Guest reviews and opening hours

---

## ✨ Features

- 🍽️ **Digital Menu:** Category tabs (Starters, Mains, Desserts, Drinks), live search, animated cards
- 🛒 **Cart:** Add, increase, decrease, remove items, total price, clear cart
- 💬 **WhatsApp Ordering:** Cart items are sent as a ready-made message
- 📅 **Table Reservation:** Date, time, guests and special requests with validation
- 🖼️ **Gallery:** Lightbox with next/previous, keyboard support (Esc and arrow keys)
- ⭐ **Reviews:** Animated customer review cards with star ratings
- 🎞️ **Smooth Scroll and Animations:** Framer Motion entrance and hover effects
- 📱 **Fully Responsive:** Mobile menu, adaptive layouts

---

## 🛠️ Tech Stack

- **React** (Vite)
- **Tailwind CSS** (v3)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Vercel** (hosting)

---

## 📂 Project Structure

spice-route-restaurant/
├── index.html
├── src/
│ ├── main.jsx
│ ├── App.jsx
│ ├── index.css
│ ├── data/
│ │ └── menu.js # All dishes (edit prices, names, images here)
│ └── components/
│ ├── Navbar.jsx
│ ├── Hero.jsx
│ ├── Menu.jsx
│ ├── Cart.jsx
│ ├── Reservation.jsx
│ ├── Gallery.jsx
│ ├── Reviews.jsx
│ └── Footer.jsx
├── tailwind.config.js
└── package.json


---

## 🚀 Run Locally

```bash
git clone https://github.com/Daniyal-Dynihmind/spice-route-restaurant.git
cd spice-route-restaurant
npm install
npm run dev
Then open http://localhost:5173.

🔭 Future Improvements
Backend (Supabase) to save reservations and orders
Admin panel to manage the menu and bookings
Online payment (Stripe)
Multi-language support (English and Urdu)


👨‍💻 Author
Daniyal Dynihmind
Vibe Coder and Full-Stack Builder | Karachi, Pakistan

GitHub: @Daniyal-Dynihmind
Open for freelance and client projects
If you like this project, give it a ⭐ on GitHub!
