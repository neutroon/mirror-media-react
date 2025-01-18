import plugin from "tailwindcss/plugin";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgba(241, 73, 54, 1)",
          900: "rgba(241, 73, 54, 0.9)",
          800: "rgba(241, 73, 54, 0.8)",
          700: "rgba(241, 73, 54, 0.7)",
          600: "rgba(241, 73, 54, 0.6)",
          500: "rgba(241, 73, 54, 0.5)",
          400: "rgba(241, 73, 54, 0.4)",
          300: "rgba(241, 73, 54, 0.3)",
          200: "rgba(241, 73, 54, 0.2)",
          100: "rgba(241, 73, 54, 0.1)",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "serif"],
      },
      borderRadius: {
        circular: "50%",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        // sm: "2rem",
        // md: "3rem",
        // lg: "4rem",
        // xl: "5rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".main-btn": {
          "@apply bg-primary text-white px-5 py-2 rounded-full transition-colors duration-500 border-2 border-primary !important":
            {},
          "&:hover": {
            "@apply bg-white text-primary !important": {},
          },
        },
      });
    }),
    daisyui,
  ],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
