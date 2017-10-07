// =====================================================
// DEPENDENCIES
// =====================================================

const Express = require("express");
const Burger = require("../models/burger.js"); // model

// =====================================================
// ROUTE HANDLERS
// =====================================================

// Handles a post request to add a new burger to the db.
function addBurger(req, res) {
	Burger.add(req.body.burger_name)
		.then( () => { res.redirect("/"); })
		.catch( (reason) => {
			// an error occured adding the burger. quietly reload the page.
			res.redirect("/");
		});		
}

// Handles a put request to devour a burger and redirects to root.
function devourBurger(req, res) {
	Burger.devour(req.params.id)
		.then( () => { res.redirect("/"); } )
		.catch( (reason) => { throw reason; } );
}

// Displays the main page including burgers and add burger form
function renderMain(response) {
	Burger.getAllBurgers()
		.then((burgers) => {

			// render the page
			response.render("index", { burgers: burgers });
		});
}

// =====================================================
// ROUTING
// =====================================================

let router = Express.Router();

// main view
router.get("/", (req, res) => { renderMain(res); });

// add burger
router.post("/", addBurger);

// devour api
router.put("/:id", devourBurger);

// export router
module.exports = router;