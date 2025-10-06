/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      transitionTimingFunction: {
        'pam': 'cubic-bezier(0.25,0, 0, 1)'
      },
      colors: {
        'bleu': '#14254C',
        'blanc': '#F3F0E5',
      },
    },
    fontFamily: {
      gothic: ['Gothic A1', 'sans-serif'],
      source: ['Source Serif Pro', 'serif'],
      alice: ['Alice', 'serif'],

    }
  },
  plugins: [],
}

