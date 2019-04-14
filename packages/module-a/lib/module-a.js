'use strict';

const core = require('@xizhouh/lerna-quick-start-core');

module.exports = moduleA;

function moduleA() {
    core();
    console.log('module-a');
}
