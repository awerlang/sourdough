const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.vue"],
  theme: {},
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function({ addVariant, e }) {
      addVariant("invalid", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`invalid${separator}${className}`)}:invalid`;
        });
      });
    })
  ]
};
