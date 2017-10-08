module.exports = function burger(sequelize, DataTypes) {
	const  Burger = sequelize.define('Burger', {
		'name': DataTypes.STRING,
		'devoured': DataTypes.BOOLEAN
	});
	return Burger;
}