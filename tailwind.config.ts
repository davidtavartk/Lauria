import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: "#3DB2FF",
        "c-yellow": "#FFB830",
        "c-heading": "#FFB830",
        "c-text": "#6E6E6E",
        "c-title": "#2D2D2D",
        "background-overlay": "rgba(0, 0, 0, 0.80)",
      },
      
      boxShadow: {
        custom: '0px 10px 25px 0px rgba(0, 0, 0, 0.10)',
      },
      screens: {
        "xs": "430px",
        'lg-plus': '1180px',
      },
    },
  },
  plugins: [],
} satisfies Config;