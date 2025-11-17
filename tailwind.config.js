/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          marquee: {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        },
        animation: {
          marquee: "marquee 25s linear infinite",
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          ".pause": {
            animationPlayState: "paused",
          },
        });
      },
    ],
  };
  