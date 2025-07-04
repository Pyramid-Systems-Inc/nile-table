'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All', icon: '🖼️' },
    { id: 'restaurant', name: 'Restaurant', icon: '🏛️' },
    { id: 'food', name: 'Food', icon: '🍽️' },
    { id: 'events', name: 'Events', icon: '🎉' },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'restaurant',
      title: 'Main Dining Hall',
      description: 'Our elegant main dining room with Egyptian-inspired decor',
      placeholder: '🏛️'
    },
    {
      id: 2,
      category: 'food',
      title: 'Pharaoh\'s Feast',
      description: 'Our signature lamb dish with traditional spices',
      placeholder: '🥘'
    },
    {
      id: 3,
      category: 'restaurant',
      title: 'Private Dining Room',
      description: 'Intimate setting for special occasions',
      placeholder: '✨'
    },
    {
      id: 4,
      category: 'food',
      title: 'Golden Honey Baklava',
      description: 'Traditional Egyptian dessert with modern presentation',
      placeholder: '🍯'
    },
    {
      id: 5,
      category: 'events',
      title: 'Wedding Celebration',
      description: 'A magical evening celebrating love and tradition',
      placeholder: '💒'
    },
    {
      id: 6,
      category: 'food',
      title: 'Nile River Catch',
      description: 'Fresh fish prepared with ancient techniques',
      placeholder: '🐟'
    },
    {
      id: 7,
      category: 'restaurant',
      title: 'Chef\'s Table',
      description: 'Watch our chefs create culinary masterpieces',
      placeholder: '👨‍🍳'
    },
    {
      id: 8,
      category: 'events',
      title: 'Corporate Dinner',
      description: 'Professional events with Egyptian elegance',
      placeholder: '🤝'
    },
    {
      id: 9,
      category: 'food',
      title: 'Royal Mezze Platter',
      description: 'An array of traditional Egyptian appetizers',
      placeholder: '🥗'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Step inside The Nile's Table and discover the beauty of ancient Egypt 
              brought to life in our restaurant.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-400 flex items-center justify-center">
                    <span className="text-6xl">{item.placeholder}</span>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h3 className="font-serif text-xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Caption */}
                <div className="mt-4">
                  <h3 className="font-serif text-lg font-bold text-blue-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-2">
                No images found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category to view more images.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Experience It Yourself
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Pictures can only capture so much. Come and experience the magic 
              of The Nile's Table in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg"
              >
                Book Your Table
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-blue-900 text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
