/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue,css}'],
  darkMode: false,
  theme: {
    extend: {
      width: {
        '50p': '50%',
        '80p': '80%'
      }
     },
  },
  plugins: [],
}

