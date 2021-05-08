module.exports = {
  lint: true,
  reporter: ["console", "html", "lcov", "json"],
  output: [
    "stdout",
    "coverage/coverage.html",
    "coverage/lcov.info",
    "coverage/data.json",
  ],
  pattern: "spec",
  globals: "globalThis,FinalizationRegistry,WeakRef",
};
