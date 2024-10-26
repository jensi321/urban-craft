/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(119, 64, 0, 0.1) 0px 1px 1px 0px inset, rgba(119, 64, 0, 0.25) 0px 20px 10px -20px, rgba(119, 64, 0, 0.3) 0px 30px 60px -30px',
      },
    },
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'lime-900' :"#774000",
      'lime-500' :"#361d01",
      "gray-200_01":"#e9e7e7",
      "gray-200_03":"#f1f0f0",
      "gray-500":"#a89e9e",
      "gray-600" :"#777c84",
      "gray-600_01":"#7e7171",
      "blue_gray_100":"#d6dae2",
      "black-900" :"#0b0a0a", 
      "black-900_01" :"#000000",
     "black-900_4c": "#0000004c",
      "orange-50" : "#ffecd5",
      "yellow-50" : "#fff8f0",
      "green-900" :"#026206",
      "green-800" :"#049212",
      "red-800" :"#dc3545",
  },
  },
  plugins: [],
}