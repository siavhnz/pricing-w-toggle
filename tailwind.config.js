/** @type {import('tailwindcss').Config} */

import { values } from "./tailwind.rewrite";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "very-light-grayish-blue": "hsl(240, 78%, 98%)",
        "light-grayish-blue": "hsl(234, 14%, 74%)",
        "grayish-blue": "hsl(233, 13%, 49%)",
        "dark-grayish-blue": "hsl(232, 13%, 33%)",
        "light-purple": "hsl(236, 72%, 79%)",
        purple: "hsl(237, 63%, 64%)",
      },

      ...values,
    },
  },
  plugins: [],
};
