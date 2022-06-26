import Dino from "./Dino.class.js";
import Cactus from "./Cactus.class.js";

export default class DinoGame {

  #wilderness;
  #dino;
  #isGameOver;

  constructor() {
    this.#wilderness = document.createElement('div');
    this.#wilderness.id = 'wilderness';
    document.body.appendChild(this.#wilderness);
    this.#isGameOver = false;

    this.createDino();
  }

  createDino() {    
    this.#dino = new Dino();
    this.#wilderness.appendChild(this.#dino.div);
  }

  start() {    
    document.addEventListener('keydown', event => this.#handle.call(this, event));
    this.#throwCactus();
  }

  #handle(event) {    
    if (!this.#isGameOver && (event.keyCode == 32 || event.keyCode == 38))
      this.#dino.jump();
  }

  #throwCactus() {    
    
    if (!this.#isGameOver) {
      let cactus = this.#createCactus();
      let random = Math.random() * 2000;
      
      let cactusMovement = setInterval(() => {
        if (cactus.position <-60) {
          clearInterval(cactusMovement);
          this.#removeCactus(cactus);        
        } else if (this.#isDinoCollided(cactus)) {
          this.#stopGame(cactusMovement);
        } else {

          if (!this.#isGameOver) 
            cactus.move();
        }
        
      }, 20);
            
      setTimeout(this.#throwCactus.bind(this), random);
    }
  }

  #createCactus() {
    let cactus = new Cactus();
    this.#wilderness.appendChild(cactus.div);

    return cactus;
  }
  
  #removeCactus(cactus) {    
    this.#wilderness.removeChild(cactus.div);
  }

  #isDinoCollided(cactus) {
    return cactus.position >= 0
      && cactus.position <= 40
      && this.#dino.position <= 60;
  }

  #stopGame(cactusMovement) {    
    this.#isGameOver = true;
    this.#dino.stop();
    clearInterval(cactusMovement);

    let msgGameOver = document.createElement('h1');
    msgGameOver.id = 'game-over';
    msgGameOver.innerHTML = "GAME-OVER";
    document.body.appendChild(msgGameOver);

    this.#wilderness.style.animationPlayState = 'paused';
    this.#wilderness.style.animationPlayState = 'paused';
  }

}