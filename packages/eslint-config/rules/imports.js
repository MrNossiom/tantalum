module.exports = {
	env: {
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
	plugins: ['import'],

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.mjs', '.js', '.json'],
			},
		},
		'import/extensions': ['.js', '.mjs', '.jsx'],
		'import/core-modules': [],
		'import/ignore': [
			'node_modules',
			'\\.(coffee|scss|css|less|hbs|svg|json)$',
		],
	},

	rules: {
		// Static analysis:
		/*
		 * Ensure imports point to files/modules that can be resolved
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
		 */
		'import/no-unresolved': [
			'warn',
			{ commonjs: true, caseSensitive: true },
		],

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

		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
		'import/namespace': 'off',

		// Helpful warnings:

		/*
		 * Disallow invalid exports, e.g. multiple defaults
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
		 */
		'import/export': 'warn',

		/*
		 * Do not allow a default import name to match a named export
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
		 */
		'import/no-named-as-default': 'warn',

		/*
		 * Warn on accessing default export property names that are also named exports
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
		 */
		'import/no-named-as-default-member': 'warn',

		/*
		 * Disallow use of jsdoc-marked-deprecated imports
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
		 */
		'import/no-deprecated': 'off',

		/*
		 * Forbid the use of extraneous packages
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
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
					// eslint config
					'**/.eslintrc.js',
				],
				optionalDependencies: false,
			},
		],

		/*
		 * Forbid mutable exports
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
		 */
		'import/no-mutable-exports': 'warn',

		// Module systems:

		/*
		 * Disallow require()
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
		 */
		'import/no-commonjs': 'off',

		/*
		 * Disallow AMD require/define
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
		 */
		'import/no-amd': 'warn',

		/*
		 * No Node.js builtin modules
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
		 */
		'import/no-nodejs-modules': 'off',

		// Style guide:

		/*
		 * Disallow non-import statements appearing before import statements
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
		 */
		'import/first': 'warn',

		/*
		 * Disallow non-import statements appearing before import statements
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
		 * deprecated: use `import/first`
		 */
		'import/imports-first': 'off',

		/*
		 * Disallow duplicate imports
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
		 */
		'import/no-duplicates': 'warn',

		/*
		 * Disallow namespace imports
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
		 */
		'import/no-namespace': 'warn',

		/*
		 * Ensure consistent use of file extension within the import path
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
		 */
		'import/extensions': [
			'warn',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
			},
		],

		/*
		 * Ensure absolute imports are above relative imports and that unassigned imports are ignored
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
		 */
		'import/order': 'off',

		/*
		 * Require a newline after the last import/require in a group
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
		 */
		'import/newline-after-import': 'warn',

		/*
		 * Require modules with a single export to use a default export
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
		 */
		'import/prefer-default-export': 'warn',

		/*
		 * Restrict which files can be imported in a given folder
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
		 */
		'import/no-restricted-paths': 'off',

		/*
		 * Forbid modules to have too many dependencies
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
		 */
		'import/max-dependencies': ['off', { max: 10 }],

		/*
		 * Forbid import of modules using absolute paths
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
		 */
		'import/no-absolute-path': 'warn',

		/*
		 * Forbid require() calls with expressions
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
		 */
		'import/no-dynamic-require': 'warn',

		/*
		 * Prevent importing the submodules of other modules
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
		 */
		'import/no-internal-modules': [
			'off',
			{
				allow: [],
			},
		],

		/*
		 * Warn if a module could be mistakenly parsed as a script by a consumer
		 * leveraging Unambiguous JavaScript Grammar
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
		 * this should not be enabled until this proposal has at least been *presented* to TC39.
		 * At the moment, it's not a thing.
		 */
		'import/unambiguous': 'off',

		/*
		 * Forbid Webpack loader syntax in imports
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
		 */
		'import/no-webpack-loader-syntax': 'warn',

		/*
		 * Prevent unassigned imports
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
		 * importing for side effects is perfectly acceptable, if you need side effects.
		 */
		'import/no-unassigned-import': 'off',

		/*
		 * Prevent importing the default as if it were named
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
		 */
		'import/no-named-default': 'warn',

		/*
		 * Reports if a module's default export is unnamed
		 * https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
		 */
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

		/*
		 * This rule enforces that all exports are declared at the bottom of the file.
		 * https://github.com/benmosher/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
		 */
		'import/exports-last': 'warn',

		/*
		 * Reports when named exports are not grouped together in a single export declaration
		 * or when multiple assignments to CommonJS module.exports or exports object are present
		 * in a single file.
		 * https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/group-exports.md
		 */
		'import/group-exports': 'off',

		/*
		 * Forbid default exports. this is a terrible rule, do not use it.
		 * https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-default-export.md
		 */
		'import/no-default-export': 'off',

		/*
		 * Prohibit named exports. this is a terrible rule, do not use it.
		 * https://github.com/benmosher/eslint-plugin-import/blob/1ec80fa35fa1819e2d35a70e68fb6a149fb57c5e/docs/rules/no-named-export.md
		 */
		'import/no-named-export': 'off',

		/*
		 * Forbid a module from importing itself
		 * https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
		 */
		'import/no-self-import': 'warn',

		/*
		 * Forbid cyclical dependencies between modules
		 * https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
		 */
		'import/no-cycle': ['warn', { maxDepth: '∞' }],

		/*
		 * Ensures that there are no useless path segments
		 * https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
		 */
		'import/no-useless-path-segments': ['warn', { commonjs: true }],

		/*
		 * Dynamic imports require a leading comment with a webpackChunkName
		 * https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/dynamic-import-chunkname.md
		 */
		'import/dynamic-import-chunkname': [
			'off',
			{
				importFunctions: [],
				webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
			},
		],

		/*
		 * Use this rule to prevent imports to folders in relative parent paths.
		 * https://github.com/benmosher/eslint-plugin-import/blob/c34f14f67f077acd5a61b3da9c0b0de298d20059/docs/rules/no-relative-parent-imports.md
		 */
		'import/no-relative-parent-imports': 'off',

		/*
		 * Reports modules without any exports, or with unused exports
		 * https://github.com/benmosher/eslint-plugin-import/blob/f63dd261809de6883b13b6b5b960e6d7f42a7813/docs/rules/no-unused-modules.md
		 */
		'import/no-unused-modules': [
			'warn',
			{
				missingExports: true,
				unusedExports: true,
			},
		],

		/*
		 * Reports the use of import declarations with CommonJS exports in any module except for the main module.
		 * https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-import-module-exports.md
		 */
		'import/no-import-module-exports': [
			'warn',
			{
				exceptions: [],
			},
		],

		/*
		 * Use this rule to prevent importing packages through relative paths.
		 * https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-relative-packages.md
		 */
		'import/no-relative-packages': 'warn',
	},
};
