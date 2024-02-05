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
    screens: {
      pc: "1440px",
      tablet: "1023px",
      mobile: "767px",
    },
    extend: {
      colors: {
        primary: {
          "primary-100": "#0059FF",
          "primary-90": "#196AFF",
          "primary-80": "#337AFF",
          "primary-70": "#4C8BFF",
          "primary-60": "#669BFF",
          "primary-50": "#7FACFF",
          "primary-40": "#99BDFF",
          "primary-30": "#B2CDFF",
          "primary-20": "#CCDEFF",
          "primary-10": "#E5EEFF",
          "primary-5": "#F5F8FF",
          "primary-white": "#FFFFFF",
        },
        neutral: {
          "neutral-100": "#030303",
          "neutral-90": "#1A1A1A",
          "neutral-80": "#333333",
          "neutral-70": "#4D4D4D",
          "neutral-60": "#666666",
          "neutral-50": "#808080",
          "neutral-40": "#999999",
          "neutral-30": "#B3B3B3",
          "neutral-20": "#CCCCCC",
          "neutral-10": "#E6E6E6",
          "neutral-5": "#F3F3F3",
          "neutral-white": "#FFFFFF",
        },
        stroke: {
          "stroke-blue": "#99BDFF",
          "stroke-10": "#E6E6E6",
          "stroke-5": "#F3F3F3",
        },
        background: {
          "background-100": "#666666",
          "background-50": "#666666",
          "background-5": "#F8F8F9",
          "background-blue": "#F5F8FF",
        },
        system: {
          "system-warning": "#FF0000",
          "system-success": "#07A320",
        },
      },
      fontWeight: {
        bold: "700",
        medium: "500",
        regular: "400",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".Header_B_36": {
          width: "300px",
          backgroundColor: "red",
        },
      });
    },
    // require("prettier-plugin-tailwindcss"  )
  ],
};
