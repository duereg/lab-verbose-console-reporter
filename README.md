# Lab Verbose Console reporter

[![npm](https://img.shields.io/npm/v/lab-verbose-console-reporter.svg)](https://www.npmjs.com/package/lab-verbose-console-reporter)
[![Build status](https://img.shields.io/travis/antipin/lab-verbose-console-reporter/master.svg)](https://travis-ci.org/antipin/lab-verbose-console-reporter)
[![David](https://img.shields.io/david/antipin/lab-verbose-console-reporter.svg)](https://david-dm.org/antipin/lab-verbose-console-reporter)
[![David](https://img.shields.io/david/dev/antipin/lab-verbose-console-reporter.svg)](https://david-dm.org/antipin/lab-verbose-console-reporter/#info=devDependencies&view=table)

[lab](https://github.com/hapijs/lab) are [hapi](https://github.com/hapijs/hapi) together.


## Install

```npm install --save-dev lab-verbose-console-reporter```

## Usage

```lab --reporter lab-verbose-console-reporter```

## Caveats

If your lab test runner fails with error ```Error: Cannot find module 'lab-verbose-console-reporter'``` you can try to use full path to the reporter:

```lab --reporter ./node_modules/lab-verbose-console-reporter/src/verbose-console.js```
