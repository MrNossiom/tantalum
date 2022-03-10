# eslint-config-tantalum

> A highly opinionated ESLint configuration for Tantalum

---

## How to use

Add a extend key to your eslint config file:

```js
// .eslintrc.cjs
/* eslint-disable */
const withTantalumConfig = require('eslint-config-tantalum');

module.exports = withTantalumConfig('<stack>' | ['<set-one>', 'set-two'])({
	rules: {
		// override the configuration
	},
});
```

### Stacks

-   `nextjs` for NextJS applications extends react and next/core-vitals (next must be installed of course).
-   `nestjs` for NestJS applications, extends back.

### Sets

-   `<none>` or `index.js` for base configuration.
-   `back.js` for back-end code.
-   `react.js` for react-based applications.
