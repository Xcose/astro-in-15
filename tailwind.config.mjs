/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			boxShadow: {
				neon: "0 0 30px theme('colors.red.700'), inset 0 0 30px theme('colors.red.700')",
			},
		},
	},
	plugins: [],
};
