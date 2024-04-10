import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      //Primary
      primaryGreen: "#57B660",
      primaryWhite: "#D9D9D9",
      primaryBlack: "#181414",
      //Decorative
      blueMoon: "#649AED",
      redRedWine: "#EB5640",
      mellowYellow: "#F6C874",
      pale: "#A7C2D1",
      everGreen: "#D5F479",
      prettyInPink: "#F7CFD4",
      pinkMoon: "#E57BA1",
      yellowSubmarine: "#F4E357",
      //Greys
      grey0: "hsl(0, 0%, 96%)",
      grey1: "hsl(0, 0%, 92%)",
      grey2: "hsl(0, 0%, 88%)",
      grey3: "hsl(0, 0%, 80%)",
      grey4: "hsl(0, 0%, 70%)",
      grey5: "hsl(0, 0%, 60%)",
      grey6: "hsl(0, 0%, 50%)",

      //other
      black: "#000000",
      white: "#ffffff",
    },    
  },
  extend: {
    fontFamily: {
      roboto: ['Roboto', 'sans'],
    },
  },
  plugins: [],
};
export default config;
