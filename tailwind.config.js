/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kfolc: ["KFOlC", "sans-serif"],  // Use the exact font-family name from @font-face
        kfom: ["KFOm", "sans-serif"],
      },
    },
  },
  plugins: [],
}

