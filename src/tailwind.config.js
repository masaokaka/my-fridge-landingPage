/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          main: '#FFFBED', // メインカラー
          sub: '#EF7D3C',
        },
        green: {
          main: '#9CBB1C',
        },
      },
    },
  },
  plugins: [],
};
