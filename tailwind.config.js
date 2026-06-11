/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        noto: ['"Noto Sans SC"', 'sans-serif'],
      },
      colors: {
        deep: {
          900: '#0a0e27',
          800: '#0f1438',
          700: '#151b45',
          600: '#1c2456',
        },
        neon: {
          cyan: '#00f0ff',
          purple: '#b347ea',
          gold: '#f0a500',
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'particle': 'particle 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'scan-line': 'scan-line 8s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 5px rgba(0, 240, 255, 0.3), 0 0 20px rgba(0, 240, 255, 0.1)' },
          '100%': { boxShadow: '0 0 10px rgba(0, 240, 255, 0.6), 0 0 40px rgba(0, 240, 255, 0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'particle': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(100px)', opacity: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
