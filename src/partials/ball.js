import {SVG_NS} from '../settings'
export default class ball{

  constructor(r, boardWidth, boardHeight) {
    this.r = r;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.reset();
  }

  wallCollision(){
    const hitLeft = this.x - this.r <= 0                            //redundant remove later after paddle collision
    const hitRight = this.x + this.r >= this.boardWidth
    const hitTop = this.y - this.r <= 0
    const hitBot = this.y + this.r >= this.boardHeight

    if (hitLeft || hitRight){
      this.vx = -this.vx
    } else if (hitTop || hitBot){
      this.vy = -this.vy
    }
  }

  render(svg) {
    this.x += this.vx
    this.y += this.vy

    this.wallCollision();
    
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
