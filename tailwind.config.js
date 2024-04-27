/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors :{
      bg : '#17161b',
      accent : '#bfbee3',
      accent2 : '#9092da',
      text : '#f1f1f3',
      secondary : '#28272c',
      redCrim : '#dc143c',
      bgInput : '#28272c69',
      accent3 : '#4b4748'
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
  },
  fontFamily : {
    online : 'Open Sans',
    ofline : 'sans-serif'
  },
    extend: {},
  },
  plugins: [],
}

