# Eat Da Burger
A restaurant app that lets users input the names of burgers they would like to eat and track "devoured" burgers.

## Live Demo
https://eat-da-burgs.herokuapp.com/

## Install
[NodeJS](https://nodejs.org/en/) and [MySql](https://www.mysql.com/S) must be installed to run the application on a local machine.

```sh
$ npm install mysql
```
Use the files found in the 'db' directory to setup the schema and seed the burgers_db MySql database.

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
## Frameworks/Libraries Used
* [Express](http://expressjs.com/)
	* [body-parser](https://www.npmjs.com/package/body-parser)
	* [method-override](https://www.npmjs.com/package/body-parser)
	* [express-handlebars](https://github.com/ericf/express-handlebars)
* [handlebars](https://github.com/mysqljs/mysql)
* [MySql for Node](http://handlebarsjs.com/)
* [Spectre.css](https://picturepan2.github.io/spectre/index.html)

## Repository
https://github.com/median-man/burgers

## Author
John Desrosiers