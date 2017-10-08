const chai = require('chai');
const { should, expect, assert } = chai;
const seed = require('./seed.js');



describe('seed module', function() {
	it('should export a seed method by default', function() {
		expect(seed).to.be.a('function', `seed is a ${typeof seed}`);
	});
});
const db = require('../models');

// define globals for eslint
/* global describe, beforeEach, afterEach, it, expect */
