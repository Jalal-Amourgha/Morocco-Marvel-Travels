import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3E86F5",
        "light-primary": "#d6e6f8",
        "gray-1": "#F2F2F2",
        "gray-2": "#4F4F4F",
        "gray-3": "#E0E0E0",
        "gray-4": "#333333",
      },
      margin: {
        100: "100px",
      },
      borderWidth: {
        1: "1px",
      },

      backgroundImage: {
        "hero-bg": "url('../assets/images/home.jpg')",
        "register-bg": "url('../assets/images/register.svg')",

        "subscribe-bg": "url('../assets/images/subscribe.jpg')",
        "mobile-bg": "url('../assets/images/mobile.jpg')",
        "creditcard-front": "url('../assets/images/creditcard-front.svg')",
        "creditcard-back": "url('../assets/images/creditcard-back.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
