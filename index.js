const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers) {

  const chosenShape = answers.shape;

  let svgLogo = '';
  svgLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

    let svgShape;
  switch (chosenShape) {
      case 'Triangle':
        svgShape = new Triangle();
        svgLogo += `<polygon points="150, 20 223, 182 56, 182" fill="${answers.color}">`;
        break;
      case 'Square':
        svgShape = new Square();
        svgLogo += `<rect x="10" y="10" width="200" height="200" fill="${answers.color}">`;
        break;
      case 'Circle':
        svgShape = new Circle();
        svgLogo += `<circle cx="150" cy="100" r="80" fill="${answers.color}">`;
        break;
      }
  
  svgLogo += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`

  fs.writeFile(fileName, svgLogo, (err) => {
    err ? console.log(err) : console.log("Your new logo.svg has been created!!!");
  });
}

function questionUser() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: `Select the logo's shape:`,
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape',
      },
      {
        type: 'input',
        message: 'Please Enter a hexadecimal number for the background color of the shape:',
        name: "shapeColor",
        default: '#7851a9',
      },
      {
        type: 'input',
        message: `Please enter up to 3 characters for the logo:`,
        name: 'text',
        default: 'MWH',
      },
      {
        type: 'input',
        message: 'Please Enter a hexadecimal number for the color of the three characters:',
        name: "textColor",
        default: '#F5BD02'
      },
    ] )

    .then((answers) => {
        // checks that text is not more than 3 characters
        if(answers.text.length > 3) {
          console.log('Error! Enter 3 characters at most!');
          questionUser();
        } else {
          writeToFile("logo.svg", answers);
        }
      });
}

questionUser();

