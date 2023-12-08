import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      'tablet': '768px',
      'desktop': '1024px',
    },
  },
  plugins: [],
  darkMode: 'class',
}

export default config
