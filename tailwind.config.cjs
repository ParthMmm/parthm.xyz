/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    colors: {
      harlequin: {
        DEFAULT: '#3AF613',
        50: '#CEFDC4',
        100: '#BDFCB0',
        200: '#9CFA89',
        300: '#7CF962',
        400: '#5BF73A',
        500: '#3AF613',
        600: '#29C908',
        700: '#1E9306',
        800: '#135D04',
        900: '#082701',
      },
    },
    extend: {
      fontFamily: {
        ObjectSans: ['Object Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
