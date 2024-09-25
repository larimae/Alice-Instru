// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information for your project:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines for your project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions for your project:'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'BSD-3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide any additional questions or concerns for your project:'
    },
    {
        type: 'confirm',
        name: 'generateReadme',
        message: 'Would you like to generate a README file?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return;
        }
        console.log('README file has been generated successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile('README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
