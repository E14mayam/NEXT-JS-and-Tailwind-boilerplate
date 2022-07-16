/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
      'zacbel':['Zacbel-X', 'sans-serif'],
      'syne':['Syne', 'sans-serif']
    }
  },
  plugins: [],
}
