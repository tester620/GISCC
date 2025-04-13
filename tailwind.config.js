import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#58809e',
        secondary: '#464c4d',
        accent: '#adb1b1',
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}

