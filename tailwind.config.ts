import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#2D60FF",
        secondary: "#34A853",
        gray: "#6D6B6B",
        grayLight: "#828282",
      },

      fontFamily: {
        dmSans: ["DM_Sans"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
