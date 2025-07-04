'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Floating animation component
const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <div
      className="animate-pulse"
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

// Parallax scroll hook
const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollY = useParallax();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        {/* Interactive background pattern */}
        <div className="absolute inset-0 opacity-10">
          <FloatingElement delay={0}>
            <div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
              }}
            ></div>
          </FloatingElement>
          <FloatingElement delay={2}>
            <div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-200 rounded-full blur-2xl"
              style={{
                transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
              }}
            ></div>
          </FloatingElement>

          {/* Additional floating elements */}
          <FloatingElement delay={4}>
            <div
              className="absolute top-1/2 left-1/6 w-32 h-32 bg-yellow-300 rounded-full blur-2xl opacity-30"
              style={{
                transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
              }}
            ></div>
          </FloatingElement>
          <FloatingElement delay={1}>
            <div
              className="absolute bottom-1/3 left-2/3 w-40 h-40 bg-yellow-500 rounded-full blur-3xl opacity-20"
              style={{
                transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`
              }}
            ></div>
          </FloatingElement>
        </div>

        <div className={`text-center px-6 max-w-5xl mx-auto relative z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <h1 className={`font-serif text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight transition-all duration-1200 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
            Welcome to{' '}
            <span className="text-yellow-400 italic">The Nile's Table</span>
          </h1>
          <p className={`font-light text-2xl md:text-3xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            An Ancient Tradition of Flavor, Reimagined
          </p>
          <Link
            href="/book"
            className={`inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold px-12 py-5 rounded-lg text-lg shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-yellow-600 transform hover:-translate-y-1 transition-all duration-300 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Book Your Table
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                Welcome to The Nile's Table
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Step into a world where the mystique of ancient Egypt meets contemporary
                culinary excellence. Our restaurant is more than a dining destination—it's
                a journey through time, where every dish tells a story of tradition,
                innovation, and the eternal quest for perfection.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From the banks of the Nile to your table, we bring you authentic flavors
                refined through generations, presented with modern sophistication in an
                atmosphere that honors both heritage and luxury.
              </p>
              <Link
                href="/about"
                className="inline-block border-2 border-blue-900 text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300 ease-out"
              >
                Our Story
              </Link>
            </div>

            <div className={`transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-400 rounded-2xl shadow-lg h-80 flex items-center justify-center text-blue-900">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-bold text-xl mb-2">Restaurant Experience</p>
                    <p className="text-sm opacity-75">Video Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Taste of Ancient Egypt
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Discover our signature dishes that blend traditional Egyptian flavors
              with contemporary culinary artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <div className="h-48 bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center">
                <span className="text-4xl">🥘</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-blue-900 mb-2">
                  Pharaoh's Feast
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  A royal platter of slow-cooked lamb with aromatic spices, served with traditional Egyptian bread.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold text-lg">$32</span>
                  <span className="text-xs text-gray-500">Signature Dish</span>
                </div>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <div className="h-48 bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center">
                <span className="text-4xl">🐟</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-blue-900 mb-2">
                  Nile River Catch
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Fresh fish from the Nile, grilled to perfection with herbs and served with saffron rice.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold text-lg">$28</span>
                  <span className="text-xs text-gray-500">Chef's Special</span>
                </div>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <div className="h-48 bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center">
                <span className="text-4xl">🍯</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-blue-900 mb-2">
                  Golden Honey Baklava
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Layers of delicate pastry with nuts and honey, a sweet ending to your royal journey.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold text-lg">$12</span>
                  <span className="text-xs text-gray-500">Traditional</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`text-center mt-12 transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <Link
              href="/menu"
              className="inline-block border-2 border-blue-900 text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300 ease-out"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Guests Say
            </h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Experience the magic through the words of those who have dined with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-white/90 mb-6 italic">
                "An absolutely magical dining experience! The flavors transported me
                straight to ancient Egypt. Every dish was a masterpiece."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-900 font-bold">S</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Sarah Johnson</p>
                  <p className="text-white/60 text-sm">Food Critic</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-white/90 mb-6 italic">
                "The ambiance is breathtaking and the service impeccable.
                This is fine dining at its absolute best."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-900 font-bold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Michael Chen</p>
                  <p className="text-white/60 text-sm">Business Executive</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-white/90 mb-6 italic">
                "A culinary journey through time! The attention to detail
                and authentic flavors make this a truly special place."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-900 font-bold">E</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Emma Rodriguez</p>
                  <p className="text-white/60 text-sm">Travel Blogger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready for Your Royal Experience?
            </h2>
            <p className="text-xl mb-8 text-blue-800">
              Reserve your table today and embark on a culinary journey
              that bridges ancient traditions with contemporary excellence.
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
