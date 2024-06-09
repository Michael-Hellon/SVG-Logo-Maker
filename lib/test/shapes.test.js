// const { describe } = require('node:test')
const { Triangle, Circle, Square} = require('../shapes.js')


// // based off of MOD10 activity 13
describe('Triangle', () => {
  it('should render a triangle', () => {
    const shape = new Triangle();
    var color =('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon points="150, 20 223, 182 56, 182" fill="${color}">`);
  });
});

describe('Circle', () => {
  it('should render a Circle', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="80" fill="${color}">`);
    });
  });
describe('Square', () => {
  it('should render a Square', () => {
    const shape = new Square();
    var color =('green')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="10" y="10" width="200" height="200" fill="${color}">`);
  });
});
