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

    .then(async (answer) => {
      // based on their answer, we filter them to functions that corespond to thier choice bellow.
      console.log(answer, "is coming through")
      if (answer.choiceEnder === 'View Departments') {
        await viewDepartmentsFunction();
        start()
      } else if (answer.choiceEnder === 'View Roles') {
        await viewRolesFunction(answer)
        start()
      } else if (answer.choiceEnder === 'View Employees') {
        await viewEmployeesFunction(answer)
        start()
      } else if (answer.choiceEnder === 'Add Department') {
        await addDepartmentsFunction(answer)
        start()
      } else if (answer.choiceEnder === 'Add Role') {
        await addRolesFunction(answer)
        start()
      } else if (answer.choiceEnder === 'Add Employee') {
        await addEmployeesFunction(answer)
        start()
      } else if (answer.choiceEnder === 'Update Employee Role') {
        await updateEmployeeRoleFunction(answer)
        start()
      } else if (answer.choiceEnder === 'EXIT') {
        await exitFunction(answer)
        start()
      }
    });
};
// In this section put all of the functionality for the choices in :21 ie viewDepartments, updateEmployee etc.
// these functions will  run a serries of SQL querries using innerjoin leftjoin outer join 
// etc to combine the tables I have created and present them to the user using console.table


// this function querries our database for the list of departments and sends it to the waiting viewDepartmentsFunction
const departmentData = () => {
  return new Promise(async (resolve, reject) => {


    let comboArray = []
    connection.query(
      'SELECT * FROM etracker_db.department;',
      function (err, results) {
        // console.log(results,"are working");
        for (let i = 0; i < results.length; i++) {
          // console.log(results[i].name)
          comboArray.push(results[i].name)
        }
        // console.log("this is combo array", comboArray)
        resolve(comboArray)

      })
  })
}
// View Functions 
// this function is waiting for departmentdata() to return. 
const viewDepartmentsFunction = async () => {
  return new Promise (async(resolve,reject) => {
  const departmentDataArray = await departmentData()
  // console.log(departmentDataArray)
  // once it gets the answer it asks which department does the user want to look at
  inquirer
    .prompt({
      name: 'departments',
      type: 'list',
      message: 'What department would you like to view.',
      choices: departmentDataArray,
    })
    // once they answer we query our database for a list of employees in the department they want
    .then((data) => {
      connection.query(`SELECT CONCAT (employee.first_name, " ", employee.last_name) AS employee, 
      role.title 
  FROM employee 
      LEFT JOIN role ON employee.role_id = role.id 
      LEFT JOIN department ON department_id = department.id 
      WHERE department.name = ?`, data.departments,(err,res)=>{
        if (err) throw err
        console.log("\nhere are your results for the department you selected\n\n")
        const departmentResults = console.table(res)
        resolve(departmentResults)
      })
    })
  })


}
const viewRolesFunction = async() => {
  return new Promise (async(resolve,reject) => {
  const departmentDataArray = await departmentData()
  // console.log(departmentDataArray)
  // once it gets the answer it asks which department does the user want to look at
  inquirer
    .prompt({
      name: 'departments',
      type: 'list',
      message: 'What department would you like to view.',
      choices: departmentDataArray,
    })
    // once they answer we query our database for a list of employees in the department they want
    .then((data) => {
      connection.query(`SELECT CONCAT (employee.first_name, " ", employee.last_name) AS employee, 
      role.title 
  FROM employee 
      LEFT JOIN role ON employee.role_id = role.id 
      LEFT JOIN department ON department_id = department.id 
      WHERE department.name = ?`, data.departments,(err,res)=>{
        if (err) throw err
        console.log("\nhere are your results for the department you selected\n\n")
        const departmentResults = console.table(res)
        resolve(departmentResults)
      })
    })
  })


}
const viewEmployeesFunction = (answer) => {
  console.log(answer, "view employee function")
  start()
}
const addEmployeesFunction = (answer) => {
  console.log(answer, " add employee function")
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
  console.log("THANKS FOR STOPPING BY! SEE YOU NEXT TIME!")
}
// Add Functions 




// This is where the connection to mysql is made and where start function is called 
connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  console.log("thankGoditsworking");
  start();
});





// code for get role! 

// .then((data) => {
//   connection.query(`SELECT CONCAT (employee.first_name, " ", employee.last_name) AS employee, 
//   role.title 
// FROM employee 
//   LEFT JOIN role ON employee.role_id = role.id 
//   WHERE role.name = ?
//   LEFT JOIN department ON department_id = department.id 
//  `, data.role,(err,res)=>{
//     if (err) throw err
//     console.log("\nhere are your results for the department you selected\n\n")
//     const departmentResults = console.table(res)
//     resolve(departmentResults)
//   })
// })