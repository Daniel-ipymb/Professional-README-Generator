// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const writeFileAsync = util.promisify(writeToFile);


// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
    default: 'Project Title',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid project title is required.");
        }
        return true;
    }
    },
    {
    type: 'input',
    message: "Give a short description of your project including your motivations and reason for building the project",
    name: 'description',
    default: 'Project Description',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid project description is required.");
        }
        return true;
    }
    },
    {
    type: 'input',
    message: "If applicable, describe the steps required to install your project?",
    name: 'installation'
    },
    {
    type: 'input',
    message: "Provide instructions and examples of your project?",
    name: 'usage'
    },
    {
    type: 'input',
    message: "If applicable, provide guidelines on how other developers can contribute to your project.",
    name: 'contributing'
    },
    {
    type: 'input',
    message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
    name: 'tests'
    },
    {
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
    },
    {
    type: 'input',
    message: 'What is your Github Username?',
    name: 'Username'
    },
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'Email'
    },
  ]);
};

const generateMarkdown = (response) =>

  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => 
  err ? console.log(error) : console.log('success! Your READMe has been generated.')
)}
// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
    .then(() => console.log('Your README file has been successfully created'))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
