const { expect } = require('chai');
const Lab = require('lab');

const lab = Lab.script({ schedule: false });
module.exports = { expect, ...lab };
