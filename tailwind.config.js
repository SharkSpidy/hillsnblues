/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading-name)', 'serif'],
        body: ['var(--font-body-name)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f2fcf5',
          100: '#e1f8e8',
          200: '#c3eed4',
          300: '#95deb6',
          400: '#5ec493',
          500: '#38a778',
          600: '#288660',
          700: '#236b4f',
          800: '#1f5541',
          900: '#1a4637',
        },
        secondary: {
          50: '#fbf7f4',
          100: '#f5efe9',
          200: '#ebdccf',
          300: '#dec0ad',
          400: '#cd9e83',
          500: '#bf8060',
          600: '#b2684f',
          700: '#955240',
          800: '#7b4538',
          900: '#643a30',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        background: {
          50: '#fcfcfc',
          100: '#f7f7f5',
          200: '#efefeb',
          300: '#e0e0db',
          400: '#d2d2cb',
          500: '#b8b8b0',
          600: '#9f9f96',
          700: '#85857d',
          800: '#6e6e66',
          900: '#575750',
        }
      },
      spacing: {
        base: 'var(--space-base)',
      },
      borderRadius: {
        small: 'var(--radius-small)',
        large: 'var(--radius-large)',
      },
      boxShadow: {
        custom: 'var(--shadow-custom)',
        'custom-hover': 'var(--shadow-custom-hover)',
      },
    }
  },
  plugins: [],
};
