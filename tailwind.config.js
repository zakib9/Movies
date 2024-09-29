/** @type {import('tailwindcss').Config} */
export default {
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "primary": "#cf2e26",
        "darkModeElements": "#2B3743",
        "darkModeBackground": "#212E37",
        "lightModeInput": "#919191",
      },
    },
  },
  plugins: [],
}

