/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: '#C8A2C8',
          50: '#F6EFF6',
          100: '#EDDFED',
          200: '#DBBFDB',
          300: '#C8A2C8',
          400: '#B683B6',
          500: '#A064A0',
          600: '#8B4F8B',
          700: '#713D71',
          800: '#5A315A',
          900: '#422642',
        },
        softblue: {
          DEFAULT: '#A7C7E7',
          50: '#F1F7FC',
          100: '#E2EFF8',
          200: '#C5DFEF',
          300: '#A7C7E7',
          400: '#7FAAD4',
          500: '#5C8EBC',
          600: '#4574A0',
          700: '#385C81',
          800: '#2E4A67',
          900: '#263D54',
        },
        navy: {
          50: '#E7EAF2',
          100: '#C9CFE0',
          200: '#93A0C2',
          300: '#5D70A3',
          400: '#2F4576',
          500: '#171D35',
          600: '#101426',
          700: '#0C0F1D',
          800: '#080A15',
          900: '#05060D',
        },
        violet: {
          accent: '#8B7BC8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'lavender-gradient': 'linear-gradient(135deg, #C8A2C8 0%, #A7C7E7 100%)',
        'violet-gradient': 'linear-gradient(135deg, #8B7BC8 0%, #C8A2C8 100%)',
        'navy-gradient': 'linear-gradient(180deg, #101426 0%, #171D35 100%)',
        'hero-radial':
          'radial-gradient(ellipse at top, rgba(200,162,200,0.25), transparent 60%), radial-gradient(ellipse at bottom right, rgba(167,199,231,0.22), transparent 55%)',
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(16, 20, 38, 0.18)',
        glow: '0 0 40px -8px rgba(200, 162, 200, 0.45)',
        'glow-blue': '0 0 40px -8px rgba(167, 199, 231, 0.5)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
