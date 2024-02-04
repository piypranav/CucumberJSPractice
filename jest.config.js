//Jest testing tutorial for Selenium JavaScript Testing
// This configuration properties are taken from the official Jest documentation which is available at https://jestjs.io/docs/en/configuration.html 
//const {default} = require('jest-config');
module.exports = {
    // preset: "react-native",
	preset: null,
    collectCoverage: true,
    moduleDirectories: ['node_modules', '__tests__'],
    // transform: {
    //     '^.+\\.js$': 'node_modules/react-native/jest/preprocessor.js',
    //  },
    setupFiles: ['setup-tests.js'],
    transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native)'],
    coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
    testEnvironment: 'node',
	// It indicates that each one imported modules in the tests must be mocked automatically
// It indicates that an array of record extensions our modules should be using
 	moduleFileExtensions: [
   	"js",
   	"json",
   	"jsx",
   	"node",
	"ts",
	"tsx"
 	],
     // This configuration indicates Jest to the course of a custom resolver
 	// This configuration indicates the Jest to allows us to apply a custom runner in preference to Jest's default inbuilt Jest test runner
 	// runner: "jest-runner",
	// This configuration factors to the trails to modules that run a few code to configure or installation the test environment before each test run
 	setupFiles: [],
	// This configuration shows the Jest testing framework to assign the URL for the jsdom environment. It is shown in properties and configuration like the location.Href testURL: "http://localhost",
	
	// This property points to the setting of the price to "faux" lets in the use of fake timers for capabilities which includes "setTimeout"
 	timers: "real",
	// This configuration shows the Jest to an array of regex expression sample strings which are matched towards all source record paths, matched documents will pass transformation
 	transformIgnorePatterns: [
   	"/node_modules/"
 	],
	// This configuration factors to the glob patterns Jest uses to detect test files
 	testMatch: [
   	"**/__tests__/**/*.js?(x)",
   	"**/?(*.)+(spec|test).js?(x)"
 	],
	// This configuration indicates the Jest to an array of regexp pattern strings that are matched towards all test paths, matched tests are skipped
 	testPathIgnorePatterns: [
   	"/node_modules/"
 	],
	// This property shows that an array of regexp sample strings used to skip the test coverage collection
 	coveragePathIgnorePatterns: [
   	"/node_modules/"
 	], 
	// It indicates that a list of reporter names that Jest makes use of whilst writing coverage reports
 	coverageReporters: [
   	"json",
   	"text",
   	"lcov",
   	"clover"
 	],
	// It indicates an array of directory names to be searched recursively up from the requiring module's location
 	moduleDirectories: [
   	"node_modules"
 	],
	// This configuration shows the  Jest testing framework whether or not each separate test cases should be reported during the executed test run
 	verbose: true,
	 // This configuration indicates Jest testing framework  to the course of a custom resolver
 	resolver: null,
	 // It indicates that each one imported modules in the tests must be mocked automatically
 	automock: false,
	 // It indicates the "browser" field in package.Json when resolving modules
 	browser: false,
	 // This configuration indicates the Jest which take a look at  test environment it need to use for the testing run
 	testEnvironment: "jest-environment-jsdom"
  };