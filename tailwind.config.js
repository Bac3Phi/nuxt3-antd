module.exports = {
  mode: 'jit',
  content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
      extend: {
          colors: {
              primary: {
                  DEFAULT: '#0AA679',
                  // dark: primaryColorDark,
              },
          },
          screens: {
              sm: '576px',
              md: '768px',
              lg: '992px',
              xl: '1200px',
              '2xl': '1600px',
          },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}