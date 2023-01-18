CREATE DATABASE IF NOT EXISTS userTest;
USE userTest;
CREATE TABLE userdata(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) DEFAULT NULL,
    weapons VARCHAR(500) DEFAULT "fists",
    stage VARCHAR(500) DEFAULT "City",
    chest VARCHAR(500) DEFAULT "parchment"
);