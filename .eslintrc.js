module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'next/core-web-vitals',
		'eslint:recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {},
	'@typescript-eslint/quotes': [
		'error',
		'single',
		{
			avoidEscape: true,
			allowTemplateLiterals: true,
		},
	],
};
