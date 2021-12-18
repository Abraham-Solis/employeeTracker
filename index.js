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
      choices: ['View Departments', 'View Roles', 'View Employees', 'Add a Department', 'Add an Employee', 'Add a Role', 'Update Employee Roles']
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

        case 'Add an Employee':
          addEmployees()
          break;

        case 'Add a Role':
          addRole()
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
    mainPrompt()
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

function addEmployees() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Please enter employees First Name'


    },

    {
      type: 'input',
      name: 'last_name',
      message: 'Please enter employees Last Name'

    },

    {
      type: 'input',
      name: 'role_id',
      message: 'Please enter employees Role ID'

    },

    {
      type: 'input',
      name: 'manager_id',
      message: 'Please enter employees Manager ID'

    }
  ])

    .then(newEmployee => {
      console.log(newEmployee)
      db.query('INSERT INTO employees SET ?', newEmployee, err => {
        if (err) { console.log(err) }
        console.log('You made an Employee!')
        mainPrompt()
      })
    })
}


//ADD Functions for Role

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please enter employees Title'


    },

    {
      type: 'input',
      name: 'salary',
      message: 'Please enter employees Salary'

    },

    {
      type: 'input',
      name: 'department_id',
      message: 'Please enter employees Role ID'

    }

  ])
    .then(newRole => {
      console.log(newRole)
      db.query('INSERT INTO roles SET ?', newRole, err => {
        if (err) { console.log(err) }
        console.log('You added a Role!')
        mainPrompt()
      })
    })
}

//ADD Functions for Department

function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please name a New Department.'
    }

  ])

    .then(newDepartment => {
      console.log(newDepartment)
      db.query('INSERT INTO departments SET ?', newDepartment, err => {
        if (err) { console.log(err) }
        console.log('You added a Department!')
        mainPrompt()
      })
    })
}


//Update Roles for Employees

function updateRole(newRole) {
  db.query('UPDATE employees SET ? WHERE ? ', newRole, err => {
    if (err) { console.log(err) }
    console.log('You updated their Role!')
  })
}

