CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;


CREATE TABLE employees(
	ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT 
);


USE employeeTracker_db;


CREATE TABLE roles (
ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
title VARCHAR(50) NOT NULL,
salary DECIMAL (10,2) NOT NULL,
department_id INT NOT NULL
FOREIGN KEY (department_id) REFERENCES (department_id)

);


USE employeeTracker_db;


CREATE TABLE departments (
ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL
);