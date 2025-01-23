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
        "c-heading": "##FFB830",
        "c-text": "#6E6E6E",
        "background-overlay": "rgba(0, 0, 0, 0.65)",
      },
    },
  },
  plugins: [],
} satisfies Config;
