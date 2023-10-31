/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mint-30': '#A7F6E9',
        'mint-60': '#1E7B74',
        'mint-grey-20': '#F5F5F5',
        'mint-grey-40': '#E0E0E0',
        'mint-grey-80': '#000000A6',
        'mint-grey-100': '#141414',
        'feedback-error-50': '#F50031',
        'mint-background': '#FFFFFF',
        'mint-global-black': '#141414'
      },
      fontFamily: {
        'JioType-Black': ['JioType-Black', 'sans-serif']
      }
    }
  },
  plugins: []
}
