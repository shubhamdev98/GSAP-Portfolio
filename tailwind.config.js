/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fffef0',
          100: '#fffbdb',
          200: '#fff4b3',
          300: '#ffed8a',
          400: '#ffe561',
          500: '#ffd439',
          600: '#e6be33',
          700: '#ccaa2d',
          800: '#b39627',
          900: '#998221',
        },
        dark: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#000000',
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        'marquee-reverse': 'marquee 15s linear infinite reverse',
        rotate360: 'rotate360 10s linear infinite',
        'rotate360-reverse': 'rotate360 10s linear infinite reverse',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
