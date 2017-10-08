module.exports = function burger(sequelize, DataTypes) {
	const  Burger = sequelize.define("Burger");
	return Burger;
}