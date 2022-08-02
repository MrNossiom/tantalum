/* eslint-disable */
const withTantalumConfig = require('@tantalum-config/eslint-config');

module.exports = withTantalumConfig(['node'])({
	rules: {
		'@typescript-eslint/no-var-requires': 'off',
		'import/no-unused-modules': 'off',
	},
});
