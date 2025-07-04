'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder - In production, replace with actual video */}
        <div className="absolute inset-0 bg-gradient-to-br from-nile-navy via-nile-navy-light to-black">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-nile-gold rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-nile-beige rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-hero mb-6 leading-tight">
              An Ancient Tradition of{' '}
              <span className="text-nile-gold">Flavor</span>,{' '}
              <span className="italic">Reimagined</span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              Experience the rich tapestry of Egyptian cuisine where pharaohs' recipes
              meet modern culinary artistry in an atmosphere of timeless elegance.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <Link href="/book" className="btn-primary text-lg px-10 py-5">
                Book Your Table
              </Link>
              <Link href="/menu" className="btn-secondary text-lg px-10 py-5">
                Explore Menu
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2">Discover More</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="animate-on-scroll"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display mb-6">
                Welcome to The Nile's Table
              </h2>
              <p className="text-elegant mb-6">
                Step into a world where the mystique of ancient Egypt meets contemporary
                culinary excellence. Our restaurant is more than a dining destination—it's
                a journey through time, where every dish tells a story of tradition,
                innovation, and the eternal quest for perfection.
              </p>
              <p className="text-elegant mb-8">
                From the banks of the Nile to your table, we bring you authentic flavors
                refined through generations, presented with modern sophistication in an
                atmosphere that honors both heritage and luxury.
              </p>
              <Link href="/about" className="btn-outline">
                Our Story
              </Link>
            </motion.div>

            <motion.div
              className="animate-on-scroll"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-nile-beige to-nile-gold rounded-2xl shadow-luxury">
                  <div className="flex items-center justify-center text-nile-navy">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="font-serif text-lg">Restaurant Experience Video</p>
                      <p className="text-sm opacity-75">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="section-padding bg-nile-beige/30">
        <div className="container-luxury">
          <motion.div
            className="text-center mb-16 animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display mb-4">Experience Excellence</h2>
            <p className="text-elegant max-w-2xl mx-auto">
              Discover what makes The Nile's Table a destination for those who
              appreciate the finer things in life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Cuisine",
                description: "Traditional recipes passed down through generations, refined with modern techniques.",
                icon: "🍽️"
              },
              {
                title: "Luxury Ambiance",
                description: "An atmosphere that transports you to the golden age of Egyptian civilization.",
                icon: "✨"
              },
              {
                title: "Exceptional Service",
                description: "Personalized attention that makes every visit a memorable experience.",
                icon: "👑"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="card-luxury text-center animate-on-scroll"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-nile-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-navy text-white">
        <div className="container-luxury text-center">
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-white mb-6">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Reserve your table today and embark on a culinary journey that bridges
              ancient traditions with contemporary excellence.
            </p>
            <Link href="/book" className="btn-primary text-lg px-10 py-5">
              Book Your Table Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
