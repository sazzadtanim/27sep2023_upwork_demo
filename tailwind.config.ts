import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': `linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)`,
      },
    },
  },
  plugins: [],
}
export default config
