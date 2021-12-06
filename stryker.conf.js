/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  _comment:
    "This config was generated using a preset. Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/vuejs.md#vuejs",
  disableTypeChecks: "{tests,src,lib}/**/*.{js,ts,jsx,tsx,html,vue}",
  mutate: [
    "src/**/*.{ts,vue}",
    "!src/main.ts",
    "!src/registerServiceWorker.ts",
  ],
  testRunner: "jest",
  mutator: {
    plugins: [],
  },
  reporters: ["progress", "clear-text", "html"],
  coverageAnalysis: "off",
};
