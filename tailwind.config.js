export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    /* Breakpoints used by md:, lg:, etc. (include sm so padding can apply there) */
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1280px",
      xl: "1370px",
    },

    /* Global container behavior */
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // < sm
        sm: "1rem",
        md: "2rem",
        lg: "5rem",
        xl: "4rem",
      },
      // Optional: control container max-widths (mirror screens)
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1280px",
        xl: "1370px",
      },
    },

    extend: {
      fontFamily: { gilroy: ['Gilroy-SemiBold', 'sans-serif'], 
                   archivo: ['Archivo', 'sans-serif'] },
    },
  },
  plugins: [],
};