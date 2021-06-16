// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case"Apache":
      return `![Apache Badge](https://img.shields.io/badge/License-Apache-blue)`;
      case "GNU":
        return `![GNU Badge](https://img.shields.io/badge/License-GNU-red)`;
      case "ISC":
        return `![ISC Badge](https://img.shields.io/badge/License-ISC-orange)`;
      case "MIT":
        return `![MIT Badge](https://img.shields.io/badge/License-MIT-green)`;
      default:
        return "";
    
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(``)
  switch (license) {
    case "Apache":
      return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
    case "GNU":
      return `[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`;
    case "ISC":
      return `[ISC License](https://choosealicense.com/licenses/isc/)`;
    case "MIT":
      return `[MIT License](https://choosealicense.com/licenses/mit/)`;
    default:
      return "";
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  switch (license) {
    case "Apache":
      return `The license for this project is ${renderLicenseLink(data)}`;
    case "GNU":
      return `The license for this project is ${renderLicenseLink(data)}`;
    case "ISC":
      return `The license for this project is ${renderLicenseLink(data)}`;
    case "MIT":
      return `The license for this project is ${renderLicenseLink(data)}`;
    default:
      return "";
  }
}

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
