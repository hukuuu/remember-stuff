module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // primary: 'rgb(var(--color-primary))',
        // secondary: 'rgb(var(--color-secondary))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
