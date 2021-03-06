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
      choices: ['View Departments', 'View Roles', 'View Employees', 'Add a Department', 'Add an Employee', 'Add a Role', 'Update Employee', 'Leave']
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

        case 'Leave':
          leave()
          break;

        case 'Update Employee':
          updateRole()
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
    mainPrompt()
  })
}


//VIEW Functions for ALL departments

function seeDepartments() {
  db.query('SELECT * FROM departments', (err, departments) => {
    if (err) { console.log(err) }
    console.table(departments)
    mainPrompt()
  })
}


//ADD Functions for Employees getting DB key's 'name' needs to be same as DB

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


//ADD Functions for Role  getting DB key's 'name' needs to be same as DB

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

//ADD Functions for Department getting DB key's 'name' needs to be same as DB

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


//Update Roles for Employees (for later)

function updateRole() {
  db.query('SELECT * FROM employees', (err, employees) => {
    if (err) { console.log(err) }
    console.table(employees)
    inquirer.prompt([
      {
        type: 'input',
        message: "Which employee would you like to update? (Enter the first name of the Employee)",
        name: 'first_name'
      },
      {
        type: 'input',
        message: "What is the new Updated Role you would like to apply?",
        name: 'role_id'
      }
    ])
      .then(updateEmployee => {
        db.query('UPDATE employees SET ? WHERE ?', [{ role_id: updateEmployee.role_id }, { first_name: updateEmployee.first_name }], () => {
          if (err) { console.log(err) }
          console.log('Employee Role Updated!')
          mainPrompt()
        })
      })
  })
}

function leave() {
  console.log('Need a moment....')
  setTimeout((function () {
    return process.exit(22);
  }), 1000);
}