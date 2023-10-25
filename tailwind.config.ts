import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          10: "#E1CFEF",
          20: "#CDAEE4",
          30: "#B486D6",
          40: "#9C5EC8",
          50: "#8335BB",
          60: "#6A0DAD",
          70: "#580B90",
          80: "#490793",
          90: "#350757",
          100: "#150323",
          full: "#470973",
          bg: "#FCFAFE",
        },
        secondary: {
          10: "#FCF1D0",
          20: "#FBE8B0",
          30: "#FD6262",
          40: "#F4C63A",
          50: "#F2BB13",
          60: "#F2BB13",
          70: "#CA9C10",
          80: "#795EOA",
          90: "#513EO6",
          100: "#513EO6",
        },
        status: {
          10: "#FEF32F",
          20: "#FEE4E2",
          30: "#FECDCA",
          40: "#FDA29B",
          50: "#F97066",
          60: "#F04438",
          70: "#D92D20",
          80: "#B42318",
          90: "#912018",
          100: "#7A271A",
        },
        text: {
          dark: "#2E2E2E",
          darker: "#0F0D0E",
          light: "#fafafa",
          lighter: "#f1f1f1",
          lighterShade: "#EDEDED",
          darkShade: "#EDEDED",
          darkerLightShade: "#989898",
          darkerLightestShade: "#727272",
          darkerBlackShade: "#4C4C4C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
