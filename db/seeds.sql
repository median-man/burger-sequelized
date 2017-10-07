-- Queries to populate the burgers table with entries (at least 3)
USE burgers_db;
INSERT INTO burgers (burger_name, devoured, date) 
VALUES 
	('The Texas Squealer', false, CURRENT_TIMESTAMP),
	('Guiness Burger', false, CURRENT_TIMESTAMP),
	('Tuna Burger', false, CURRENT_TIMESTAMP);