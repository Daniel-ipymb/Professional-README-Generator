// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

## Table of Contents

* [Project Description](#Description)
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
 ${response.tests}

## License
 ${response.license}

## Questions

## Github Username 
 ${response.Username}

* [Github Link](https://github.com/${response.Username})

## Email address
For additional questions reach me at: ${response.Email}`;
}

module.exports = generateMarkdown;
