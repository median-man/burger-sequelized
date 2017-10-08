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
	this.timeout(10000);
	
	// syncronize the db before each assertion
	beforeEach(function(done) {
		// force tables to be droped/created. the database name must end with '_test'
		db.sequelize.sync({ logging: false, match: /_test$/, force: true })
			.then(()=> { done(); })
			.catch(done);
	});

	// operations to run after testing db
	after(function(done) {
		// close the connection
		db.sequelize.close();
		done();
	});

	// test db connection and authentication
	it('should connect and authenticate', function(done) {
		db.sequelize
			.authenticate()
			.then(() => {
				done();
			})
			.catch(done);
	});	

	// check for existence of Burger model
	it('should have a Burger model', function() {
		expect(db.sequelize.models).to.have.a.property('Burger');
	});

	// test the Burger model
	const burger = db.Burger;
	describe('burger model', function(done) {

		// get the result of running describe query on the model
		let description;
		before(function(done) {
			burger
				.describe()
				.then((result) => { 
					description = result;
					done(); 
				})
				.catch(done);
		});

		it('has properties for id, name, and devoured', function() {
			expect(description).to.include.all.keys('id', 'name', 'devoured');
		});
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
/* global describe, beforeEach, afterEach, it, expect, after, before */
