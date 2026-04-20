/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette matching the existing Kiwibins Horowhenua site
        // Primary lime (#d7df23) with charcoal for dark/text shades
        kiwi: {
          50:  '#fafde8',   // very light lime tint (subtle backgrounds)
          100: '#f0f7a0',   // light lime (icon backgrounds, accents)
          200: '#e4ee4a',   // medium lime
          300: '#dce31e',   // bright lime
          400: '#d7df23',   // PRIMARY BRAND LIME (CTA buttons)
          500: '#b9c105',   // lime hover
          600: '#565656',   // body text / link colour
          700: '#464A53',   // headings / dark text
          800: '#3a3e45',   // darker structural
          900: '#323232',   // dark backgrounds (footer, dark sections)
          950: '#1e2024',   // darkest
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
