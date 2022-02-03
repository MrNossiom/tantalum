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
	},
};
