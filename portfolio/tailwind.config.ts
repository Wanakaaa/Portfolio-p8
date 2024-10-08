import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: ['18px', '1.2'],
      },
      screens: {
        'mobile': { max: '350px' }, 
        'xs': { min: '351px', max: '639px' },
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'primary-text': 'var(--primary-text-color)',
        'secondary-text': 'var(--secondary-text-color)',
        'primary-bg': 'var(--primary-background-color)',
        'button-bg': 'var(--button-bg-color)',
        'button-text': 'var(--button-text-color)',
        'green2' : '#00ebc7',
        'green-transparent': 'rgba(0, 235, 199, 0.3)',
        'pink2': 'rgba(255, 84, 112, 0.43)',
        'yellow2': 'rgba(253, 226, 79, 0.43)',
      },
    },
  },
  plugins: [],
};
export default config;

        // 'blue-primary': '#00214d',
        // 'green-primary': '#00ebc7',
        // 'pink2': '#ff5470',
        //'green-transparent': 'rgba(0, 235, 199, 0.43)',
        // 'pink-transparent-plus': 'rgba(255, 84, 112, 0.20)',
        // 'yellow-transparent': 'rgba(253, 226, 79, 0.43)',
        // 'text-primary': '#00214D',
        // 'background-primary': '#F7FAFC',
        // clair: "#E6F0EB",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
