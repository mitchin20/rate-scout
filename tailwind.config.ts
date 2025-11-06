import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
    plugins: [require('daisyui')],
    // @ts-ignore
    daisyui: {
        themes: ['light', 'dark'], // or your custom theme name
        logs: false,
        base: true,
        styled: true,
        utils: true,
    },
};

export default config;
