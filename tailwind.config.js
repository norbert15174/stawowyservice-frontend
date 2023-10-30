module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin")]
  ,
  theme: {
    extend: {
      height: {
        100: '40rem',
        98: '36rem',
      },
    },
 },
};