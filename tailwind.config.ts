import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        ivory: 'var(--ivory)',
        line: 'var(--line)',
        mist: 'var(--mist)'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        mono: ['IBM Plex Mono', 'monospace']
      },
      boxShadow: {
        whisper: '0 20px 55px rgba(17, 17, 17, 0.08)'
      },
      letterSpacing: {
        hero: '-0.09em'
      }
    }
  },
  plugins: []
};

export default config;
