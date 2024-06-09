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
    message: `Please enter three characters for the logo:`,
    name: 'text'
  },
  {
    type: 'type',
    message: 'Please Enter a hexadecimal number for the color of the three characters:',
    name: "textColor"
  },
]

