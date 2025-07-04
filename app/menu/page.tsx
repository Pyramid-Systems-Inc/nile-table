'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MenuPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('appetizers');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🍽️' },
    { id: 'desserts', name: 'Desserts', icon: '🍯' },
    { id: 'beverages', name: 'Beverages', icon: '🍷' },
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Royal Mezze Platter',
        description: 'A selection of traditional Egyptian dips, olives, and flatbreads',
        price: '$18',
        dietary: 'Vegetarian'
      },
      {
        name: 'Pharaoh\'s Falafel',
        description: 'Crispy chickpea fritters with tahini sauce and pickled vegetables',
        price: '$14',
        dietary: 'Vegan'
      },
      {
        name: 'Nile Shrimp Cocktail',
        description: 'Fresh shrimp with spiced tomato sauce and Egyptian herbs',
        price: '$22',
        dietary: 'Gluten-Free'
      }
    ],
    mains: [
      {
        name: 'Pharaoh\'s Feast',
        description: 'Slow-cooked lamb with aromatic spices, served with traditional Egyptian bread',
        price: '$32',
        dietary: 'Signature'
      },
      {
        name: 'Nile River Catch',
        description: 'Fresh fish grilled to perfection with herbs and served with saffron rice',
        price: '$28',
        dietary: 'Chef\'s Special'
      },
      {
        name: 'Ancient Grain Bowl',
        description: 'Quinoa and ancient grains with roasted vegetables and tahini dressing',
        price: '$24',
        dietary: 'Vegan'
      }
    ],
    desserts: [
      {
        name: 'Golden Honey Baklava',
        description: 'Layers of delicate pastry with nuts and honey, a sweet ending to your royal journey',
        price: '$12',
        dietary: 'Traditional'
      },
      {
        name: 'Cleopatra\'s Delight',
        description: 'Rose-scented panna cotta with pistachios and gold leaf',
        price: '$14',
        dietary: 'Gluten-Free'
      },
      {
        name: 'Pyramid Chocolate Mousse',
        description: 'Rich dark chocolate mousse shaped like the great pyramids',
        price: '$13',
        dietary: 'Vegetarian'
      }
    ],
    beverages: [
      {
        name: 'Egyptian Mint Tea',
        description: 'Traditional mint tea served in authentic glasses',
        price: '$6',
        dietary: 'Herbal'
      },
      {
        name: 'Nile Sunset',
        description: 'Signature cocktail with pomegranate, rose water, and sparkling wine',
        price: '$16',
        dietary: 'Signature'
      },
      {
        name: 'Pharaoh\'s Coffee',
        description: 'Rich Arabic coffee with cardamom and dates',
        price: '$8',
        dietary: 'Traditional'
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Our Menu
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              A culinary journey through the flavors of ancient Egypt, 
              reimagined for the modern palate.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Category Navigation */}
          <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-xl font-bold text-blue-900">
                    {item.name}
                  </h3>
                  <span className="text-yellow-600 font-bold text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {item.dietary}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to Taste Ancient Egypt?
            </h2>
            <p className="text-xl mb-8 text-blue-800">
              Reserve your table and embark on a culinary adventure through time.
            </p>
            <Link 
              href="/book" 
              className="inline-block bg-blue-900 text-white font-semibold px-12 py-5 rounded-lg text-lg shadow-lg hover:bg-blue-800 transform hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              Book Your Table Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
