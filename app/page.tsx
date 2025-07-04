import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-black">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-200 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            An Ancient Tradition of{' '}
            <span className="text-yellow-400">Flavor</span>,{' '}
            <span className="italic">Reimagined</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the rich tapestry of Egyptian cuisine where pharaohs' recipes
            meet modern culinary artistry in an atmosphere of timeless elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold px-10 py-5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out text-lg"
            >
              Book Your Table
            </Link>
            <Link
              href="/menu"
              className="border-2 border-yellow-400 text-yellow-400 font-semibold px-10 py-5 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 ease-out text-lg"
            >
              Explore Menu
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2">Discover More</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
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
                className="border-2 border-blue-900 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300 ease-out"
              >
                Our Story
              </Link>
            </div>

            <div>
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-400 rounded-2xl shadow-lg h-64 flex items-center justify-center text-blue-900">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-bold text-lg">Restaurant Experience Video</p>
                    <p className="text-sm opacity-75">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Experience Excellence</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Discover what makes The Nile's Table a destination for those who
              appreciate the finer things in life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="font-bold text-xl text-blue-900 mb-3">
                Authentic Cuisine
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional recipes passed down through generations, refined with modern techniques.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-bold text-xl text-blue-900 mb-3">
                Luxury Ambiance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                An atmosphere that transports you to the golden age of Egyptian civilization.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="font-bold text-xl text-blue-900 mb-3">
                Exceptional Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized attention that makes every visit a memorable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve your table today and embark on a culinary journey that bridges
            ancient traditions with contemporary excellence.
          </p>
          <Link
            href="/book"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold px-10 py-5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out text-lg"
          >
            Book Your Table Now
          </Link>
        </div>
      </section>
    </div>
  );
}
