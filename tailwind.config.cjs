/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      /* ---------- Color tokens ---------- */
      colors: {
        primary: "#050816", // page background
        secondary: "#aaa6c3", // muted / sub text
        tertiary: "#151030", // elevated surfaces (cards, inputs)
        "black-100": "#100d25", // surface hover / alt
        "black-200": "#090325", // deep surface
        "white-100": "#f3f3f3", // body text
        accent: {
          DEFAULT: "#915eff", // brand highlight
          soft: "#dfd9ff", // tinted highlight text
        },
      },

      /* ---------- Typography tokens ---------- */
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      /* ---------- Radii tokens ---------- */
      borderRadius: {
        card: "20px", // all large cards use this
        control: "12px", // inputs, buttons, small controls
      },

      /* ---------- Elevation tokens ---------- */
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "glow-accent": "0 0 24px -6px rgba(145, 94, 255, 0.45)",
      },

      /* ---------- Motion tokens ---------- */
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)", // single easing for the whole UI
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "70%": { transform: "translateY(14px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
        "scroll-dot": "scroll-dot 2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
      },

      /* ---------- Layout tokens ---------- */
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
