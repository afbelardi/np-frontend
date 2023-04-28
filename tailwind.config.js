/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        monserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'hero-image': "url('/forwebsite.jpg')"
      },
      height: {
        '500': '500px'
      },
      colors: {
        'boston-blue': {
          '50': '#f3f8fc',
          '100': '#e5f0f9',
          '200': '#c6e1f1',
          '300': '#93c8e6',
          '400': '#5aacd6',
          '500': '#3491c2',
          '600': '#2475a5',
          '700': '#1f5d85',
          '800': '#1d4f6f',
          '900': '#1d435d',
          '950': '#132c3e',
      },  
      'light-purple': '#9aa2e6',
      'dark-purple': '#7b81b8',
      'navbar-blue': '#2b374f'
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin")
  ],
  daisyui:  {
    base: false,
    themes: false
  }
}
