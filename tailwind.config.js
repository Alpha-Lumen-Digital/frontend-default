module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      borderRadius: {
        md: '0.25rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
}
