process.env.NODE_ENV = process.argv[2];

// dependencies
const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

// application modules
const seed = require('./seed.js');



describe('seed module', function() {
	it('should export a seed method by default', function() {
		expect(seed).to.be.a('function', `seed is a ${typeof seed}`);
	});
});
const db = require('../models');

// define globals for eslint
/* global describe, beforeEach, afterEach, it, expect */
