/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  _comment:
    "This config was generated using a preset. Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/vuejs.md#vuejs",
  mutate: [
    "src/**/*.{ts,vue}",
    "!src/main.ts",
    "!src/registerServiceWorker.ts"
  ],
  testRunner: "jest",
  mutator: {
    plugins: []
  },
  jest: {
    config: {
      globals: {
        "ts-jest": {
          diagnostics: false
        }
      }
    }
  },
  reporters: ["progress", "clear-text", "html"],
  coverageAnalysis: "off"
};
