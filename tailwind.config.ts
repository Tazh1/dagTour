import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */

export default <Partial<Config>>{

  content: [
    "./layouts/**/*.{html,js,ts,tsx,vue}",
    "./pages/**/*.{html,js,ts,tsx,vue}",
    "./components/**/*.{html,js,ts,tsx,vue}",
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    screens: {
      sm: '360px',
      // => @media (min-width: 360px) { ... }
      md: '744px',
      // => @media (min-width: 744px) { ... }
      lg: '1280px',
      // => @media (min-width: 1280px) { ... }
      xl: '1648px',
      // => @media (min-width: 1648px) { ... }
      '2xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    fontSize: {
      xs: ["12px", "1.4"],
      sm: ["14px", "1.4"],
      base: ["16px", "1.4"],
      lg: ["18px", "1.4"],
      xl: ["20px", "1.4"],
      "2xl": ["24px", "1.4"],
      "3xl": ["30px", "1.4"],
      "4xl": ["40px", "1.4"],
      "5xl": ["48px", "1.4"],
      "6xl": ["62px", "1.4"],
      "7xl": ["72px", "1.4"],
      "8xl": ["84px", "1.4"],
    },
    container: {
      center: true,
      padding: {
        sm: "16px",
        md: "32px",
        lg: "44px",
        xl: "52px",
        '2xl': "50px",
      },
    }
  },
}