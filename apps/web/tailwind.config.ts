import type { Config } from 'tailwindcss'
import { tailwindExtension } from './src/lib/theme/goldTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      ...tailwindExtension,
    },
  },
  plugins: [],
}
export default config
