module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1580px",
      "3xl": "1700px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        "theme-black": "#010101",
        "theme-black-light": "#222222",
        "editor-bg": "#040506",
        "editor-heading": "#000000",
        "editor-text": "#313c4e",
        "editor-green": "#1AB385",
        "editor-green-light": "#8CD9C2",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
