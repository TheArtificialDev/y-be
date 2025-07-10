import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Y-Be Brand Colors
        'yb-navy': {
          DEFAULT: '#2D3A4E',
          dark: '#1F2937',
          light: '#4B5563',
        },
        'yb-beige': {
          DEFAULT: '#D9BBA4',
          dark: '#C4A485',
          light: '#E8D5C4',
        },
        'yb-white': '#FFFFFF',
        // Semantic Colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        hover: 'var(--hover)',
        focus: 'var(--focus)',
        active: 'var(--active)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        heading: ['var(--font-heading-custom)', 'serif'],
      },
      borderRadius: {
        'organic': '1.25rem',
      },
      boxShadow: {
        'organic': '0 8px 20px -4px rgb(45 58 78 / 0.12), 0 4px 8px -2px rgb(45 58 78 / 0.08)',
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
