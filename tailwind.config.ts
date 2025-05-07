import type { Config } from "tailwindcss";
import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";

const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [containerQueries, typography],
} satisfies Config;

export default config; 