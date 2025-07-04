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
          'navy': '#001f3f',
          'gold': '#ffd700',
          'beige': '#f5f5dc',
          'navy-light': '#003366',
          'gold-dark': '#e6c200',
          'beige-dark': '#e8e8d0',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Cinzel', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #ffd700 0%, #e6c200 100%)",
        "gradient-navy": "linear-gradient(135deg, #001f3f 0%, #003366 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
