import type { Config } from "tailwindcss";
import cfg from "./sirizone.config.json";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { primary: cfg.primary_color || "#F26B1F" } } },
  plugins: [],
};
export default config;
