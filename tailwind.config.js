const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // ...
}

module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        'regal-blue': '#243c5a',
        'bg-about': '#D8D8D8',
       'bg-pink': '#E7C1D3'
      },
    }
  }
}