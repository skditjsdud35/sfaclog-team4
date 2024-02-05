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
          100: "#0059FF",
          90: "#196AFF",
          80: "#337AFF",
          70: "#4C8BFF",
          60: "#669BFF",
          50: "#7FACFF",
          40: "#99BDFF",
          30: "#B2CDFF",
          20: "#CCDEFF",
          10: "#E5EEFF",
          5: "#F5F8FF",
          white: "#FFFFFF",
        },
        neutral: {
          100: "#030303",
          90: "#1A1A1A",
          80: "#333333",
          70: "#4D4D4D",
          60: "#666666",
          50: "#808080",
          40: "#999999",
          30: "#B3B3B3",
          20: "#CCCCCC",
          10: "#E6E6E6",
          5: "#F3F3F3",
          white: "#FFFFFF",
        },
        stroke: {
          blue: "#99BDFF",
          10: "#E6E6E6",
          5: "#F3F3F3",
        },
        background: {
          100: "#666666",
          50: "#666666",
          5: "#F8F8F9",
          blue: "#F5F8FF",
        },
        system: {
          warning: "#FF0000",
          success: "#07A320",
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
