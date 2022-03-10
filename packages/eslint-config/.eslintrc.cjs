/* eslint-disable */
const withTantalumConfig = require('eslint-config-tantalum');

module.exports = withTantalumConfig(['node'])({
	rules: {
		'@typescript-eslint/no-var-requires': 'off',
		'import/no-unused-modules': 'off',
	},
});
