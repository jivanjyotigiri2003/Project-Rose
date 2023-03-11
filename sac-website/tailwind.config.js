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
      'main': '#850101'
    },
    keyframes: {
      textAnimationLg: {
        "0%": { top: "75%" },
        "50%": { top: "35%", fontSize: "380px", lineHeight: "341px" },
        "100%": { top: "14px", fontSize: "96px", lineHeight: "117px" },
      },
      textAnimationMd: {
        "0%": { top: "75%" },
        "50%": { top: "35%", fontSize: "200px", lineHeight: "241px" },
        "100%": { top: "14px", fontSize: "96px", lineHeight: "117px" },
      },
      textAnimationSm: {
        "0%": { top: "75%" },
        "50%": { top: "35%", fontSize: "120px", lineHeight: "241px" },
        "100%": { top: "14px", fontSize: "56px", lineHeight: "117px" },
      },
      textAnimation: {
        "0%": { top: "75%" },
        "50%": { top: "35%", fontSize: "90px", lineHeight: "241px" },
        "100%": { top: "14px", fontSize: "57px", lineHeight: "117px" },
      },
      logo: {
        "0%": {
          opacity: "0",
        },
        "50%": { opacity: "0.5" },
        "100%": {
          opacity: "1",
        },
      },
    },
  },
  plugins: [

    require("flowbite/plugin"),

    require('tailwind-scrollbar-hide')

  ],
}