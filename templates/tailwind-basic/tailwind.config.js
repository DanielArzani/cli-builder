/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './develop/layout/**/*.html',
    './develop/js/**/*.js',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      // colors: {},
    },
  },
  plugins: [],
};
