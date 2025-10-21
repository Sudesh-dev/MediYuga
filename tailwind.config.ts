import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1E88E5',
          green: '#2EB872',
          teal: '#17A2B8',
          navy: '#0F3057'
        },
        trust: {
          high: '#16a34a',
          medium: '#f59e0b',
          low: '#ef4444'
        }
      },
      boxShadow: {
        card: '0 8px 30px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
} satisfies Config
