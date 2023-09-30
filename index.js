// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utilities/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub Username?",
        name: 'username',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please provide a valid GitHub username.")
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your e-mail address?",
        name: 'email',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please provide a valid e-mail address.")
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repository?",
        name: 'repo',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please provide a valid repository name.")
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please provide a valid project title.")
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please provide a valid project description.")
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please provide installation instructions.",
        name: 'install',
    },
    {
        type: 'input',
        message: "Please provide project usages.",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Please provide contribution guidelines for other users.",
        name: 'contribute',
    },
    {
        type: 'input',
        message: "Provide any tests written or used for your project.",
        name: 'test',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Apache', 'GNU', 'GPL v3', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost', 'CreativeCommons 0', 'Eclipse', 'GNU AGPL', 'GNU GPL v2', 'GNU LGPL', 'Mozilla', 'Unlicense'],
        name: 'license',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            return console.log(err);
        }
        console.log("README creation was a success!")
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        const fileName = 
        answers.title
        .split('')
        .join('') + '.md';
        writeToFile(fileName, answers);
    }
    
    );

}

// Function call to initialize app
init();