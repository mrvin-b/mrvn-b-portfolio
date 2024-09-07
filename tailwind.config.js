/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
     extend: {
      backgroundImage: {
         'hero': "url('/public/images/hero-bg.jpg')",
      },

      colors: {
         'dark-gray': '#505050',
         'border-color': "#E0E0E0",
         'light-green': "#93D868",
         'cyan': "#68D8D1",
         'blue': "#6895D8",
      },
     },
   },
   plugins: [],
 }