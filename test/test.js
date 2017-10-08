process.env.NODE_ENV = process.argv[2];

// dependencies
const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

// application modules
const db = require('../models');
const seed = require('./seed.js');


// test the database connection
describe('db', function() {

	// operations to run after testing db
	after(function(done) {
		// close the connection
		db.sequelize.close();
		done();
	});

	it('should authenticate', function(done) {
		db.sequelize
			.authenticate()
			.then(() => {
				done();
			})
			.catch(done);
	});

	it('should have a Burger model', function() {
		expect(db.sequelize.models).to.have.a.property('Burger');
	});

});



describe('seed module', function() {
	it('should export a seed method by default', function() {
		expect(seed).to.be.a('function', `seed is a ${typeof seed}`);
	});
	// describe('seed method', function() {
	// 	it('seed(')
		// it('should return a Promise', function() {
		// 	const seedPromise = seed();
		// 	expect(seedPromise).to.be.a('Promise', `seed returns a ${typeof seedPromise}`);
		// });
	// });
});

// define globals for eslint
/* global describe, beforeEach, afterEach, it, expect, after */
