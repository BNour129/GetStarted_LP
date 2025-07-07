module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1140px',
      },
    },
    extend: {
      colors: {
        primary: '#947424',
        'pale-gold': '#E8E1CF',
        offwhite: '#FCFCF9',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
