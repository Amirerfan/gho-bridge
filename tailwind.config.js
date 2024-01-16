/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css,scss}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2D3250',
        'primary-light': '#424769',
        'primary-light2': '#7077A1',
        'secondary': '#F6B17A',
        'black': '#08080c',
        'white': '#eaeaea',
      }
    },
  },
  plugins: [],
}

