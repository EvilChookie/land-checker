/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	safelist: [
		{ pattern: /(bg|from|via|to)-yellow-100\/15/ },
		{ pattern: /(bg|from|via|to)-blue-400\/15/ },
		{ pattern: /(bg|from|via|to)-neutral-600\/15/ },
		{ pattern: /(bg|from|via|to)-red-700\/15/ },
		{ pattern: /(bg|from|via|to)-green-700\/15/ }
	],
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
