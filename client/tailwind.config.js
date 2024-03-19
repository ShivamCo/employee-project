/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background_black: "#000E09",
        form_bg: "#1F191966",
        button_green1: "#00FF2580",
        button_green2: "#36A54680",
      },
      fontFamily:{
        "port": ["Port Lligat Slab", "serif"]
      },
      width:{
        '10Wid': '100%'
      }
    },
  },
  plugins: [],
}

