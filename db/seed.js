// *** USE WITH EXTREME CAUTION *** //
// ALL DATA WILL BE ERASED IN BURGERS_DB //
// Running this script will drop all tables and seed the database
// with three records in the burger table.

const db = require('../models');

// sync the db forcing all tables to be dropped
module.exports = db.sequelize.sync({ 
	logging: false,
	force: true })
	.then(() => {
		return db.Burger
			.bulkCreate([
				{ name: 'The Texas Squealer' },
				{ name: 'Guiness Burger' },
				{ name: 'Tuna Burger' }
			]);
	});
