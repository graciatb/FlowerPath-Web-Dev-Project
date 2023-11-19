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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, 
      colors: {
        green: {
          400: '#DBE5CA',
          500: '#9AA785',
          600: '#616A51',
        },
        pink: {
          400: '#F6D3D1',
          500: '#FEB291',
          600: '#B6503C',
        },
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
