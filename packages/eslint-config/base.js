module.exports = {
	plugins: ['sort-destructure-keys'],
	extends: ['eslint:recommended', 'prettier'].concat(
		[
			'./rules/errors',
			'./rules/imports',
			'./rules/node',
			'./rules/other',
			'./rules/style',
		].map(require.resolve)
	),
};
