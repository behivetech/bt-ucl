'use strict';

const testPackage = require('..');
const assert = require('assert').strict;

assert.strictEqual(testPackage(), 'Hello from testPackage');
console.info('testPackage tests passed');
