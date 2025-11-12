/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        'ms': '640px', // Custom breakpoint at 840px
        'max-ms': { 'max': '639px' } // Custom "max-width" breakpoint
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.max-ms\\:hidden': {
          '@media (max-width: 639px)': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities, ['responsive']);
    }
  ],
};
