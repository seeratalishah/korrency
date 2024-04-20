/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["gloryBold", "gloryNormal", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
