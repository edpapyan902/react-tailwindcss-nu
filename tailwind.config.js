const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1336px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'mont-regular': ['Mont-Regular'],
      'mont-semibold': ['Mont-SemiBold'],
      'mont-bold': ['Mont-Bold'],

      display: ['system-ui', 'sans-serif'],
      body: ['system-ui', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      'blue-900': '#011F8B',
      'indigo-900': '#5E4ECE'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      }
    },
    extend: {
      spacing: {
        '84': '21rem',
      },
      width: {
        'screen-80': '80vw',
        '144': '36rem',
      },
      height: {
        '104': '26rem',
        '116': '29rem',
        '144': '36rem',
        '160': '40rem',
        '180': '45rem',
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'active'],
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
