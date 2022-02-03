module.exports = {
	ecmaFeatures: {
		jsx: true,
	},
	env: {
		browser: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['jsx-a11y'],
	extends: [require.resolve('./index.js'), 'plugin:jsx-a11y/recommended'],
	rules: {
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-quotes': 'warn',
		'react/jsx-curly-brace-presence': [
			'warn',
			{ props: 'always', children: 'never' },
		],
		'react/react-in-jsx-scope': 'off',
	},
	overrides: [
		{
			files: 'scripts/**/*.[jt]s',
			rules: {
				'no-console': 'off',
			},
		},
	],
};
