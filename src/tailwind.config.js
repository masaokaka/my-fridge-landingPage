/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          main: '#9CBB1C',
          base: '#FFFBED',
          accent: '#EF7D3C',
          black: '#3D3D3D',
        },
      },
    },
  },
  plugins: [],
};
