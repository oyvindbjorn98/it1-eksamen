USE mobilbutikken;

CREATE TABLE produkter (
	id INT UNSIGNED AUTO_INCREMENT,
	merke VARCHAR(32) NOT NULL,
	modell VARCHAR(32) NOT NULL,
	bilde VARCHAR(256) NOT NULL,
	pris FLOAT,
	beskrivelse VARCHAR(5000),
	PRIMARY KEY (id)
);