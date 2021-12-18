const inquirer = require('inquirer');
const { prompt } = require("inquirer");
const cTable = require('console.table');
const db = require('./db');








 const mainPrompt = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: ['View Departments', 'View Roles', 'View Employees', 'Add a Department', 'Add a Employee', 'Add a Role', 'Update Employee Roles']
    },
  ])

}


mainPrompt()