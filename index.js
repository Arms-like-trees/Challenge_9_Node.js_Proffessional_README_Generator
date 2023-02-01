

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const { default: Choices } = require('inquirer/lib/objects/choices');
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
            message: 'What is your name?',
            name: 'name'
        },// needs validation
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your username?',
            name: 'username'
        },// needs validation
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
        {
            type: 'instalation',
            message: 'What are the steps required to install your project?  Provide a step-by-step description of how to get the development enviroment running.',
            name: 'instalation'
        },
        {
            type: 'input',
            message: 'What is your project used for and how do you use it?',
            name: 'usage'
        },//validate
        // best way to capture input for collaborators and if there are collaborators{
        //     type: 'credits',
        //     message: '',
        //     name: 'credits'
        // },// also can you run an inquirerer inside of an inquirerer?
        {
            type: 'checkbox',
            message: 'What licenses are pertinent?',
            name: 'licenses',
            choices: ['Apache 2.0 License', 'BSD License', 'CeCILL License 2.1',  
            'Eclipse Public License', 'GNU', 'IBM', 'Mit', 'Mozilla', 'JAM', 'Python']
        }, {
            type: 'input',
            message: 'what test can be run to see how the project works??',
            name: 'tests'
        },
        
            //ADD badges

    ])
    .then((response) => {
        let title = response.title;
        console.log(title);
        console.log(response);
        return



    })

    ;

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
