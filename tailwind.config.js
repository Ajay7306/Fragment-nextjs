/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1C1C1C',
        'secondary-white': '#F4F4F4',
        'secondary-dark': '#222228',
        'primary-green':'#96D068',
      }
    },
  },
  plugins: [],
}
