/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: '#0f0f0e',
          charcoal: '#1a1918',
          espresso: '#2a2421',
          brown: '#4a3b32',
          mocha: '#6e5a4b',
          taupe: '#948375',
          gold: '#c5a880',
          lightgold: '#dfc7a5',
          sand: '#e7ded3',
          warmwhite: '#f5f1eb',
          cream: '#faf8f5',
          purecream: '#fdfbf7',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Didot', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cinzel"', 'Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'ultra-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
