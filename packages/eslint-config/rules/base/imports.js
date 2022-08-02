/*
 * To check relative documentation to each imports plugin rule, go to:
 * https://github.com/benmosher/eslint-plugin-import/blob/main/docs/rules/<name-of-the-rule>.md
 */
module.exports = {
	env: {
		es6: true,
	},

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},

	plugins: ['import'],

	extends: [
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.json'],
			},
		},
		'import/extensions': ['.js', '.mjs', '.jsx'],
		'import/core-modules': [],
		'import/ignore': [
			'node_modules',
			'\\.(coffee|scss|css|less|hbs|svg|json)$',
		],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
	},

	rules: {
		// ! Static analysis:
		/*
		 * Ensure imports point to files/modules that can be resolved
		 * ! off because it doesn't work with ESM module
		 */
		'import/no-unresolved': ['off'],

		/*
		 * Ensure named imports coupled with named exports
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
		 */
		'import/named': 'warn',

		/*
		 * Ensure default import coupled with default export
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
		 */
		'import/default': 'off',

		// * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
		'import/namespace': 'off',

		// ! Helpful warnings:

		// * Disallow invalid exports, e.g. multiple defaults/
		'import/export': 'warn',

		// * Do not allow a default import name to match a named export/
		'import/no-named-as-default': 'warn',

		// * Warn on accessing default export property names that are also named exports/
		'import/no-named-as-default-member': 'warn',

		// * Disallow use of jsdoc-marked-deprecated imports/
		'import/no-deprecated': 'off',

		/*
		 * Forbid the use of extraneous packages
		 * paths are treated both as absolute paths, and relative to process.cwd()
		 */
		'import/no-extraneous-dependencies': [
			'warn',
			{
				devDependencies: [
					// Tape, common npm pattern
					'test/**',
					'tests/**',
					// Mocha, rspec-like pattern
					'spec/**',
					// Jest pattern
					'**/__tests__/**',
					'**/__mocks__/**',
					// Repos with a single test file
					'test.{js,jsx}',
					// Repos with multiple top-level test files
					'test-*.{js,jsx}',
					// Tests where the extension or filename suffix denotes that it is a test
					'**/*{.,_}{test,spec}.{js,jsx}',
					// Jest config
					'**/jest.config.js',
					'**/jest.setup.js',
					// Vue-cli config
					'**/vue.config.js',
					// Webpack config
					'**/webpack.config.js',
					'**/webpack.config.*.js',
					// Rollup config
					'**/rollup.config.js',
					'**/rollup.config.*.js',
					// Gulp config
					'**/gulpfile.js',
					'**/gulpfile.*.js',
					// Grunt config
					'**/Gruntfile{,.js}',
					// Protractor config
					'**/protractor.conf.js',
					'**/protractor.conf.*.js',
					// Karma config
					'**/karma.conf.js',
					// ESLint config
					'**/.eslintrc.cjs',
					'**/build.ts',
				],
				optionalDependencies: false,
			},
		],

		// * Forbid mutable exports/
		'import/no-mutable-exports': 'warn',

		// ! Module systems:

		// * Disallow require()/
		'import/no-commonjs': 'off',

		// * Disallow AMD require/define/
		'import/no-amd': 'warn',

		// * No Node.js builtin modules/
		'import/no-nodejs-modules': 'off',

		// ! Style guide:

		// * Disallow non-import statements appearing before import statements/
		'import/first': 'warn',

		/*
		 * Disallow non-import statements appearing before import statements
		 * deprecated: use `import/first`
		 */
		'import/imports-first': 'off',

		// * Disallow duplicate imports/
		'import/no-duplicates': 'warn',

		// * Disallow namespace imports/
		'import/no-namespace': 'warn',

		// * Ensure consistent use of file extension within the import path/
		'import/extensions': ['warn', 'always'],

		// * Ensure absolute imports are above relative imports and that unassigned imports are ignored/
		'import/order': 'off',

		// * Require a newline after the last import/require in a group/
		'import/newline-after-import': 'warn',

		// * Require modules with a single export to use a default export/
		'import/prefer-default-export': 'off',

		// * Restrict which files can be imported in a given folder/
		'import/no-restricted-paths': 'off',

		// * Forbid modules to have too many dependencies/
		'import/max-dependencies': ['off', { max: 10 }],

		// * Forbid import of modules using absolute paths/
		'import/no-absolute-path': 'warn',

		// * Forbid require() calls with expressions/
		'import/no-dynamic-require': 'warn',

		// * Prevent importing the submodules of other modules/
		'import/no-internal-modules': [
			'off',
			{
				allow: [],
			},
		],

		/*
		 * Warn if a module could be mistakenly parsed as a script by a consumer
		 * leveraging Unambiguous JavaScript Grammar
		 * this should not be enabled until this proposal has at least been *presented* to TC39.
		 * At the moment, it's not a thing.
		 */
		'import/unambiguous': 'off',

		// * Forbid Webpack loader syntax in imports/
		'import/no-webpack-loader-syntax': 'warn',

		/*
		 * Prevent unassigned imports
		 * importing for side effects is perfectly acceptable, if you need side effects.
		 */
		'import/no-unassigned-import': 'off',

		// * Prevent importing the default as if it were named/
		'import/no-named-default': 'warn',

		// * Reports if a module's default export is unnamed/
		'import/no-anonymous-default-export': [
			'off',
			{
				allowArray: false,
				allowArrowFunction: false,
				allowAnonymousClass: false,
				allowAnonymousFunction: false,
				allowLiteral: false,
				allowObject: false,
			},
		],

		// * This rule enforces that all exports are declared at the bottom of the file./
		'import/exports-last': 'warn',

		/*
		 * Reports when named exports are not grouped together in a single export declaration
		 * or when multiple assignments to CommonJS module.exports or exports object are present
		 * in a single file.
		 */
		'import/group-exports': 'off',

		// * Forbid default exports. this is a terrible rule, do not use it./
		'import/no-default-export': 'off',

		// * Prohibit named exports. this is a terrible rule, do not use it./
		'import/no-named-export': 'off',

		// * Forbid a module from importing itself/
		'import/no-self-import': 'warn',

		// * Forbid cyclical dependencies between modules/
		'import/no-cycle': ['warn', { maxDepth: '∞' }],

		// * Ensures that there are no useless path segments/
		'import/no-useless-path-segments': ['warn', { commonjs: true }],

		// * Dynamic imports require a leading comment with a webpackChunkName/
		'import/dynamic-import-chunkname': [
			'off',
			{
				importFunctions: [],
				webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
			},
		],

		// * Use this rule to prevent imports to folders in relative parent paths./
		'import/no-relative-parent-imports': 'off',

		// * Reports modules without any exports, or with unused exports/
		'import/no-unused-modules': 'off',

		// * Reports the use of import declarations with CommonJS exports in any module except for the main module./
		'import/no-import-module-exports': [
			'warn',
			{
				exceptions: [],
			},
		],

		// * Use this rule to prevent importing packages through relative paths./
		'import/no-relative-packages': 'warn',
	},
	overrides: [
		// ! Overrides for specific files

		// * Disable no unused modules for test files because they don't export anything./
		{
			files: ['*[.-]{test,spec}.*'],
			rules: {
				'import/no-unused-modules': 'off',
			},
		},
	],
};
