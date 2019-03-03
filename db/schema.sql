--Drop the database
DROP DATABASE IF EXISTS burgers_db;
-- Create the burgers database
CREATE DATABASE burgers_db;

USE burgers_db;
-- Create the burger table
CREATE TABLE burgers 
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);