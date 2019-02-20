module.exports = {
  coverage: true,
  threshold: 100,
  lint: true,
  reporter: ['console', 'html', 'lcov', 'json'],
  output: ['stdout', 'coverage/coverage.html', 'coverage/lcov.info', 'coverage/data.json'],
  pattern: "spec"
};
