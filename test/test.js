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

		describe('burger.add method', function() {
			it('passing "tasty" creates a new burger where { name: tasty, devoured: false }', function(done) {
				const name = 'tasty';
				burger
					.add(name)
					.then((result) => {
						expect(result).to.include({ name: name, devoured: false });
						done();
					})
					.catch(done);
			});
			it('passing ("Cali Burger", true) creates a new burger where { name: tasty, devoured: true }', function(done) {
				const name = 'Cali Burger';
				burger
					.add(name, true)
					.then((result) => {
						expect(result).to.include({ name: name, devoured: true });
						done();
					})
					.catch(done);
			});
			it('passing ("") will throw an error', function(done) {
				const name = '';
				burger
					.add(name, true)
					.then((result) => {
						done(`Promise was unexpectedly fullfilled! result is an instance of ${typeof result}`);
					})
					.catch(() => { done(); });
			});
		});

		describe('burger.getAllBurgers method', function() {
			it('returns empty array if there are no burgers', function(done) {
				burger
					.getAllBurgers()
					.then((result) => {
						expect(result).to.be.an('array');
						expect(result.length).to.equal(0);
						done();
					})
					.catch(done);
			});

			// add 3 burgers then test result of getAllBurgers method
			it('returns array of 3 burgers', function(done) {
				burger.add('Mammoth')
					.then(()=> { return burger.add('Brian Head'); })
					.then(()=> { return burger.add('Kirkwood'); })
					.then(burger.getAllBurgers)
					.then((result) => {
						expect(result).to.be.an('array');
						expect(result.length).to.equal(3);
						done();
					})
					.catch(done);
			});
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
