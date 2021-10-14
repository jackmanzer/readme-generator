// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function assignLicenseLink(license) {
  
  let licenseLink;

  switch(license){
    case 'MIT':
      licenseLink = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      break;
    case 'APACHE 2.0': 
      licenseLink = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      break;
    case 'GPL 3.0': 
      licenseLink = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case 'BSD 3': 
      licenseLink = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;
    default: 
      licenseLink = '';    
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseBadge = assignLicenseLink(data.license);

  return `# ${data.title}\n` +
        `${licenseBadge}\n` + 
        `## Description\n` +
        `${data.description}\n` +
        `## Table of Contents\n` +
        `* [Installation](#installation)\n` + 
        `\n` +
        `* [Usage](#usage)\n` + 
        `* [License](#license)\n` + 
        `* [Contributing](#contributing)\n` + 
        `* [Tests](#tests)\n` + 
        `* [Questions](#questions)\n` + 
        `\n` +
        `## Installation\n` +
        `    ${data.installation}\n` +
        `\n` +
        `## Usage\n` +
        `${data.usageInformation}\n` +
        `\n` +
        `## License\n` +
        `${licenseBadge}\n` +
        `\n` +
        `## Contributing\n` +
        `${data.contributionGuidelines}\n` +
        `\n` +
        `## Tests\n` +
        `    ${data.testInstructions}\n` +
        `\n` +
        `## Questions\n` + 
        `If you have any questions about the repo, open an issue or contact medirectly at ${data.email}. You can find more of my work by following this [link](https://github.com/${data.userName}) to my GitHub.`
}

module.exports = generateMarkdown;
