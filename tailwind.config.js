/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue,css}'],
  darkMode: false,
  theme: {
    extend: {
      width: {
        '30p': '30%',
        '45p': '45%',
        '50p': '50%',
        '80p': '80%',
        '105': '420'
      },
      maxWidth: {
        '30p': '30%',
        '45p': '45%',
        '50p': '50%',
        '80p': '80%',
        '105': '420'
      },
      minHeight: {
        '30p': '30%',
        '45p': '45%',
        '50p': '50%',
        '80p': '80%',
        '105': '420'
      },
      maxHeight: {
        '30p': '30%',
        '45p': '45%',
        '50p': '50%',
        '80p': '80%',
        '105': '420'
      }
     },
  },
  plugins: [],
}

