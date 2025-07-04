'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate newsletter subscription
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-500 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-blue-900 font-serif font-bold text-xl">N</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    The Nile&apos;s Table
                  </h3>
                  <p className="text-white/80 text-sm">
                    Ancient Tradition Reimagined
                  </p>
                </div>
              </div>
              <p className="text-white/80 mb-8 max-w-md leading-relaxed">
                Experience the rich flavors and timeless traditions of Egyptian cuisine
                in an atmosphere of modern luxury and ancient heritage.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h4 className="font-serif text-lg font-semibold mb-4 text-yellow-400">
                  Stay Updated
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  Subscribe to receive exclusive offers and updates about special events.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg"
                  >
                    Subscribe
                  </button>
                </form>
                {isSubscribed && (
                  <p className="text-green-400 text-sm mt-2">✓ Thank you for subscribing!</p>
                )}
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-serif text-lg font-semibold mb-4 text-yellow-400">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-yellow-400 hover:bg-white/20 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-yellow-400 hover:bg-white/20 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-yellow-400 hover:bg-white/20 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-yellow-400 hover:bg-white/20 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 text-yellow-400">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white/70 hover:text-yellow-400 transition-all duration-300 flex items-center group">
                    <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-white/70 hover:text-yellow-400 transition-all duration-300 flex items-center group">
                    <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 hover:text-yellow-400 transition-all duration-300 flex items-center group">
                    <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-white/70 hover:text-yellow-400 transition-all duration-300 flex items-center group">
                    <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-yellow-400 transition-all duration-300 flex items-center group">
                    <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 text-yellow-400">Contact</h4>
              <div className="space-y-4 text-white/70">
                <div className="flex items-start space-x-3 group hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">123 Nile Street</p>
                    <p className="text-sm">Cairo District, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <p className="font-medium">(555) 123-NILE</p>
                </div>
                <div className="flex items-center space-x-3 group hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <p className="font-medium">info@nilestable.com</p>
                </div>

                {/* Hours */}
                <div className="mt-6 pt-4 border-t border-white/20">
                  <h5 className="font-semibold text-white mb-3">Hours</h5>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Mon - Thu</span>
                      <span>5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fri - Sat</span>
                      <span>5:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>4:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-white/60 text-sm">
                  &copy; {new Date().getFullYear()} The Nile&apos;s Table. All rights reserved.
                </p>
                <div className="flex items-center space-x-2 text-white/60 text-sm">
                  <span>Made with</span>
                  <span className="text-red-400">♥</span>
                  <span>in New York</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-white/60 hover:text-yellow-400 text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/60 hover:text-yellow-400 text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/book" className="text-white/60 hover:text-yellow-400 text-sm transition-colors duration-300">
                  Reservations
                </Link>
                <Link href="/contact" className="text-white/60 hover:text-yellow-400 text-sm transition-colors duration-300">
                  Support
                </Link>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 text-white/60 hover:text-yellow-400 transition-colors duration-300 group"
              >
                <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-sm">Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}