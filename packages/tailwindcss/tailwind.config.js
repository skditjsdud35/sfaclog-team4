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
    plugin(({ addUtilities }) => {
      addUtilities({
        ".header_b_36": {
          "@apply w-[300px] h-[300px]": {},
        },
        ".Header_B_32": {
          text: "32px",
          fontWeight: 700,
          lineHeight: "150%",
        },
        ".Body_B_24": {
          text: "24px",
          fontWeight: 700,
          lineHeight: "150%",
        },
        ".Body_B_20": {
          text: "20px",
          fontWeight: 700,
          lineHeight: "150%",
        },
        ".Body_M_20": {
          text: "20px",
          fontWeight: 500,
          lineHeight: "150%",
        },
        ".Body_B_18": {
          text: "18px",
          fontWeight: 700,
          lineHeight: "150%",
        },
        ".Body_M_18": {
          text: "18px",
          fontWeight: 500,
          lineHeight: "150%",
        },
        ".Body_R_18": {
          text: "18px",
          fontWeight: 400,
          lineHeight: "150%",
        },
        ".Body_B_16": {
          text: "16px",
          fontWeight: 700,
          lineHeight: "150%",
        },
        ".Body_M_16": {
          text: "16px",
          fontWeight: 500,
          lineHeight: "150%",
        },
        ".Body_R_16": {
          text: "16px",
          fontWeight: 400,
          lineHeight: "150%",
        },
        ".Caption_M_15": {
          text: "15px",
          fontWeight: 500,
          lineHeight: "150%",
        },
        ".Caption_R_15": {
          text: "15px",
          fontWeight: 400,
          lineHeight: "150%",
        },
        ".Caption_B_14": {
          text: "14px",
          fontWeight: 700,
          lineHeight: "150%",
        },
        ".Caption_M_14": {
          text: "14px",
          fontWeight: 500,
          lineHeight: "150%",
        },
        ".Caption_R_14": {
          text: "14px",
          fontWeight: 400,
          lineHeight: "150%",
        },
        ".Button_B_12": {
          text: "12px",
          fontWeight: 700,
          lineHeight: "150%",
        },
        ".Button_M_12": {
          text: "12px",
          fontWeight: 500,
          lineHeight: "150%",
        },
        ".Button_R_12": {
          text: "12px",
          fontWeight: 400,
          lineHeight: "150%",
        },
        ".Button_M_10": {
          text: "10px",
          fontWeight: 500,
          lineHeight: "150%",
        },
      });
    }),

    // require("prettier-plugin-tailwindcss"  )
  ],
};
