module.exports = function(config) {
  config.set({
    files: [
      '!bin/**',
      '!src/**/*.ts',
      {
        pattern: "src/**/*.ts",
        mutated: true,
        included: false
      },
      "test/**/*.ts",
      { pattern: "test/test_data/**", mutated: false, included: false }
    ],
    testRunner: "mocha",
    reporter: ["html", "baseline", "clear-text", "progress"],
    testFramework: "mocha",
    coverageAnalysis: "off",
    transpilers: [ 'typescript' ],
    tsconfigFile: 'tsconfig.json',
    mutator: 'typescript',
    loglevel: 'debug'
  });
};
