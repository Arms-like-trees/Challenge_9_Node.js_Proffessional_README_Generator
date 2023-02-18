

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
            //validation code
            validate: function (input) {
                if (input === "") {
                    return 'Please enter your project title!'
                }
                return true
            }


        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'username',
              //validation code
              validate: function (input) {
                if (input === "") {
                    return 'Please enter your Github username!'
                }
                return true
            }
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
        {
            type: 'instalation',
            message: 'What are the steps required to install your project?  Provide a step-by-step description of how to get the development enviroment running.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What is your project used for and how do you use it?',
            name: 'usage',
              //validation code
              validate: function (input) {
                if (input === "") {
                    return 'Please enter what it is used for.'
                }
                return true
            }
        },
      
        {
            type: 'list',
            message: 'What licenses are pertinent?',
            name: 'licenses',
            choices: ['Apache 2.0 License', 'GNU', 'Mit', 'Mozilla', 'Python']
        }, {
            type: 'input',
            message: 'What test can be run to see how the project works??',
            name: 'tests'
        },

        //ADD badges

    ])
    .then((data) => {
        const sampleReadmePageContent = generateMarkdown(data)


        fs.writeFile('sampleREADME.md', sampleReadmePageContent, (err) => { return err ? console.error(err) : console.log('Success - writfile') })
    })


    ;



