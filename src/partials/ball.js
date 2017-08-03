import {SVG_NS} from '../settings'
export default class ball{

  constructor(r){
    this.r = r;
  }

  render(svg) {
    let ball = document.createElementNS(SVG_NS, 'ball');
    ball.setAttributeNS(null, this.r)
    ball.setAttributeNS(null, 'x', '0');
    ball.setAttributeNS(null, 'y', '0');
    ball.setAttributeNS(null, 'fill', 'red');
    svg.appendChild(ball);
  }
}

{/* <circle cx="256px" cy="128px" r="8px" fill="red"/> */}