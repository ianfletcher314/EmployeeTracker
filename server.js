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

  const start = () => {
    inquirer
      .prompt({
        name: 'choiceEnder',
        type: 'list',
        message: 'What would you like to do',
        choices: ['View Departments', 'View Roles', 'View Employees','Add Department','Add Role','Add Employee',
        'Update Employee Role','EXIT'],
      })
      .then((answer) => {
        // based on their answer, either call the bid or the post functions
       console.log(answer)
      });
  };

connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log("thankGoditsworking");
    start();
  });


// array with questions command line app will use


// section where we prompt the list of all questions if the user selects an anser then we run a serries of 
// SQL querries using innerjoin left join outer join etc to combine the tables I have created and present them
// to the user 