// ==============================================================
// DEPENDENCIES
// ==============================================================
const Express = require("express");
const BodyParser = require("body-parser");
const MethodOverride = require("method-override");
const Exphbs = require("express-handlebars");
const Routes = require("./controllers/burgers_controller.js");
const db = require("./models");

let app = Express();
let PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(Express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(BodyParser.urlencoded({ extended: false }));

// implement method override middleware
app.use(MethodOverride("_method"));

// Setup Handlebars
app.engine("handlebars", Exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// connecting router
app.use("/", Routes);

// connect to mysql and start server listening
db.sequelize
	.sync( {logging: false })
	.then( () => {
		app.listen(PORT, () => {
			console.log("Server listening on: http://localhost:%s", PORT);
		});
	})
	.catch( reason => {
		throw reason;
	});