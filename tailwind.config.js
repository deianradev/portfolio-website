/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1a103d',
          800: '#251454',
          700: '#2f1a6b',
          600: '#3b2182',
          500: '#472799',
          400: '#5c35c4',
          300: '#7349e3',
          200: '#9171ff',
          100: '#b49dff',
        },
        accent: {
          cyan: '#00ffff',
          purple: '#b742ff',
          pink: '#ff36d9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};