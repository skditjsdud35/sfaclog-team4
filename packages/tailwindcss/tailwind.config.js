/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "containers/**/*.{ts,tsx}",
    "templates/**/*.{ts,tsx}",
    "src/**/*.{ts,tsx}",
    "content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    // require("prettier-plugin-tailwindcss"  )
  ],
};
