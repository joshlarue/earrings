/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "core": "#9e85ba",
        "primary": "#fdeec7",
        "primary-dark": "#fdd985",
        "secondary": "#f69fc2",
        "secondary-dark": "#97183f",
        "accent": "#bcd770"
      },
    },
  },
  plugins: [],
};
