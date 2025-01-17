import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        promiscuousPink: 'hsl(var(--promiscuous-pink) / <alpha-value>)',
        bluetiful: 'hsl(var(--bluetiful) / <alpha-value>)',
        ravenNight: 'hsl(var(--raven-night) / <alpha-value>)',
        snowy: 'hsl(var(--snowy) / <alpha-value>)',
        cottonBall: 'hsl(var(--cotton-ball) / <alpha-value>)',
        ghostWhite: 'hsl(var(--ghost-white) / <alpha-value>)',
        jewelCave: 'hsl(var(--jewel-cave) / <alpha-value>)',
        oceanNight: 'hsl(var(--ocean-night) / <alpha-value>)',
        creamyPeach: 'hsl(var(--creamy-peach) / <alpha-value>)',
        blueMana: 'hsl(var(--blue-mana) / <alpha-value>)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'var(--radius-sm)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
