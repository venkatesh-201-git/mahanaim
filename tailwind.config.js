/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sacred: {
          50: '#FBF9F5',
          100: '#F5EFEB',
          200: '#EBE2D8',
          300: '#DECFC0',
          400: '#C7B299',
          500: '#B09574',
          600: '#8E7353',
          700: '#6D563C',
          800: '#4F3D29',
          900: '#2A1F13',
        },
        gold: {
          50: '#FFFDF0',
          100: '#FFF9D2',
          200: '#FFF1A3',
          300: '#FFE66E',
          400: '#E8CA38',
          500: '#D4AF37', // Classic Royal Church Gold
          600: '#B89324',
          700: '#947217',
          800: '#755810',
          900: '#543E08',
        },
        midnight: {
          50: '#F2F5FA',
          100: '#E1E7F3',
          200: '#C3D0E7',
          300: '#97B1D5',
          400: '#648BBF',
          500: '#3D69A5',
          600: '#2B4E85',
          700: '#1F3865',
          800: '#142544',
          900: '#0C172B', // Deepest Obsidian Night
          950: '#060B16',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        telugu: ['"Noto Sans Telugu"', 'sans-serif'],
        'telugu-serif': ['"Noto Serif Telugu"', 'serif'],
      },
      boxShadow: {
        'sacred-sm': '0 2px 8px -2px rgba(212, 175, 55, 0.12), 0 1px 4px -1px rgba(0, 0, 0, 0.06)',
        'sacred': '0 8px 30px -4px rgba(212, 175, 55, 0.18), 0 4px 12px -2px rgba(0, 0, 0, 0.08)',
        'sacred-lg': '0 20px 45px -10px rgba(212, 175, 55, 0.25), 0 8px 24px -4px rgba(0, 0, 0, 0.12)',
        'glow-gold': '0 0 25px rgba(212, 175, 55, 0.35)',
        'glow-white': '0 0 35px rgba(255, 255, 255, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'ray-rotate': 'rayRotate 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rayRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      screens: {
        'xs': '360px',
      },
    },
  },
  plugins: [],
}
