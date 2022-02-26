const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./**/*.html" ,
            "./app.js"
           ],
  theme: {
    screens: {
      'xssm': '540px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'background': '#e6e6e6',
        'banner-badge': '#ffb900',
        'shop-now-btn': '#005da6',
        'foot': '#f2f2f2',
        'foot-content': '#616161'
      },
      fontFamily: {
        'segoe': ['"Segoe UI"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
