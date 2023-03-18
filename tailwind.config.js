const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                xl: '1240px',
                '2xl': '1240px',
            },
        },
        extend: {
            colors: {
                'yellow-green': '#8CC73F',
                'taupe-gray': '#898989',
                'chinese-silver': '#CCCCCC',
                'chinese-black': '#161718',
            },
            backgroundImage: {
                'brand-logo': "url('/images/cryptenet.png')",
            },
        },
        fontFamily: {
            poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
            lato: ['"Lato"', ...defaultTheme.fontFamily.mono],
        },
    },
    plugins: [],
};

module.exports = tailwindConfig;
