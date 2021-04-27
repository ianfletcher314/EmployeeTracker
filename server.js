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
      console.log(answer)
      if (answer.choiceEnder === 'View Departments') {
        console.log("do view departments pleaseee")
      }
      if (answer.choiceEnder === 'View Roles') {
        console.log("do View Roles pleaseee")
      }
      if (answer.choiceEnder === 'View Employees') {
        console.log("do 'View Employees' pleaseee")
      }
      if (answer.choiceEnder === 'Add Department') {
        console.log("do 'Add Department' pleaseee")
      }
      if (answer.choiceEnder === 'Add Role') {
        console.log("do'Add Role' pleaseee")
      }
      if (answer.choiceEnder === 'Add Employee') {
        console.log("do 'Add Employee' pleaseee")
      }
      if (answer.choiceEnder === 'Update Employee Role') {
        console.log("do 'Update Employee Role' pleaseee")
      }
      if (answer.choiceEnder === 'EXIT') {
        console.log('EXIT')
      }
    });
};
// In this section put all of the functionality for the choices in :21 ie viewDepartments, updateEmployee etc.
// these functions will  run a serries of SQL querries using innerjoin leftjoin outer join 
// etc to combine the tables I have created and present them to the user using console.table


// View Functions 

// Add Functions 




// This is where the connection to mysql is made and where start function is called 
connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  console.log("thankGoditsworking");
  start();
});



