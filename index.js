const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers) {

  const chosenShape = answers.shape;

  let svgLogo = '';
  svgLogo = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgLogo += '<g>';

  svgLogo += `${answers.shape}`;

  let svgShape;
  switch (chosenShape) {
    case 'Triangle':
      svgShape = new Triangle();
      svgLogo += `<polygon points="150,10 270,180 30,180" fill="${answers.shapeColor}"/>`;
      break;
    case 'Square':
      svgShape = new Square();
      svgLogo += `<rect x="45" y="40" width="200" height="200" fill="${answers.shapeColor}"/>`;
      break;
    case 'Circle':
      svgShape = new Circle();
      svgLogo += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
      break;
  }
  
  svgLogo += `<text x="150" y="130" font-size="50" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;

  svgLogo += '</g>';
  svgLogo += '</svg>';

  fs.writeFile(fileName, svgLogo, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg!!!");
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
        message: 'Please enter a hexadecimal number or a color name for the background color of the shape:',
        name: "shapeColor",
      },
      {
        type: 'input',
        message: `Please enter up to 3 characters for the logo:`,
        name: 'text',
      },
      {
        type: 'input',
        message: 'Please Enter a hexadecimal number or a color name for the color of the three characters:',
        name: "textColor",
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

