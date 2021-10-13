// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function assignLicenseLink(license) {
  
  let licenseLink;

  switch(license){
    case 'Apache License 2.0': 
      licenseLink = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      break;
    case 'MIT License':
      licenseLink = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      break;
    case 'Creative Commons Zero v1.0 Universal': 
      licenseLink = "![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)"
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
        `## Description\n` +
        `${data.description}\n` +
        `## Installation\n` +
        `${data.installation}\n` +
        `## Usage\n` +
        `${data.usageInformation}\n` +
        `## Contributing\n` +
        `${data.contributionGuidelines}\n` +
        `## Tests\n` +
        `${data.testInstructions}\n` +
        `## License\n` +
        `${licenseBadge}\n`
}

module.exports = generateMarkdown;
