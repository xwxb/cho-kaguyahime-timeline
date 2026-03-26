/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cyber: {
          bg: '#050510',
          card: '#0a0a1f',
          border: '#1a1a3e',
          neon: '#00f0ff',
          pink: '#ff00aa',
          yellow: '#ffe000',
          text: '#c0c8e8',
        },
        space: {
          bg: '#02020f',
          card: '#07071a',
          border: '#12124a',
          star: '#e8e8ff',
          nebula: '#8844ff',
          gold: '#ffd700',
          text: '#b0b8d8',
        },
      },
      animation: {
        'flicker': 'flicker 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
          '75%': { opacity: '0.95' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
