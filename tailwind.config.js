/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js}',
    './components/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      colors: {
        papel: '#F4EFE6',
        tinta: '#241C15',
        cerrado: '#C24E1D',
        mata: '#1F6A4A',
        linha: '#CDBFA8',
        postit: '#E8C872',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Atkinson Hyperlegible', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        leitura: '42rem',
      },
    },
  },
  plugins: [],
}
