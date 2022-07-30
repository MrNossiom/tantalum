module.exports = {
	plugins: ['sort-destructure-keys'],

	rules: {
		'accessor-pairs': 'warn',

		'array-bracket-spacing': 'warn',

		'array-callback-return': 'warn',

		'arrow-parens': ['warn', 'always'],

		'arrow-spacing': [
			'warn',
			{
				after: true,
				before: true,
			},
		],

		'block-scoped-var': 'warn',

		'block-spacing': 'warn',

		camelcase: [
			'warn',
			{
				allow: ['userId_guildId'],
			},
		],

		'capitalized-comments': 'warn',

		complexity: 'warn',
		'computed-property-spacing': ['warn', 'never'],
		'consistent-this': 'warn',

		curly: ['warn', 'multi-line', 'consistent'],

		'default-case': 'warn',

		'default-param-last': 'warn',

		'dot-location': ['warn', 'property'],

		'dot-notation': 'warn',

		'eol-last': ['warn', 'always'],

		eqeqeq: 'warn',

		'func-call-spacing': 'warn',

		'func-name-matching': 'warn',

		'func-names': 'warn',

		'generator-star-spacing': 'warn',

		'grouped-accessor-pairs': 'warn',

		'guard-for-in': 'warn',

		'id-blacklist': 'warn',

		'id-length': [
			'warn',

			{
				// `d` for object with an svg path
				// `x,y,z` for coords
				exceptionPatterns: ['[dxyz]'],
			},
		],

		'id-match': 'warn',
		'init-declarations': 'off',

		'key-spacing': 'warn',

		'line-comment-position': 'warn',

		'lines-around-directive': 'warn',

		'lines-between-class-members': 'warn',

		'max-classes-per-file': 'warn',

		'max-depth': 'warn',

		'max-len': 'off',

		'max-lines': 'warn',

		'newline-after-var': ['warn', 'always'],

		'newline-before-return': 'warn',

		'no-alert': 'warn',

		'no-array-constructor': 'warn',

		'no-bitwise': 'warn',

		'no-caller': 'warn',

		'no-catch-shadow': 'warn',

		'no-constructor-return': 'warn',

		'no-continue': 'warn',

		'no-div-regex': 'warn',

		'no-else-return': 'warn',

		'no-eq-null': 'warn',

		'no-eval': 'warn',

		'no-extend-native': 'warn',

		'no-extra-bind': 'warn',

		'no-extra-label': 'warn',

		'no-invalid-this': 'warn',

		'no-iterator': 'warn',

		'no-label-var': 'warn',

		'no-labels': 'warn',

		'no-lone-blocks': 'warn',

		'no-lonely-if': 'warn',

		'no-loop-func': 'warn',

		'no-multi-assign': 'warn',

		'no-multi-spaces': 'warn',

		'no-multi-str': 'warn',

		'no-multiple-empty-lines': [
			'warn',
			{
				max: 1,
				maxEOF: 0,
				maxBOF: 0,
			},
		],

		'no-native-reassign': 'warn',

		'no-new': 'warn',

		'no-new-func': 'warn',

		'no-new-object': 'warn',

		'no-new-wrappers': 'warn',

		'no-octal-escape': 'warn',

		'no-proto': 'warn',

		'no-restricted-globals': 'warn',

		'no-restricted-imports': 'warn',

		'no-restricted-properties': 'warn',

		'no-restricted-syntax': 'warn',

		'no-script-url': 'warn',

		'no-self-compare': 'warn',

		'no-sequences': 'warn',

		'no-spaced-func': 'warn',

		'no-throw-literal': 'warn',

		'no-trailing-spaces': ['warn'],

		'no-undef-init': 'warn',

		'no-undefined': 'warn',

		'no-underscore-dangle': 'warn',

		'no-unmodified-loop-condition': 'warn',

		'no-unneeded-ternary': 'warn',

		'no-unused-expressions': 'warn',

		'no-use-before-define': 'off',

		'no-useless-call': 'warn',

		'no-useless-computed-key': 'warn',

		'no-useless-concat': 'warn',

		'no-useless-rename': 'warn',

		'no-useless-return': 'warn',

		'no-warning-comments': 'warn',

		'no-whitespace-before-property': 'warn',

		'nonblock-statement-body-position': 'warn',

		'object-curly-newline': 'warn',

		'object-curly-spacing': ['warn', 'always'],

		'object-shorthand': 'warn',

		'one-var-declaration-per-line': 'warn',

		'operator-assignment': 'warn',

		'operator-linebreak': 'warn',

		'padded-blocks': ['warn', 'never'],

		'padding-line-between-statements': 'warn',

		'prefer-exponentiation-operator': 'warn',

		'prefer-named-capture-group': 'off',

		'prefer-numeric-literals': 'warn',

		'prefer-object-spread': 'warn',

		'prefer-promise-reject-errors': 'warn',

		'prefer-reflect': 'warn',

		'require-unicode-regexp': 'warn',

		'rest-spread-spacing': 'warn',

		'sort-destructure-keys/sort-destructure-keys': 'warn',

		'sort-imports': 'warn',

		'space-before-blocks': 'warn',

		'space-before-function-paren': [
			'warn',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
			},
		],

		'space-in-parens': 'warn',

		'space-infix-ops': 'warn',

		'space-unary-ops': 'warn',

		'spaced-comment': 'warn',

		// A bundler should inserts `'use strict';` for us
		strict: ['error', 'never'],

		'switch-colon-spacing': 'warn',

		'symbol-description': 'warn',

		'template-curly-spacing': ['warn', 'never'],

		'template-tag-spacing': 'warn',

		'unicode-bom': ['warn', 'never'],

		'vars-on-top': 'warn',

		'wrap-iife': 'warn',

		'yield-star-spacing': 'warn',

		yoda: 'warn',

		// ! Does not work with typescript decorators
		'new-cap': 'off',

		// ! Typescript eslint plugin take care of this
		'no-unused-vars': 'off',
	},
};
