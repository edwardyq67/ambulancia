/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kashmir': {
          '50': '#f5f7fa',
          '100': '#eaeef4',
          '200': '#d0d9e7',
          '300': '#a7b9d2',
          '400': '#7795b9',
          '500': '#5677a1',
          '600': '#476590',
          '700': '#374d6d',
          '800': '#30425c',
          '900': '#2c3a4e',
          '950': '#1d2534',
        },
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '*': {
          'fontFamily': "Playwrite PL, cursive",
          'fontOpticalSizing': 'auto',
          'fontWeight': '<weight>',  // Reemplaza <weight> con un valor real o variable
          'fontStyle': 'normal',
        },
        'h1': {
          color: "#7795b9",
          fontWeight: 'bold',
          fontSize: '4em'
        },
        'h2': {
          color: "white",
          fontSize: '1.8em'
        },
        'h3': {

          fontSize: "1.5em",
          color: "#5677a1",
        },
        'h4': {
          fontSize: "1.2em"
        },
        'h5': {
          fontSize: "1em"
        },
        'h6': {

        },
        'p': {
          fontWeight: '500',
          fontSize: '1.1em',
        
        }
        , li: {
          fontWeight: '600',
          fontSize: '1.1em'
          
        }
      });
    },
  ],
}
