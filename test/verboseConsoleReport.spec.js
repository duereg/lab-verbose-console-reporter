const { expect, before, describe, it } = exports.lab = require('test/testHelper');
const VerboseConsoleReporter = require('src/verboseConsoleReporter');

function basicTestRun() {
  before(({ context }) => {
    context.verboseConsoleReporter.test({});
  });
  it('works', ({ context }) => {
    expect(context.verboseConsoleReporter).to.be.ok;
  });
}

describe('src/verboseConsoleReporter', () => {
  describe('instantiate with no options', () => {
    before(({ context }) => {
      context.verboseConsoleReporter = new VerboseConsoleReporter({});
    });

    it('works', ({ context }) => {
      expect(context.verboseConsoleReporter).to.be.ok;
    });
  });

  describe('instantiate with progress = 0', () => {
    before(({ context }) => {
      context.verboseConsoleReporter = new VerboseConsoleReporter({ progress: 0 });
    });

    it('works', ({ context }) => {
      expect(context.verboseConsoleReporter).to.be.ok;
    });

    describe('running a basic test', basicTestRun);
  });

  describe('instantiate with progress = 1', () => {
    before(({ context }) => {
      context.verboseConsoleReporter = new VerboseConsoleReporter({ progress: 0 });
    });

    it('works', ({ context }) => {
      expect(context.verboseConsoleReporter).to.be.ok;
    });

    describe('running a basic test', basicTestRun);
  });

  describe('instantiate with "silent-skips": true', () => {
    before(({ context }) => {
      context.verboseConsoleReporter = new VerboseConsoleReporter({ 'silent-skips': true });
    });

    it('works', ({ context }) => {
      expect(context.verboseConsoleReporter).to.be.ok;
    });

    describe('running a basic test', basicTestRun);
  });
});
