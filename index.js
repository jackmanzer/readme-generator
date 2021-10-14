// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//an array of questions for user input
const questions = [
    {type: 'input', message: "What is your Github?", name: 'userName'},
    {type: 'input', message: "What is your email address?", name: 'email'},
    {type: 'input', message: "What is your project's title?", name: 'title'},
    {type: 'input', message: "Describe your project...", name: 'description'},
    {type: 'list', name: 'license', message: 'Please choose a license', choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']},
    {type: 'input', message: "What command should be used to install your dependencies?", name: 'installation'},
    {type: 'input', message: "What command should be used to run tests?", name: 'testInstructions'},
    {type: 'input', message: "What does the user need to know about contributing to the repo?", name: 'contributionGuidelines'},
    {type: 'input', message: "What does the user need to know about using the repo?", name: 'testInstructions'}
];

//gathers user input
inquirer
  .prompt([...questions])
  .then((response) => writeToFile('README.md', response));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, (err) => {
        err ? console.error(err) : console.log('Generating README...')
    });
}