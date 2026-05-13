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
        brand: {
          yellow: '#ccff00',
          bg: '#f4f7f0',
          dark: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['"Pretendard Variable"', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', '"Helvetica Neue"', '"Segoe UI"', '"Apple SD Gothic Neo"', '"Noto Sans KR"', '"Malgun Gothic"', 'sans-serif'],
        display: ['"Pretendard Variable"', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', '"Apple SD Gothic Neo"', '"Noto Sans KR"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'scroll': 'scroll 30s linear infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
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
