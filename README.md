# Lab Verbose Console reporter

[![npm](https://img.shields.io/npm/v/lab-verbose-console-reporter.svg)](https://www.npmjs.com/package/lab-verbose-console-reporter)
[![Build status](https://img.shields.io/travis/duereg/lab-verbose-console-reporter/master.svg)](https://travis-ci.org/duereg/lab-verbose-console-reporter)

[lab](https://github.com/hapijs/lab) are [hapi](https://github.com/hapijs/hapi) together.

A pretty mocha-style console output

```
src/scorers/jobTitleScorer
  ::createScoringFunction
    when project is not provided
      throws
    given a valid project
      and no person
        returns the maximum negative score
      and a person without an overlapping title
        returns no score
      and a person with an overlapping job title
        returns the maximum positive score
      and a person with an overlapping keyword without an overlapping title
        returns a positive score
```

## Install

```npm install --save-dev lab-verbose-console-reporter```

## Usage

```lab --reporter lab-verbose-console-reporter```

## Caveats

If your lab test runner fails with error ```Error: Cannot find module 'lab-verbose-console-reporter'``` you can try to use full path to the reporter:

```lab --reporter ./node_modules/lab-verbose-console-reporter/src/verbose-console.js```
