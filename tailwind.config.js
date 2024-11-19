/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Update to include your project's structure
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'], // Add custom font support
      },
    },
  },
  plugins: [],
};
