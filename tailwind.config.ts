import type { Config } from "tailwindcss";
// Remove defaultTheme import for v3 simplicity
// import defaultTheme from 'tailwindcss/defaultTheme'; 

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add our custom colors
      colors: {
        primary: '#06D001',      // Bright Green
        secondary: '#059212',    // Dark Green
        accent: '#9BEC00',       // Lime Green
        background: '#FFFFFF',   // White
        textPrimary: '#212121',  // Near Black
        textSecondary: '#555555', // Medium Gray
      },
      // Add our custom fonts
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Use system sans-serif as fallback
        heading: ['Poppins', 'sans-serif'],    // Use system sans-serif as fallback
      },
    },
  },
  plugins: [],
};
export default config; 