module.exports = {
	plugins: ['sort-destructure-keys'],
	extends: [
		'eslint:recommended',
		'prettier',
		...[
			'./rules/errors',
			'./rules/imports',
			'./rules/other',
			'./rules/style',
		].map(require.resolve),
	],
};
