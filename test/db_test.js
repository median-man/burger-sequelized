// this module tests modules found in the db directory

process.env.NODE_ENV = process.argv[2];

// dependencies
const chai = require('chai');
const { expect } = chai;

// application modules
const db = require('../models');

// test seed.js
describe('seed', function() {

	// run seed.js script before tests
	before(function(done) {
		require('../db/seed.js')
		.then(() => { done(); })
		.catch(done);
	});

	// expect to have 3 records added by seed.js
	it('adds 3 burgers to Burger table', function(done) {
		db.Burger
			.count()
			.then( result => {
				expect(result).to.equal(3);
				done();
			})
			.catch(done);
	});
	
});

// define globals for eslint
/* global describe, beforeEach, afterEach, it, expect, after, before */
