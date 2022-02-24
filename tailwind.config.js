const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens: {
      'xssm': '540px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'background': '#e6e6e6',
        'banner-badge': '#ffb900',
        'shop-now-btn': '#005da6'
      },
      fontFamily: {
        'segoe': ['"Segoe UI"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
