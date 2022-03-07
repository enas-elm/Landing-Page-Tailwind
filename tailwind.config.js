const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    screens: {
        'xs': {'max': '475px'},
        ...defaultTheme.screens,
      },

    extend: {

      spacing: {
        'mr-nav': "3rem",
        '18':"72px",
        '21': "84px",
        '38': "152px",
        '104': "416px",
      },

      colors: {
        'textGray' : "#222222",
        'bgGray' : "#E5E5E5",
        'bgMainBlue' : "#0F31AF",
        'bgDarkBlue' : "#0C288D",
        'borderJournal' : "#E6E6E7",
        'textGray' : "#787F86",
        'textWhite' : "#FFFFFF",
        'yellowDot' : "#FFD600",
        'grayDot' : "#383C43",
        'blueCircle' : "#5A6CAD",
        'orangeLine' : "#E86011E5",
        'yellowLine' : "#FFD600E5",


      },

      height: {
        '160' : "40rem",
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
