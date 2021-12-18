const mysql = require('mysql2')

//View Functions for ALL employees
function seeEmployees = () => {
db.query('SELECT * FROM employees', (err, employees) => {
  if (err) { console.log(err) }
  console.log(employees)
})
}


//View Functions for ALL roles 
function seeRoles = () => {
  db.query('SELECT * FROM roles', (err, roles) => {
    if (err) { console.log(err) }
    console.log(roles)
  })
}


//View Functions for ALL departments

function seeDepartments = () => {
  db.query('SELECT * FROM departments', (err, departments) => {
    if (err) { console.log(err) }
    console.log(departments)
  })
}

