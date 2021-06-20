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
      return `The license for this project is ${renderLicenseLink(license)}`;
    case "GNU":
      return `The license for this project is ${renderLicenseLink(license)}`;
    case "ISC":
      return `The license for this project is ${renderLicenseLink(license)}`;
    case "MIT":
      return `The license for this project is ${renderLicenseLink(license)}`;
    default:
      return "";
  }
}
 
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}

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
 ${data.description}

## Installation
 ${data.installation}

## Usage
 ${data.usage}

## Contributions
 ${data.contributing}

## Tests
 ${data.tests}

## License
 ${renderLicenseSection(data.license)}

## Questions

## Github Username 
 ${data.Username}

* [Github Link](https://github.com/${data.Username})

## Email address
For additional questions reach me at: ${data.Email}`;
}

module.exports = generateMarkdown;
