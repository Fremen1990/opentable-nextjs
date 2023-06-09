/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
    fontSize: {
      "2xsm":"10px",
      xsm:"12px",
      sm:"13px",
      reg:"15px",
      ls:"18px",
      "2xl":"22px",
      "3xl":"25px",
      "4xl":"32px",
      "5xl":"40px",
      "6xl":"50px",
      "7xl":"70px",
    }
  },
  plugins: [],
}
