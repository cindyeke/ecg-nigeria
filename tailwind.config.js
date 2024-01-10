/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                main: ['var(--font-poppins)'],
                secondary: ['var(--font-raleway)'],
            },
        },
        screens: {
            xs: '320px',
            'xs-sm': '400px',
            ...defaultTheme.screens,
        },
        fontSize: {
            sm: '12px',
            base: '14px',
            lg: '16px',
            xl: '20px',
            '2xl': '24px',
            '3xl': '32px',
        },
        colors: {
            white: '#FFFFFF',
            'off-white': '#F0F0F0',
            'teal-300': '#79B5B8',
            'blue-500': '#0026B9',
            'blue-600': '#142D8C',
            'gray-400': '#858585',
        },
    },
    plugins: [],
}
