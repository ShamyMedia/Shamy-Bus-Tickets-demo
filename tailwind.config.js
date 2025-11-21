/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
      animation: {
        'slow-zoom': 'slowZoom 20s linear infinite alternate',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translate3d(0, 40px, 0)' },
          'to': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        }
      }
    },
  },
  plugins: [],
}