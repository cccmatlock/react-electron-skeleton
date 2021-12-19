// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const { defaults } = require("jest-config");

const config = {
	verbose: true,
	testEnvironment: "jsdom",
	moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
};

module.exports = config;
