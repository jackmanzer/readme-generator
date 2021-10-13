// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//an array of questions for user input
const questions = [
    {type: 'input', message: "What is your project's title?", name: 'title'},
    {type: 'input', message: "Describe your project...", name: 'description'},
    {type: 'input', message: "How is your project installed?", name: 'installation'},
    {type: 'input', message: "What is the usage information for your project?", name: 'usageInformation'},
    {type: 'input', message: "What are your project's contribution guidelines?", name: 'contributionGuidelines'},
    {type: 'input', message: "What are the test instructions for your project?", name: 'testInstructions'}
];

//gathers user input
inquirer
  .prompt([...questions])
  .then((response) => writeToFile('README.md', response));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, (err) => {
        err ? console.error(err) : console.log('readme created!')
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();




//questions 

//1. how should the app be started? 
//2. how do I write markdown 



// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```