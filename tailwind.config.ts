import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The Nile's Table Brand Colors
        'nile': {
          'navy': '#001f3f',      // Deep Navy Blue - Primary
          'gold': '#ffd700',      // Gold - Secondary/Accent
          'beige': '#f5f5dc',     // Sandy Beige - Neutral
          'navy-light': '#003366', // Lighter navy for hover states
          'gold-dark': '#e6c200',  // Darker gold for hover states
          'beige-dark': '#e8e8d0', // Darker beige for subtle variations
        },
        // Semantic colors using brand palette
        primary: {
          50: '#f0f4f8',
          100: '#d9e6f2',
          500: '#001f3f',
          600: '#001a36',
          700: '#00152d',
          800: '#001024',
          900: '#000a1b',
        },
        accent: {
          50: '#fffef0',
          100: '#fffacc',
          500: '#ffd700',
          600: '#e6c200',
          700: '#ccad00',
          800: '#b39900',
          900: '#998500',
        }
      },
      fontFamily: {
        // Elegant serif for headings
        'serif': ['Playfair Display', 'serif'],
        // Clean sans-serif for body text
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        // Decorative font for special elements
        'display': ['Cinzel', 'serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #ffd700 0%, #e6c200 100%)",
        "gradient-navy": "linear-gradient(135deg, #001f3f 0%, #003366 100%)",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(0, 31, 63, 0.1)',
        'gold': '0 4px 20px rgba(255, 215, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;