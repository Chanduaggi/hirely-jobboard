/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          50: '#EFF4FF',
          100: '#DBE6FE',
          500: '#2563EB',
          600: '#1D4FD1',
          700: '#1A3FB0',
        },
        secondary: '#0F172A',
        accent: '#3B82F6',
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        surface: '#F8FAFC',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 16px rgba(15, 23, 42, 0.06)',
        softer: '0 1px 3px rgba(15, 23, 42, 0.05)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.6s infinite linear',
        fadeUp: 'fadeUp 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
