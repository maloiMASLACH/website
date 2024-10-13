/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    ...require("vit-ui-kit/dist/vitTheme"),
    colors: {
      ...require("vit-ui-kit/dist/vitTheme").colors,
      "compliq-middle": "var(--compliq-middle)",
      "compliq-disabled": "var(--compliq-disabled)",
      "compliq-pending": "var(--compliq-pending)",
      "compliq-background": "var(--compliq-background)",
      "vitreus-gradient-from": "var(--vitreus-gradient-from)",
      "vitreus-gradient-to": "var(--vitreus-gradient-to)",
      "vitreus-text-color": "var(--vitreus-text-color)",
      "vitreus-header-border": "var(--vitreus-header-border)",
      "vitreus-red-main": "var(--vitreus-red-main)",
      "vitreus-footer": "var(--vitreus-footer)",
      "vitreus-input": "var(--vitreus-input)",
      "vitreus-input-text": "var(--vitreus-input-text)",
      "vitreus-dotted-border": "var(--vitreus-dotted-border)",
    },
    fontSize: {
      ...require("vit-ui-kit/dist/vitTheme").fontSize,
      sh2: ["24rem", "34rem"],
      h2: ["50rem", "60rem"],
      h5: ["20rem", "36rem"],
      "ws-sh2": ["24rem", "34rem"],
      "ws-h5": ["20rem", "36rem"],
      "ws-p1": ["16rem", "28rem"],
    },
    // extend: {
    //   gridTemplateColumns: {
    //     blog: "repeat(auto-fill, minmax(300px, 1fr)",
    //   },
    // },
    // extend: {
    //   ...require("vit-ui-kit/dist/vitTheme").extend,
    //   screens: {
    //     ...defaultTheme.screens,
    //     xs: { min: "400px" },
    //     sm: { min: "650px" },
    //     md: { min: "800px" },
    //     lg: { min: "1000px" },
    //     xl: { min: "1200px" },
    //     "2xl": { min: "1600px" },
    //   },
    // },
  },
  plugins: [],
};
