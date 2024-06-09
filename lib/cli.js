const inquirer = require('inquirer');
const fs = require('fs')
import { Triangle, Circle, Square} from './lib/shapes.js';

const questions = [
  {
    type: 'list',
    message: `Select the logo's shape:`,
    choices: ['Triangle', 'Square', 'Circle'],
    name: 'shape',
  },
  {
    type: 'type',
    message: 'Please Enter a hexadecimal number for the background color of the shape:',
    name: "shapeColor"
  },
  {
    type: 'type',
    message: `Please enter up to 3 characters for the logo:`,
    name: 'text'
  },
  {
    type: 'type',
    message: 'Please Enter a hexadecimal number for the color of the three characters:',
    name: "textColor"
  },
]

class CLI {
  constructor() {
    this.title = '';
  
    // Array of logo objects 
    this.logo = [];
  }
  run() {
    return inquirer
      .prompt(questions)

      .then((answers) => {
        // checks that text is not more than 3 characters
        if(answers.text.length >3) {
          console.log('Error! Enter 3 characters at most!')
          prompt(questions)
        } else {
            writeToFile("logo.svg", answers)
        };
      });
  }
}

function shapeChoice(shape) {
  switch (shape) {
    case 'Triangle':
      shape = new Triangle();
      `<polygon points="150, 20 223, 182 56, 182" fill="${this.color}">`
    case 'Square':
      shape = new
    case 'Circle':
      shape = new
  }
}

function writeToFile(response) {
  let 
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
}


// async function questionUser() {
//   inquirer
//     .promise(question)

//     .then(writeToFile)
// }

module.exports = CLI;