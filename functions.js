const mysql = require('mysql2')

//VIEW Functions for ALL employees
function seeEmployees = () => {
db.query('SELECT * FROM employees', (err, employees) => {
  if (err) { console.log(err) }
  console.log(employees)
})
}


//VIEW Functions for ALL roles 
function seeRoles = () => {
  db.query('SELECT * FROM roles', (err, roles) => {
    if (err) { console.log(err) }
    console.log(roles)
  })
}


//VIEW Functions for ALL departments

function seeDepartments = () => {
  db.query('SELECT * FROM departments', (err, departments) => {
    if (err) { console.log(err) }
    console.log(departments)
  })
}


//ADD Functions for Employees 

function addEmployees = (newEmployee) => {
  db.query('INSERT INTO employees SET ?', newEmployee, err => {
    if (err) { console.log(err) }
    console.log(newEmployee)
  })
}


//ADD Functions for Role

function addRole = (newRole) => {
  db.query('INSERT INTO employees SET ?', newRole, err => {
    if (err) { console.log(err) }
    console.log(newRole)
  })
}

//ADD Functions for Department

function addDepartment = (newDepartment) => {
  db.query('INSERT INTO employees SET ?', newDepartment, err => {
    if (err) { console.log(err) }
    console.log(newDepartment)
  })
}


