/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '48px',
    },
    extend: {
      colors: {
        'primary': '#F5F5F5',
        'secondary':'#242424',
        
        'acient':'#FFAD00'
      }
    },
  },
  plugins: [],
}