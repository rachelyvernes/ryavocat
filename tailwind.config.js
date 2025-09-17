/** @type {import('tailwindcss').Config} */
export default {
  content: {
    "files": [
      // all directories and extensions will correspond to your Nuxt config
      "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/plugins/**/*.{js,ts,mjs}",
      "{srcDir}/composables/**/*.{js,ts,mjs}",
      "{srcDir}/utils/**/*.{js,ts,mjs}",
      "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/app.config.{js,ts,mjs}",
      "{srcDir}/app/spa-loading-template.html"
    ]
  },
  theme: {
    screens: {
      'xs': '360px',
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

