/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // Background colors
      white: '#E2E8F0',
      gray: '#1E293B',
      blue: '#011E3C',
      green: '#0D9272',
      red: '#90113F',
      purple: '#B12EC7',
      coral: '#FB5F5F',
      'dark-blue': '#0B1929',
      'light-blue': '#37BCF8',
      'light-gray': '#94A3B8',
      // Line colors
      'line-blue': '#132F4C',
      'line-gray': '#263C56',
      'line-green': '#14C299',
      'line-red': '#DC3C76',
      'line-purple': '#E860FF',
      'line-coral': '#FA9292',
      // Hover colors
      'hover-white': '#DCDCDC',
      'hover-light-blue': '#259DD3',
    },
    fontSize: {
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
