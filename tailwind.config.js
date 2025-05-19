/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00FF9F',
        'neon-blue': '#00CFFF',
        'neon-purple': '#9D00FF',
        'gray-850': '#1A1A1A',
        'gray-900': '#111111',
        'gray-950': '#080808',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 159, 0.5), 0 0 10px rgba(0, 255, 159, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(0, 255, 159, 0.8), 0 0 20px rgba(0, 255, 159, 0.5)' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px rgba(0, 255, 159, 0.5), 0 0 10px rgba(0, 255, 159, 0.3)',
        'neon-hover': '0 0 10px rgba(0, 255, 159, 0.8), 0 0 20px rgba(0, 255, 159, 0.5)',
      },
    },
  },
  plugins: [],
};