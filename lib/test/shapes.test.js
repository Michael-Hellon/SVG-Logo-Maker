const { describe } = require('node:test')
const Shape = require('../shapes.js')

// based off of MOD10 activity 13
describe('Shape', () => {
  describe('Triangle', () => {
    it('should render a triangle', () => {
        const color = 'green'
        const triangle = new Shape.Triangle(color)
        expect(triangle.render().toEqual(`<polygon points="150, 20 223, 182 56, 182" fill=${color} />`))
    })
  })
  describe('Circle', () => {
    it('should render a Circle', () => {
        const color = 'green'
        const circle = new Shape.Circle(color)
        // circle properties taken from '../../assets/circle.svg'.
        expect(circle.render().toEqual(`<circle cx="150" cy="100" r="80" fill=${color} />`))
    })
  })
  describe('Square', () => {
    it('should render a Square', () => {
        const color = 'green'
        const square = new Shape.Square(color)
        expect(square.render().toEqual(`<rect x="10" y="10" width="200" height="200" fill=${color} />`)) 
    })
  })
})