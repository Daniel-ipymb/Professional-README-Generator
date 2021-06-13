// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const questions = [
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
    message: "If applicable, describe the steps required to install your project for the Installation section.",
    name: 'installation'
  },
  {
    type: 'input',
    message: "Provide instructions and examples of your project in use for the Usage section.",
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
]

const generateMarkdown = (response) =>
`# ${response.title}

## Table of Contents

* [Description](#Project Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)
* [Username](#Username)
* [Email](#Email)

## Description
 ${response.description}

## Installation
 ${response.installation}

## Usage
 ${response.usage}

## Contributions
 ${response.contributing}

## Tests
 ${respomse.tests}

## License
 ${response.license}

## Questions

## Github Username 
 ${response.Username}

* [Github Link](https://github.com/${response.Username})

## Email address
For additional questions reach me at: ${response.Email}`

  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => 
  err ? console.log(error) : console.log('success! Your READMe has been generated.')
)}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((response) => writeFileAsync('Markdown', generateMarkdown(response)))
}

// Function call to initialize app
init();
