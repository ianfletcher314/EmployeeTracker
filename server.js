// require  and constants 
const inquirer = require('inquirer')
require('dotenv').config()
// const sql = require('mysqul2")
// const app = require ('express')
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'etracker_db'
})

connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log("thankGoditsworking");
  });


// array with questions command line app will use


// section where we prompt the list of all questions if the user selects an anser then we run a serries of 
// SQL querries using innerjoin left join outer join etc to combine the tables I have created and present them
// to the user 