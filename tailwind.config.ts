import type { Config } from 'tailwindcss'
const config: Config = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                brick: ['var(--bricks-font'],
                sans: ['var(--sans-font)']
            },
            colors: {
                primary: {
                    DEFAULT: 'var(--primary)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                },
            },
        },
    },
    plugins: [],
}
export default config