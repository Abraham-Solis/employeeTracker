const inquirer = require('inquirer');
const { prompt } = require("inquirer");
const cTable = require('console.table');
const db = require('./db');






async function intialPrompt () {
  const {data:employee} = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices:['']
    },
  ]);
}
