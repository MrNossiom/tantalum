# eslint-config-tantalum

> A highly opinionated ESLint configuration for Tantalum

---

## How to use

Add a extend key to your eslint config file:

```json
{
	"extends": "tantalum/<preset-name>"
}
```

Where `[preset-name]` one of the presets without the `.js` extension or nothing for base configuration.

## Extendable configurations

-   `back.js` for back-end code.
-   `<none>` or `index.js` for base configuration, extended by all.
-   `nextjs.js` for NextJS applications.
-   `react.js` for react-based applications.
-   `typescript.js` for typescript applications.
