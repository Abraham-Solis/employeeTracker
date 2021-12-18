const inquirer = require('inquirer');
const { prompt } = require("inquirer");
const cTable = require('console.table');
const mysql = require('mysql2')
const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/employeetracker_db')




const mainPrompt = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: ['View Departments', 'View Roles', 'View Employees', 'Add a Department', 'Add a Employee', 'Add a Role', 'Update Employee Roles']
    },
  ])

    .then(({ choice }) => {

      switch (choice) {
        case 'View Departments':
          seeDepartments()

          break;


        case 'View Roles':
          seeRoles()
          break;

        case 'View Employees':
          seeEmployees()
          break;

        case 'Add a Department':
          addDepartment()
          break;
      }



    })

}


mainPrompt()

//VIEW Functions for ALL employees

function seeEmployees() {
  db.query('SELECT * FROM employees', (err, employees) => {
    if (err) { console.log(err) }
    console.table(employees)
  })
}


//VIEW Functions for ALL roles 
function seeRoles() {
  db.query('SELECT * FROM roles', (err, roles) => {
    if (err) { console.log(err) }
    console.table(roles)
  })
}


//VIEW Functions for ALL departments

function seeDepartments() {
  db.query('SELECT * FROM departments', (err, departments) => {
    if (err) { console.log(err) }
    console.table(departments)
  })
}


//ADD Functions for Employees 

function addEmployees(newEmployee) {
  db.query('INSERT INTO employees SET ?', newEmployee, err => {
    if (err) { console.log(err) }
    console.log('You made an Employee!')
  })
}


//ADD Functions for Role

function addRole(newRole) {
  db.query('INSERT INTO roles SET ?', newRole, err => {
    if (err) { console.log(err) }
    console.log('You added a Role!')
  })
}

//ADD Functions for Department

function addDepartment() {
  inquirer.prompt 
  db.query('INSERT INTO departments SET ?', newDepartment, err => {
    if (err) { console.log(err) }
    console.log('You added a Department!')
  })
}


//Update Roles for Employees

function updateRole(newRole) {
  db.query('UPDATE employees SET ? WHERE ? ', newRole, err => {
    if (err) { console.log(err) }
    console.log('You updated their Role!')
  })
}

