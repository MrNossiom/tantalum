module.exports = {
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	extends: [
		...['./errors', './imports', './other', './style'].map(require.resolve),
		'eslint:recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'@typescript-eslint/no-empty-function': 'warn',

		'@typescript-eslint/no-explicit-any': 'off',

		'@typescript-eslint/no-shadow': 'error',

		'@typescript-eslint/no-useless-constructor': 'warn',

		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				varsIgnorePattern: '_.*',
				argsIgnorePattern: '_.*',
			},
		],
	},
};
