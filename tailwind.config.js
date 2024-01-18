/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css,scss}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e2131',
        'primary-light': '#25283d',
        'primary-light-2': '#292d46',
        'primary-light-3': '#323757',
        secondary: '#53b7c4',
        'secondary-dark': '#4fabb7',
        black: '#131313',
        'black-900': '#151515',
        'black-800': '#171717',
        'black-700': '#191919',
        'black-600': '#1B1B1B',
        'black-500': '#1D1D1D',
        white: '#eaeaea',
      },
    },
  },
  plugins: [],
};
