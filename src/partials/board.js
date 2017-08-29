import {SVG_NS} from '../settings'
export default class Board{

  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  render(svg) {
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', '0');
    rect.setAttributeNS(null, 'y', '0');
    rect.setAttributeNS(null, 'fill', 'black');
    svg.appendChild(rect);

    let line = document.createElementNS(SVG_NS, 'line');
    line.setAttributeNS(null, 'x1', '256px');
    line.setAttributeNS(null, 'y1', '0');
    line.setAttributeNS(null, 'x2', '256px');
    line.setAttributeNS(null, 'y1', '256px');
    line.setAttributeNS(null, 'stroke-dasharray', '10');
    line.setAttributeNS(null, 'stroke', 'red');
    svg.appendChild(line);
  }
}