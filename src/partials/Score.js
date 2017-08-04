import {SVG_NS} from '../settings'
export default class score{

  constructor(x, y, size, fill){
    this.x = x;
    this.y = y;
    this.size = size;
    this.fill = fill;
  }

  render(svg, score) {
    let point = document.createElementNS(SVG_NS, 'text');
    point.setAttributeNS(null, 'x', this.x);
    point.setAttributeNS(null, 'y', this.y);
    point.setAttributeNS(null, 'font-size', '30');
    point.setAttributeNS(null, 'fill', 'red');
    point.textContent = score;
    svg.appendChild(point);
  }
}