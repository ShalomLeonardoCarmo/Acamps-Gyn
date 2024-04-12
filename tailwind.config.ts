import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'acamps-flags': 'url(/flagsbg.webp)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        '400': '400% 400%',
      },
      keyframes: {
        bgAnimation: {
          '0%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '51% 100%' },
          '100%': { 'background-position': '50% 0%' },
        },
      },
      animation: {
        bgRotate: 'bgAnimation 7s ease infinite',
      },
    },
  },
  plugins: [],
}
export default config
