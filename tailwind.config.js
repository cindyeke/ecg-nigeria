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
            '2xl': '1440px',
            '3xl': '1536px',
            '4xl': '1920px',
        },
        fontSize: {
            sm: '12px',
            base: '14px',
            lg: '16px',
            xl: '20px',
            '2xl': '24px',
            '3xl': '30px',
        },
        colors: {
            white: '#FFFFFF',
            'dim-white': '#F8F8F8',
            'off-white': '#F0F0F0',
            'teal-300': '#79B5B8',
            'blue-500': '#0026B9',
            'blue-600': '#142D8C',
            'gray-200': '#D3CCCC',
            'gray-400': '#858585',
            'gray-900': '#1D1A1A',
        },
    },
    plugins: [],
}
