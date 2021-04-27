const mysql = require('mysql2')
const inquirer = require('inquirer')
require('dotenv').config()
const consoleTable = require('console.table')


// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'etracker_db'
});
// start function is launched when server is connected to. It prompts the user with the questions 
const start = () => {
  inquirer
    .prompt({
      name: 'choiceEnder',
      type: 'list',
      message: 'What would you like to do',
      choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee',
        'Update Employee Role', 'EXIT'],
    })

    .then((answer) => {
      // based on their answer, either call the bid or the post functions
      console.log(answer,"is coming through")
      if (answer.choiceEnder === 'View Departments') {
        viewDepartmentsFunction(answer)
      }
      if (answer.choiceEnder === 'View Roles') {
        viewRolesFunction(answer)
      }
      if (answer.choiceEnder === 'View Employees') {
        viewEmployeesFunction(answer)
      }
      if (answer.choiceEnder === 'Add Department') {
        addDepartmentsFunction(answer)
      }
      if (answer.choiceEnder === 'Add Role') {
        addRolesFunction(answer)
      }
      if (answer.choiceEnder === 'Add Employee') {
        addEmployeesFunction(answer)
      }
      if (answer.choiceEnder === 'Update Employee Role') {
        updateEmployeeRoleFunction(answer)
      }
      if (answer.choiceEnder === 'EXIT') {
        exitFunction(answer)
      }
    });
};
// In this section put all of the functionality for the choices in :21 ie viewDepartments, updateEmployee etc.
// these functions will  run a serries of SQL querries using innerjoin leftjoin outer join 
// etc to combine the tables I have created and present them to the user using console.table


// View Functions 
const viewDepartmentsFunction = (answer) => {
  console.log(answer," view dept function")
  start()
}
const viewRolesFunction = (answer) => {
  console.log(answer, "view Functin ROle")
  start()
}
const viewEmployeesFunction = (answer) => {
  console.log(answer,"view employee function")
  start()
}
const addEmployeesFunction = (answer) => {
  console.log(answer," add employee function")
  start()
}
const addDepartmentsFunction = (answer) => {
  console.log(answer, "add department function")
  start()
}
const addRolesFunction = (answer) => {
  console.log(answer, "add roles function")
  start()
}
const updateEmployeeRoleFunction = (answer) => {
  console.log(answer, "update employee role fuction")
  start()
}
const exitFunction = (answer) => {
  console.log("THANKS FOR STOPPING BY! SEE YOU NEXT TIME! (┛ಠДಠ)┛彡┻━┻ ")
}
// Add Functions 




// This is where the connection to mysql is made and where start function is called 
connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  console.log("thankGoditsworking");
  start();
});



