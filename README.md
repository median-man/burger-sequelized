# Eat Da Burger
A restaurant app that lets users input the names of burgers they would like to eat and track "devoured" burgers.

## Live Demo
coming soon

## Install
[NodeJS](https://nodejs.org/en/) and [MySql](https://www.mysql.com/S) must be installed to run the application on a local machine.

```sh
$ npm install mysql
```
Add a username and password to config/connection.js.
```js
else {
	// default db config for local db
	config = {
		host: "localhost",
		user: "*** DATABASE USERNAME HERE ***",
		password: "*** DATABASE PASSWORD HERE ***",
		database: "burgers_db"
	};
}
```
### Seeding the Database
** CAUTION THIS WILL DESTROY ALL DATA BEFORE ADDING SEEDS **  
run `npm run seed`

### Testing
run `npm test`
Testing coverage includes models and seed modules.

## Frameworks/Libraries Used
* [Express](http://expressjs.com/)
* [handlebars](http://handlebarsjs.com/)
* [MySql2 for Node](https://github.com/mysqljs/mysql)
* [Sequelize](http://docs.sequelizejs.com/)
* [Spectre.css](https://picturepan2.github.io/spectre/index.html)
* [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/) for testing.

## Repository
https://github.com/median-man/burger-sequelized

## Author
John Desrosiers