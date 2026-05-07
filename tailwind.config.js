/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rsncBg: '#F8F9FA',
        rsncGreen: '#D1FF00',
        rsncNavy: '#0D1B2A',
        rsncCard: 'rgba(255, 255, 255, 0.70)',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-up': 'fadeUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(13, 27, 42, 0.08)',
        'glass-hover': '0 16px 48px rgba(13, 27, 42, 0.14)',
        'neon-green': '0 0 20px rgba(209, 255, 0, 0.35)',
        'neon-bright': '0 0 40px rgba(209, 255, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
