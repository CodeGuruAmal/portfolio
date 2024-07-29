/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        neutral: "var(--neutral-color)",
      },
      
      backdropFilter: {
        'glass-filter': 'var(--glass-filter)',
      },
      backgroundColor: {
        'glass-bg': 'var(--glass-background)',
      },
      borderColor: {
        'glass-border': 'var(--glass-border)',
      },
    },
  },
  variants: {
    backdropFilter: ['responsive'], // Add the variant you need
  },
  plugins: [
    require('tailwindcss-filters'), // Add the filter plugin
  ],
};
