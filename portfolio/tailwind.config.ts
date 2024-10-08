import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config';

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
        'green-transparent2': 'rgba(0, 235, 199, 0.6)',
        'pink2': 'rgba(255, 84, 112, 0.43)',
        'yellow2': 'rgba(253, 226, 79, 0.43)',
      },
    },
  },
  plugins: [
    function ({ addBase }: PluginAPI) {
      addBase({
        'body': {fontSize: '18px'}
      })
    }
  ],
};
export default config;
