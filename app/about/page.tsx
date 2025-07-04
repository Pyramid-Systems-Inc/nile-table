'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              A journey through time, where ancient Egyptian culinary traditions 
              meet contemporary excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                From Ancient Pharaohs to Modern Palates
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The Nile's Table was born from a passion for preserving the rich culinary 
                heritage of ancient Egypt while embracing the sophistication of contemporary 
                fine dining. Our founder, Chef Amara Hassan, spent years studying traditional 
                recipes passed down through generations of Egyptian families.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Each dish on our menu tells a story—from the spice routes that connected 
                ancient civilizations to the modern techniques that elevate these timeless 
                flavors. We believe that food is not just sustenance, but a bridge between 
                cultures and eras.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, The Nile's Table stands as a testament to the enduring power of 
                tradition, reimagined for the modern world.
              </p>
            </div>

            <div className={`transition-all duration-1000 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-400 rounded-2xl shadow-lg h-96 flex items-center justify-center text-blue-900">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-6xl">👨‍🍳</span>
                    </div>
                    <p className="font-bold text-2xl mb-2">Chef Amara Hassan</p>
                    <p className="text-lg opacity-75">Founder & Executive Chef</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              The principles that guide everything we do at The Nile's Table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className={`bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-5xl mb-6">🏺</div>
              <h3 className="font-serif text-xl font-bold text-blue-900 mb-4">
                Authentic Heritage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We honor the authentic recipes and cooking methods passed down through 
                generations of Egyptian culinary masters.
              </p>
            </div>

            {/* Value 2 */}
            <div className={`bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-5xl mb-6">⭐</div>
              <h3 className="font-serif text-xl font-bold text-blue-900 mb-4">
                Modern Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We elevate traditional flavors with contemporary techniques and 
                presentation, creating an unforgettable dining experience.
              </p>
            </div>

            {/* Value 3 */}
            <div className={`bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="font-serif text-xl font-bold text-blue-900 mb-4">
                Warm Hospitality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every guest is treated like family, with personalized service that 
                reflects the warmth of Egyptian hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Experience Our Story
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join us for an unforgettable culinary journey through ancient Egypt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg"
              >
                Book Your Table
              </Link>
              <Link 
                href="/menu" 
                className="border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300"
              >
                View Our Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
