/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgblueleft' : '#262952',
        'bgblueright' : '#343867',
        'blue1left' : '#1D2041',
        'blue1right' : '#10142D',
        'blue2left' : '#171932',
        'blue2right' : '#0D1023',
        'custompink' : '#ECB365',
        'searchbg' : "#0c0e20",
        'searchborder': '#3c8dec',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
