import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#0a0a0a',
        steel: '#11131a',
        graphite: '#1a1f2b',
        ember: '#ff5b2e'
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 91, 46, 0.2)'
      },
      backgroundImage: {
        noise: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};

export default config;
