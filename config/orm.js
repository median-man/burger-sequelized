// =====================================================
// orm.js
//
// Contains methods to execute mysql commands.
// =====================================================
const Connection = require("./connection.js");

// Query to select all data in table. Returns a promise passing 
// for the selected data.
function selectAll(table) {
	// create a promise
	return new Promise( ( resolve, reject ) => {
		let sql = "SELECT * FROM ??";

		// run query to get all data in table
		Connection.query( sql, table, ( err, data ) => {

			// run rejection callback on error
			if(err) return reject(err);

			// pass data to success callback
			return resolve(data);
		});
	} );
}

// Query to add a burger to the burgers table passing OkPacket data object
// to the success promise. Returns a promise. data is an object where keys 
// correspond to field names and values are the values to place in the fields
function insertOne(table, data) {
	return new Promise( ( resolve, reject ) => {

		// initialize sql statement
		let sql = "INSERT INTO ?? SET ?";

		// run query to get all data in table
		Connection.query( sql, [table, data], ( err, data ) => {
			if(err) return reject(err);
			return resolve(data);
		});
	} );
}

// Query to update the first record found that satisfies a given crieteria. 
// Returns a promise.
// PARAMETERS:
// 		table: name of the table
// 		where: object containing criteria. keys must correspond to field names.
// 		data: object with values to set. keys must correspond to field names.
function updateOne(table, where, data) {
	return new Promise( ( resolve, reject ) => {
		
		// initialize sql statement
		let sql = "UPDATE ?? SET ? WHERE ? LIMIT 1";

		// run query to get all data in table
		Connection.query( sql, [table, data, where], ( err, data ) => {
			if(err) return reject(err);
			return resolve(data);
		});
	} );
}

module.exports = {
	selectAll: selectAll,
	insertOne: insertOne,
	updateOne: updateOne
};