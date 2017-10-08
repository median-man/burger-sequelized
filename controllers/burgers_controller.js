// =====================================================
// DEPENDENCIES
// =====================================================

const Express = require("express");
const db = require("../models"); // model
const Burger = db.Burger;

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
	Burger.devour(parseInt(req.params.id))
		.then(Burger.getAllBurgers)
		.then( result => {
		})
		.then( () => { res.redirect("/"); } )
		.catch( (reason) => { throw reason; } );
}

// Displays the main page including burgers and add burger form
function renderMain(response) {
	Burger.getAllBurgers()
		.then((burgers) => {
			burgers = burgers.map( el => {
				return {
					id: el.id,
					burger_name: el.name,
					devoured: el.devoured
				};
			} )
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