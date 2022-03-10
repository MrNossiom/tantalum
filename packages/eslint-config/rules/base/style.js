module.exports = {
	rules: {
		'arrow-body-style': 'warn',

		semi: ['warn'],

		'semi-spacing': 'warn',

		'semi-style': ['warn', 'last'],

		'no-tabs': [
			'warn',
			{
				allowIndentationTabs: true,
			},
		],

		'comma-style': 'warn',

		'func-style': [
			'warn',
			'declaration',
			{
				allowArrowFunctions: true,
			},
		],

		'linebreak-style': ['warn', 'unix'],

		'multiline-comment-style': 'warn',

		'prefer-regex-literals': 'warn',

		'prefer-rest-params': 'warn',

		'prefer-spread': 'warn',

		'prefer-template': 'warn',

		quotes: ['warn', 'single', 'avoid-escape'],

		radix: 'warn',

		'require-await': 'warn',

		'require-jsdoc': 'off',

		'prefer-arrow-callback': 'warn',

		'prefer-const': 'warn',

		'prefer-destructuring': 'warn',

		'no-var': 'warn',

		'no-void': 'warn',

		'no-return-await': 'warn',

		'no-floating-decimal': 'warn',

		'no-implicit-coercion': 'warn',

		'no-implicit-globals': 'warn',

		'no-implied-eval': 'warn',

		'no-inline-comments': 'warn',

		'max-lines-per-function': [
			'warn',
			{
				max: 200,
			},
		],

		'max-nested-callbacks': [
			'warn',
			{
				max: 4,
			},
		],

		'max-params': [
			'warn',
			{
				max: 5,
			},
		],

		'max-statements': [
			'warn',
			{
				max: 100,
			},
		],

		'max-statements-per-line': [
			'warn',
			{
				max: 3,
			},
		],
	},
};
