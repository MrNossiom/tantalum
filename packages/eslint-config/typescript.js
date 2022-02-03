module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		require.resolve('./index.js'),
	],
	rules: {
		'@typescript-eslint/no-empty-function': 'warn',

		'@typescript-eslint/no-explicit-any': 'off',

		'@typescript-eslint/no-shadow': 'error',

		'@typescript-eslint/no-useless-constructor': 'warn',

		/*
		 * Does not work with typescript decorators
		 */
		'new-cap': 'off',

		/*
		 * Typescript eslint plugin take care of this
		 */
		'no-unused-vars': 'off',
	},
};
