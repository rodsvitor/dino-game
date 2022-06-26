export default class Cactus {

  constructor() {
    this.div = document.createElement('div');
    this.div.id = 'cactus';    
    this.position = 2000;

    this.move();
  }

  move() {
    this.position -= 20;
    this.div.style.left = `${this.position}px`;
  }
}