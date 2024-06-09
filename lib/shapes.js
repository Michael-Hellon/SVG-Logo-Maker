// create the parent class Shape for the other shapes to inherit 
class Shape {
  // only property all shapes will share
  constructor() {
     this.color = ''
  }
  setColor(color){
    this.color = color
  }
}

// create child class (Triangle, Circle, Square, and any others) based off of parent class (shape)
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 20 223, 182 56, 182" fill="${this.color}">`
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="50%" cy="50%" r="80" fill="${this.color}">`
  }
}

class Square extends Shape {
  render() {
    return `<rect x="10" y="10" width="200" height="200" fill="${this.color}">`
  }
}    

module.exports = { Triangle, Circle, Square }