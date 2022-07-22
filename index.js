// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// to do: conditionally render usage, collabs, installation, etc. use if statements.

// user & project questions
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'enter name',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('enter your name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'username',
      message: 'enter github username',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('enter github username');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'enter email address',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('enter email');
          return false;
        }
      }
    },

    // project inquiries
    {
      type: 'input',
      name: 'title',
      message: 'enter project title',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('enter project title');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'liveurl',
      message: 'enter live URL',
    },
    {
      type: 'input',
      name: 'description',
      message: 'enter project description',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('enter description');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'enter command line installation instructions'
    },
    {
      type: 'list',
      name: 'license',
      choices: ['Apache', 'BSD', 'GPL', 'LGPL', 'MIT', 'Microsoft', 'None']
    },
    {
      type: 'input',
      name: 'usage',
      message: 'enter usage information'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'enter contributing guidelines'
    },
    {
      type: 'input',
      name: 'test',
      message: 'enter command line test instructions',
    },
    // confirm table of contents
    {
      type: 'confirm',
      name: 'table',
      message: 'include table of contents?',
      default: true
    }
]

// logic: write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// logic: initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./READMEtest.md", data);
    });
  }

// Function call to initialize app
init();
