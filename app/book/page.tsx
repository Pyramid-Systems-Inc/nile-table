'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';

export default function BookPage() {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    const formData = new FormData(event.currentTarget);
    const bookingData = Object.fromEntries(formData.entries());

    // Basic validation
    if (!bookingData.booking_date || !bookingData.party_size || !bookingData.booking_time || !bookingData.user_name || !bookingData.user_email || !bookingData.user_phone) {
      setMessage('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/create-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('🎉 Booking successful! We look forward to welcoming you to The Nile\'s Table.');
        (event.target as HTMLFormElement).reset();
      } else {
        setMessage('❌ Booking failed: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setMessage('❌ Booking failed: An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Book Your Table
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Reserve your seat for an unforgettable culinary journey through ancient Egypt.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className={`transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="font-serif text-3xl font-bold text-blue-900 mb-8 text-center">
                  Reservation Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Date and Time Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="booking_date" className="block text-sm font-semibold text-gray-700 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        id="booking_date"
                        name="booking_date"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="booking_time" className="block text-sm font-semibold text-gray-700 mb-2">
                        Time *
                      </label>
                      <input
                        type="time"
                        id="booking_time"
                        name="booking_time"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Party Size */}
                  <div>
                    <label htmlFor="party_size" className="block text-sm font-semibold text-gray-700 mb-2">
                      Party Size *
                    </label>
                    <select
                      id="party_size"
                      name="party_size"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select party size</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8 Guests</option>
                      <option value="9">9+ Guests (Please call)</option>
                    </select>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="user_name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="user_phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="user_phone"
                        name="user_phone"
                        required
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="user_email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="special_requests" className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="special_requests"
                      name="special_requests"
                      rows={4}
                      placeholder="Dietary restrictions, special occasions, seating preferences..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Reserve Your Table'
                    )}
                  </button>
                </form>

                {/* Message Display */}
                {message && (
                  <div className={`mt-6 p-4 rounded-lg text-center font-medium ${message.includes('successful')
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                    }`}>
                    {message}
                  </div>
                )}
              </div>
            </div>

            {/* Information Sidebar */}
            <div className={`transition-all duration-1000 ease-out delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
              <div className="space-y-8">
                {/* Restaurant Info */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8">
                  <h3 className="font-serif text-2xl font-bold text-blue-900 mb-6">
                    Restaurant Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-yellow-600 text-xl">📍</span>
                      <div>
                        <p className="font-semibold text-gray-800">Location</p>
                        <p className="text-gray-600">123 Nile Street<br />Cairo District, NY 10001</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-yellow-600 text-xl">📞</span>
                      <div>
                        <p className="font-semibold text-gray-800">Phone</p>
                        <p className="text-gray-600">(555) 123-NILE</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-yellow-600 text-xl">🕒</span>
                      <div>
                        <p className="font-semibold text-gray-800">Hours</p>
                        <p className="text-gray-600">
                          Mon-Thu: 5:00 PM - 10:00 PM<br />
                          Fri-Sat: 5:00 PM - 11:00 PM<br />
                          Sun: 4:00 PM - 9:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Policies */}
                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="font-serif text-2xl font-bold text-blue-900 mb-6">
                    Reservation Policies
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span>Reservations are held for 15 minutes past the reserved time</span>
                    </p>
                    <p className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span>Parties of 8 or more require a phone reservation</span>
                    </p>
                    <p className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span>Cancellations must be made 24 hours in advance</span>
                    </p>
                    <p className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span>Smart casual dress code is preferred</span>
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Need assistance with your reservation?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block border-2 border-blue-900 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}