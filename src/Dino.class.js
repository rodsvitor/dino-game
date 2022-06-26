export default class Dino {

  #intervalAscent;
  #intervalDescent;
  div;

  constructor() {
    this.div = document.createElement('div');
    this.div.id = 'dino';
    this.position = 0;
    this.isJumping = false;
  }

  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
  
      this.#intervalAscent = setInterval(() => {
        if (this.position <= 200) {
          this.#up();
        } else {
          clearInterval(this.#intervalAscent);
          this.#fall();
        }
      }, 20);
    }
  }

  #fall() {
    this.#intervalDescent = setInterval(() => {
      if (this.position > 0) {
        this.#down();
      } else {
        clearInterval(this.#intervalDescent);
        this.isJumping = false;
      }
    }, 20);
  }

  #up() {
    this.position += 20;
    this.div.style.bottom = `${this.position}px`;
  }
  
  #down() {
    this.position -= 20;
    this.div.style.bottom = `${this.position}px`;
  }

  stop() {
    clearInterval(this.#intervalAscent);
    clearInterval(this.#intervalDescent);
  }
}