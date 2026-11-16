// All dishes data. To add a new dish, copy one object and change its values.
export const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks']

export const menuItems = [
  {
    id: 1,
    name: 'Chicken Tikka',
    category: 'Starters',
    price: 850,
    description: 'Smoky charcoal-grilled chicken marinated in yogurt and spices.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    popular: true, // Shows the "Popular" badge on the card
  },
  {
    id: 2,
    name: 'Vegetable Samosa',
    category: 'Starters',
    price: 250,
    description: 'Crispy golden pastry filled with spiced potatoes and peas.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    popular: false,
  },
  {
    id: 3,
    name: 'Mutton Karahi',
    category: 'Mains',
    price: 1900,
    description: 'Slow-cooked mutton with tomatoes, ginger and green chilies.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 4,
    name: 'Chicken Biryani',
    category: 'Mains',
    price: 750,
    description: 'Fragrant basmati rice layered with tender chicken and saffron.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 5,
    name: 'Grilled Salmon',
    category: 'Mains',
    price: 1600,
    description: 'Atlantic salmon with lemon butter sauce and seasonal vegetables.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    popular: false,
  },
  {
    id: 6,
    name: 'Gulab Jamun',
    category: 'Desserts',
    price: 300,
    description: 'Soft milk dumplings soaked in rose-cardamom syrup.',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    popular: false,
  },
  {
    id: 7,
    name: 'Mango Lassi',
    category: 'Drinks',
    price: 280,
    description: 'Chilled yogurt drink blended with fresh Alphonso mango.',
    image: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=800&q=80',
    popular: false,
  },
]