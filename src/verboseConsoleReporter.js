const ConsoleReporter = require('lab/lib/reporters/console.js');

const NEW_LINE = '\n';
const PADDING = '  ';

function getColorFunction(test, colors) {
  if (test.err) { return colors.red; }
  if (test.todo) { return colors.magenta; }
  if (test.skipped) { return colors.magenta; }
  return colors.green;
}

let currentPath = [];

class VerboseConsoleReporter extends ConsoleReporter {
  test(test) {
    let currentPadding = '';
    let newPath = false;

    if (this.settings.progress === 0) {
      return;
    }

    if (this.settings['silent-skips'] && (test.skipped || test.todo)) {
      return;
    }

    if (this.settings.progress === 1) {
      const color = getColorFunction(test, this.colors);
      const { path } = test;

      path.forEach((pathSegment, index) => {
        if (currentPath[index] !== pathSegment || newPath) {
          if (index === 0) {
            this.report(NEW_LINE);
            newPath = true;
          }

          this.report(currentPadding + this.colors.gray(pathSegment) + NEW_LINE);
        }
        currentPadding += PADDING;
      });

      currentPath = path;

      this.report(color(currentPadding + test.relativeTitle + NEW_LINE));

      if (test.err && test.err.message) {
        color(PADDING + test.err.message + NEW_LINE);
      }
    }
  }
}

module.exports = VerboseConsoleReporter;
