// =====================================================
// connection.js
//
// This module contains configuration parameters for
// connecting to the burgers_db and exports the mysql
// connection object for the db.
// =====================================================
const Mysql = require("mysql");

// connection configuration
let config;

// db connection config using JawsDB
if (process.env.JAWSDB_URL) {
	config = process.env.JAWSDB_URL;
}
else {
	// default db config for local db
	config = {
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"
	};
}

// export connection to burgers_db
module.exports = Mysql.createConnection(config);