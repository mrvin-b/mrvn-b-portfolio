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
         transparent: 'transparent',
         current: 'currentColor',
         'white': '#ffffff',
         'green': '#28ce52',
         'darkGray': '#545454',
         'transparentBlack': 'rgba(0,0,0, 0.9)',
      },

      fontFamily: {
         'sans': ['"Inter"']
      }
     },
   },
   plugins: [],
 }