module.exports = function(config) {
  config.set({
    files: [{ pattern: "test/test_data/**", mutated: false, included: false }],
    testRunner: "mocha",
    mutator: "typescript",
    transpilers: ["typescript"],
    reporter: ["clear-text", "progress", "baseline"],
    testFramework: "mocha",
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**/*.ts", "!src/**/*.d.ts"]
  });
};
