module.exports = function burger(sequelize, DataTypes) {
	const  Burger = sequelize.define('Burger', {
		'name': {
			type: DataTypes.STRING,
			validate: { notEmpty: true }
		},
		'devoured': {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});

	// Returns a promise for the creation of a new burger
	Burger.add = function add(name, devoured = false) {
		return this.create({ name: name, devoured: devoured});
	} 

	return Burger;
}