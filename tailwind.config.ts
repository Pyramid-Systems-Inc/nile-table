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
    },
  },
  plugins: [],
};

export default config;
