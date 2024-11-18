/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ash-gray': 'rgb(var(--ash-gray) / <alpha-value>)',
        'cambridge-blue': 'rgb(var(--cambridge-blue) / <alpha-value>)',
        'hookers-green': 'rgb(var(--hookers-green) / <alpha-value>)',
        'dark-slate-gray': 'rgb(var(--dark-slate-gray) / <alpha-value>)',
        'charcoal': 'rgb(var(--charcoal) / <alpha-value>)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};