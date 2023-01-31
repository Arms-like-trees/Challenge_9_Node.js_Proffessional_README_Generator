let title = ''

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your Project Title?',
            name: 'title',
          //  validate: titleInput = title ? console.log('Please enter your project title!')
        },
        {
            type: 'input',
            message: 'What was your motivation?  Why did you build this project?',
            name: 'description1'
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'description2'
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'description3'
        },
      
    ])

;

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
