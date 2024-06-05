// create the parent class Shape for the other shapes to inherit 
class Shape {
    // only property all shapes will share
    constructor(color) {
        this.color = color 
    }
    render() {
        throw new Error("No color used")
    }
}

// create child class (Triangle, Circle, Square, and any others) based off of parent class (shape)

class Triangle extends Shape {
  render() {
    return '<polygon points="150, 20 223, 182 56, 182" fill="green" />'
  }
}

class Circle extends Shape {
  render() {
    '<circle cx="150" cy="100" r="80" fill="green" />'
  }
}

class Square extends Shape {
  render() {
    '<rect x="10" y="10" width="200" height="200" fill="green" />'
  }
}    



module.exports = Square