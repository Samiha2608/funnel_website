/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      colors: {
        bgColor: "#2C272E",
        primaryText: "#fcfcfa",
        primaryAccent: "#9AE66E",
        secondaryAccent: "#E59934",
        buttonColor: "#753188"
      },
      fontFamily: {
        title: ['Clash Display', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 60s linear infinite',  // Scroll for the left and right columns
        scrollReverse: 'scrollReverse 60s linear infinite', 
        marquee: 'marquee 30s linear infinite', // Existing marquee animation // Reverse scroll for the middle column
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },  // Start from the top
          '100%': { transform: 'translateY(calc(-100% - 2rem))' },  // Scroll up and finish at the top (no white space)
        },
        scrollReverse: {
          '0%': { transform: 'translateY(calc(-50% - 2rem))' },  // Start from the bottom
          '100%': { transform: 'translateY(0)' },  // Scroll down and finish at the bottom (no white space)
        },
        marquee: {
          '0%': { transform: 'translateX(0)' }, // Start from the beginning of the marquee
          '100%': { transform: 'translateX(-50%)' }, // Translate 50% for smooth looping
        },
      },
    },
  },
  plugins: [],
}
