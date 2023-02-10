/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '480px',
        xlg: '960px',
      },
      gridTemplateColumns: {
        footer: 'repeat(auto-fill, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [],
}
