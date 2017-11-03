CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect favorite_db --
USE burgers_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE burgers (
  -- Creates a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER(11) AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);