/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        button: 'var(--color-bg-button)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        btnText: 'var(--color-bg-secondary)',
      },
      borderColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        input: 'var(--color-bg-input)',
        accent: 'var(--color-bg-darkish)',
        darkish: 'var(--color-text-accent)',
      },
      boxShadow: {
        'custom-green': '-2px -4px 3px -2px rgba(34, 197, 94, 0.36), 0px - 3px 9px 3px rgba(34, 197, 94, 1); ',
      },
    },
  },
  plugins: [],
}