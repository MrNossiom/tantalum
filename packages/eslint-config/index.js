const deepMerge = require('lodash.merge');
const base = require('./rules/base/index.js');
const SETS = require('./rules/sets/index.js');

const STACKS = {
	nextJs: [{ extends: 'next/core-web-vitals' }, SETS.react],
	nestJs: [SETS.back, SETS.node],
};

/**
 *
 * @param {Array<string>} sets The sets or the stack to use
 * @returns {() => string}
 */
function withTantalumConfig(sets) {
	if (typeof sets === 'string') {
		sets = getSetsFromStack(sets);
	} else if (Array.isArray(sets)) {
		sets = getSetsFromNames(sets);
	} else {
		throw new Error('Invalid stack');
	}

	return (extend) => deepMerge({}, base, sets, extend);
}

/**
 *
 * @param {Array<string>} sets
 */
function getSetsFromNames(sets) {
	// Remove duplicates
	sets = [...new Set(sets)];

	const options = [];

	for (const set of sets) {
		if (!Reflect.has(SETS, set)) {
			throw new Error(`Unknown set: ${set}`);
		}
		options.push(SETS[set]);
	}

	return deepMerge({}, ...options);
}

/**
 *
 * @param {string} sets
 */
function getSetsFromStack(stack) {
	if (!Reflect.has(STACKS, stack)) {
		throw new Error(`Unknown stack: ${stack}`);
	}

	return deepMerge({}, ...STACKS[stack]);
}

module.exports = withTantalumConfig;
