import {SVG_NS, KEYS} from '../settings'
export default class Ball{

  constructor(r, boardWidth, boardHeight) {
    this.r = r;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.sound = new Audio('public/sounds/pong-01.wav');
    this.win = new Audio('public/sounds/fart.wav');
    this.bounce = new Audio('public/sounds/pong-03.wav');
    this.reset();

    document.addEventListener('keydown', event => {
      switch (event.key) {
        case KEYS.one:
          this.direction = 1
          break;

        case KEYS.two:
          this.direction = 2
          break;
      }
    })
  }


  wallCollision(Player1, Player2){
    const hitLeft = this.x - this.r <= 0                         
    const hitRight = this.x + this.r >= this.boardWidth
    const hitTop = this.y - this.r <= 0
    const hitBot = this.y + this.r >= this.boardHeight

    if (hitLeft){
      this.goal(Player2);
      this.vx = -this.vx;

    } else if(hitRight){
      this.goal(Player1);

    } else if (hitTop || hitBot){
      this.vy = -this.vy;
      this.bounce.play();
    }
  }

  paddleCollision(Player1, Player2){
    if(this.vx > 0){
      let paddle = Player2.coordinates(Player2.x, Player2.y, Player2.width, Player2.height);
      let [leftX, rightX, topY, bottomY] = paddle;
      if(this.x + this.r >= leftX  &&  this.y >= topY  &&  this.y <= bottomY){
        this.vx = -this.vx;
        this.sound.play();
       }
    }else {
      let paddle = Player1.coordinates(Player1.x, Player1.y, Player1.width, Player1.height);
      let [leftX, rightX, topY, bottomY] = paddle;
      if(this.x - this.r <= rightX  &&  this.y >= topY  &&  this.y <= bottomY){
        this.vx = -this.vx;
        this.sound.play();
      }
    }
  }

goal(Player){
    Player.score++;
    this.reset();
    this.win.play();
    Player.height += 5
    Player.speed += 1
  }

  render(svg, Player1, Player2) {
    this.x += this.vx
    this.y += this.vy

    this.wallCollision(Player1, Player2);
    this.paddleCollision(Player1, Player2);
    
    let ball = document.createElementNS(SVG_NS, 'circle');
    ball.setAttributeNS(null, 'r', this.r);
    ball.setAttributeNS(null, 'cx', this.x);
    ball.setAttributeNS(null, 'cy', this.y);
    ball.setAttributeNS(null, 'fill', 'red');
    svg.appendChild(ball);
  }

  reset() {
  this.x = this.boardWidth/2;
  this.y = this.boardHeight/2;
  this.vy = 0


  while(this.vy === 0){
  this.vy = Math.floor(Math.random() * 10 - 5);
  }
  this.vx = this.direction * (6 - Math.abs(this.vy));
  }
}
