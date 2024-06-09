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

function writeToFile(fileName, answers) {
  let svgLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeColor}_${shape}_${textColor}_${text} </svg>`;
  let chosenShape;  
  switch (shapeChoice) {
      case 'Triangle':
        chosenShape = new Triangle();
        svgLogo +=`<polygon points="150, 20 223, 182 56, 182" fill="${answers.color}">`
      case 'Square':
        chosenShape = new Square();
        svgLogo +=`<rect x="10" y="10" width="200" height="200" fill="${answers.color}">`
      case 'Circle':
        chosenShape = new Circle();
        svgLogo +=`<circle cx="150" cy="100" r="80" fill="${answers.color}">`
  }
  svgLogo +=  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}"."${answers.text}"  `
}


function questionUser() {
  inquirer
    .promise(questions)

    .then((answers) => {
        // checks that text is not more than 3 characters
        if(answers.text.length >3) {
          console.log('Error! Enter 3 characters at most!')
          prompt(questions)
        } else {
          writeToFile("logo.svg", svgLogo, (err) => {
            err ? console.log(err) : console.log("Your new logo.svg has been created!!!")
          });
        };
    });
};

questionUser();

