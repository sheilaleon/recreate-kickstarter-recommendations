module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      minHeight: {
        '40': '10rem',
      },
      rotate: {
        '-15': '-15deg',
        '15': '15deg',
        '-38': '-38deg',
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('tailwindcss-inset')({
      variants: ['responsive'], // default: []
      insets: {
        '1/2': '50%',
        '1/5': '20%',
        full: '100%',
      },
    }),
  ],
};
