# `eslint-config-tantalum`

> A highly opinionated ESLint configuration for Tantalum

---

## How to use

Add a extend key to your eslint config file:

```js
// .eslintrc.cjs
const withTantalumConfig = require('@tantalum-config/eslint-config');

module.exports = withTantalumConfig('<stack>' | ['<sets>'])({
	rules: {
		// Override the configuration
	},
});
```

### Stacks

-   `nextjs` for NextJS applications extends react and next/core-vitals (next must be installed of course).
-   `nestjs` for NestJS applications, extends back.

### Sets

> An empty array will set only the base configuration

-   `back` for back-end or server-side code.
-   `node` for node apps.
-   `react` for react-based apps.
